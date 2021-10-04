const userProfile = document.querySelector("#profileUser");
const posts = document.querySelector("#posts");
let arrPosts = [];
const userTemplate =
  '<h2 class="tittle1">Santiago</h2><div class="profile-info"><div class="data"><h3 class="tittle2">Datos Personales📝</h3><label></label><label></label><label></label><label></label></div><div class="data"><h3 class="tittle2">Ubicación📌</h3><label></label><label></label><label></label><label></label></div><div class="data"><h3 class="tittle2">Compañía🏢</h3><label></label><label></label></div></div>';
const postTemplate = '<div class="post"><h4></h4><span></span></div>';
let userData;

if (localStorage.getItem("userSelected")) {
  userData = JSON.parse(localStorage.getItem("userSelected"));
  createProfileUserElement(userData);
  getPosts();
} else {
  alert("Ha ocurrido un error al intentar cargar el perfil");
}

function createProfileUserElement(user) {
  userProfile.appendChild(document.createElement("div"));

  userProfile.innerHTML = userTemplate;

  userProfile.children[0].innerText = user.username;
  userProfile.children[1].children[0].children[1].innerText =
    "Nombre: " + user.name;
  userProfile.children[1].children[0].children[2].innerText =
    "Teléfono: " + user.phone;
  userProfile.children[1].children[0].children[3].innerText =
    "Email: " + user.email;
  userProfile.children[1].children[0].children[4].innerText =
    "Website: " + user.website;
  userProfile.children[1].children[1].children[1].innerText =
    "Ciudad: " + user.address.city;
  userProfile.children[1].children[1].children[2].innerText =
    "Calle: " + user.address.street;
  userProfile.children[1].children[1].children[3].innerText =
    "Suite: " + user.address.suite;
  userProfile.children[1].children[1].children[4].innerText =
    "Cód. Postal: " + user.address.zipcode;
  userProfile.children[1].children[2].children[1].innerText =
    "Nombre Social: " + user.company.name;
  userProfile.children[1].children[2].children[2].innerText =
    "Eslogan: " + user.company.catchPhrase;
  return userProfile;
}

const createPostElement = (post, i) => {
  const postElement = document.createElement("div");
  postElement.innerHTML = postTemplate;

  postElement.children[0].children[0].innerText = i + ". " + post.title;
  postElement.children[0].children[1].innerText = post.body;

  postElement.id = "post-" + post.id;

  return postElement;
};

function getPosts() {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userData.id)
      .then((response) => response.json())
      .then((jsonData) => {
        arrPosts = jsonData;
        arrPosts.forEach((x, i) => {
          posts.appendChild(createPostElement(x, i + 1));
        });
      });
  } catch (err) {
    return console.log("ERROR: ", err);
  }
}
