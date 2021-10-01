// Variables de HTML
const users = document.querySelector("#users");

let userInfo =
  '<h1 id="username"></h1><div class="card-info"><label></label><label></label><label></label><label></label></div><a href="/pages/usuario.html"><button class= "btnViewUser">Visitar perfil</button></a><footer><div class="posts"><p><strong>Posteos:</strong></p><p>10</p></div></footer>';
let arrUser = [];
let loading = true;
let btn = [];
let userList = document.getElementById("users");
let idUser;
let userSelected;

// Crear elementos de user
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

// Llamado a la API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    arrUser.push(data);
    loading = false;

    data.forEach((x, i) => {
      users.appendChild(createCardUserElement(i + 1, x));
    });
  })
  .catch((err) => console.log("ERROR: ", err));

// fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function selectUser(e) {
  if (e.target.classList.contains("btnViewUser")) {
    let li = e.target.parentElement;
    idUser = li.getAttribute("id");
  }
  try {
    fetch("https://jsonplaceholder.typicode.com/users/" + idUser)
      .then((response) => response.json())
      .then((json) => {
        userSelected = json;
      });
  } catch (error) {
    console.error(error);
  }
}

userList.addEventListener("click", selectUser);
