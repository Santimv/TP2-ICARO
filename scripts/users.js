const userProfile = document.querySelector("#profileUser");
const userData2 =
  '<h2 class="tittle1">Santiago</h2><div class="profile-info"><div class="data"><label>email: "Shanna@melissa.tv"</label><label>name: "Ervin Howell"</label><label>phone: "010-692-6593 x09125"</label><label>username: "Antonette"</label><label>website: "anastasia.net"</label></div><div class="data"><label>city: "Wisokyburgh"</label><label>street: "Victor Plains"</label><label>suite: "Suite 879"</label><label>zipcode: "90566-7771"</label></div><div class="data"><label>Compañia: "Deckow-Crist"</label></div></div>';

const userData =
  '<h2 class="tittle1">Santiago</h2><div class="profile-info"><div class="data"><label></label><label></label><label></label><label></label></div><div class="data"><label></label><label></label><label></label><label></label></div><div class="data"><label></label></div></div>';

if (localStorage.getItem("userSelected")) {
  let userProfile = JSON.parse(localStorage.getItem("userSelected"));
  createProfileUserElement(userProfile);
}

function createProfileUserElement(user) {
  userProfile.appendChild(document.createElement("div"));

  userProfile.innerHTML = userData;

  userProfile.children[0].innerText = user.username;
  userProfile.children[1].children[0].children[0].innerText =
    "Nombre: " + user.name;
  userProfile.children[1].children[0].children[1].innerText =
    "Telefono: " + user.phone;
  userProfile.children[1].children[0].children[2].innerText =
    "Email: " + user.email;
  userProfile.children[1].children[0].children[3].innerText =
    "Website: " + user.website;

  return userProfile;
}
