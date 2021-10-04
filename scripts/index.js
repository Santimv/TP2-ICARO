const users = document.querySelector("#users");
const btnEnviarContacto = document.querySelector("#btn-send");

let userInfo =
  '<h1 id="username"></h1><div class="card-info"><label></label><label></label><label></label><label></label></div><div><button class= "btnViewUser">Visitar perfil</button></div></div><footer><div class="posts-counter"><p><strong>Posteos:</strong></p><p>10</p></div></footer>';
let arrUser = [];
let loading = true;
let userList = document.getElementById("users");

const createCardUserElement = (id, user) => {
  const element1 = document.createElement("div");
  element1.classList.add("card");

  element1.innerHTML = userInfo;

  element1.children[0].innerText = user.username;
  element1.children[1].children[0].innerText = "Nombre: " + user.username;
  element1.children[1].children[1].innerText = "Email: " + user.email;
  element1.children[1].children[2].innerText = "Telefono: " + user.phone;
  element1.children[1].children[3].innerText = "Web: " + user.website;

  element1.id = "user-" + id;

  element1.children[2].id = id;

  return element1;
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    arrUser.push(data);
    loading = false;

    if (users != undefined) {
      data.forEach((x, i) => {
        users.appendChild(createCardUserElement(i + 1, x));
      });
    }
  })
  .catch((err) => console.log("ERROR: ", err));

async function selectUser(e) {
  if (e.target.classList.contains("btnViewUser")) {
    let li = e.target.parentElement;
    let idUser = li.getAttribute("id");
    let userSelected = await getUserData(idUser);
    console.log(userSelected);
    userSelected
      ? localStorage.setItem("userSelected", JSON.stringify(userSelected))
      : localStorage.clear();
    window.location.href = "/pages/usuario.html";
  }
}

userList?.addEventListener("click", selectUser);

function getUserData(id) {
  try {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => json);
  } catch (error) {
    console.error(error);
  }
}

// CONTACTO

btnEnviarContacto?.addEventListener("click", sendContact);

function sendContact(e) {
  e.preventDefault();
  let nameContact = document.querySelector("#input-name").value;
  let emailContact = document.querySelector("#input-email").value;
  let phoneContact = document.querySelector("#input-phone").value;
  let mgContact = document.querySelector("#input-msg").value;
  let contactJson = { nameContact, emailContact, phoneContact, mgContact };
  console.log(contactJson);
}
