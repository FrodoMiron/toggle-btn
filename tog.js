let toggle = document.querySelector("#checkbox");

theme.getAttribute("href");

toggle.onclick = function () {
  let theme = document.querySelector("#theme");
  let txt = document.querySelector("#txt");

  if (txt.innerHTML == "Light mode") {
    txt.innerHTML = "Dark mode";
  } else {
    txt.innerHTML = "Light mode";
  }

  if (theme.getAttribute("href") == "tog.css") {
    theme.href = "dark-tog.css";
  } else {
    theme.href = "tog.css";
  }
};
