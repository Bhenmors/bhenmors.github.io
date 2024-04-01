function ChangeColor(color) {
  var divBg = document.getElementById("div-body");
  divBg.classList.remove("bg-primary");
  divBg.classList.remove("bg-info");
  divBg.classList.remove("bg-danger");
  divBg.classList.remove("bg-secondary");
  divBg.classList.remove("bg-warning");
  divBg.classList.remove("bg-light");
  divBg.classList.remove("bg-dark");
  divBg.classList.add(color);

  console.log();
}
