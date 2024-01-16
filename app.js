const inputName = document.getElementById("userName");
const form = document.getElementsByTagName("form")[0];
const deleteButton = document.getElementsByClassName("btn-danger")[0];

let userNames = [];
const names = localStorage.getItem("listNames");
let userNameS = JSON.parse(names) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const content = inputName.value;
  userNameS.push(content);
  console.log(userNameS);
  localStorage.setItem("listNames", JSON.stringify(userNameS));
});

deleteButton.addEventListener("click", function () {
  userNameS.pop();
  console.log(userNameS);
  localStorage.setItem("listNames", JSON.stringify(userNameS));
  if (userNameS.length === 0) {
    inputName.value = "inserisci il nome";
  } else {
    inputName.value = userNameS[userNameS.length - 1];
  }
  console.log("click");
});

if (userNameS.length === 0) {
  inputName.value = "inserisci il nome";
} else {
  inputName.value = userNameS[userNameS.length - 1];
}
