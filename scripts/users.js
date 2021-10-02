const userProfile = document.querySelector("#profileUser");

const userData =
  '<h2 class="tittle1">Santiago</h2><div class="profile-info"><div class="data"><h3 class="tittle2">Datos Personales</h3><label></label><label></label><label></label><label></label></div><div class="data"><h3 class="tittle2">Ubicación</h3><label></label><label></label><label></label><label></label></div><div class="data"><h3 class="tittle2">Compañía</h3><label></label><label></label></div></div>';

if (localStorage.getItem("userSelected")) {
  let userProfile = JSON.parse(localStorage.getItem("userSelected"));
  createProfileUserElement(userProfile);
}

function createProfileUserElement(user) {
  userProfile.appendChild(document.createElement("div"));

  userProfile.innerHTML = userData;

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
