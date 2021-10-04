const posts = document.querySelector("#postsPage");
let arrPosts = [];
let numberID;
const postTemplate = '<div class="post"><h4></h4><span></span></div>';
const btnFilter = document.querySelector("#btn-filter");

function createPostElement(post, i) {
  const postElement = document.createElement("div");
  postElement.innerHTML = postTemplate;

  postElement.children[0].children[0].innerText = i + ". " + post?.title;
  postElement.children[0].children[1].innerText = post?.body;

  postElement.id = "post-" + post?.id;

  return postElement;
}

function setIDFilter() {
  numberID = document.querySelector("#input-filter").value;
  localStorage.setItem("idUserFilter", numberID);
  window.location.reload();
}

const onInit = () => {
  let localID = localStorage.getItem("idUserFilter", numberID);

  if (localID == undefined || localID.length == 0 || localID <= 0) {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((jsonData) => {
          arrPosts = jsonData;
          arrPosts.forEach((x, i) => {
            posts.appendChild(createPostElement(x, i + 1));
          });
        });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  } else {
    console.log("el id existe");
    try {
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + localID)
        .then((response) => response.json())
        .then((jsonData) => {
          arrPosts = jsonData;
          console.log(arrPosts);
          arrPosts.forEach((x, i) => {
            posts.appendChild(createPostElement(x, i + 1));
          });
        });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }
};

onInit();

btnFilter?.addEventListener("click", setIDFilter);
