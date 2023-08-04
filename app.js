const boxs = document.getElementsByClassName("box");
let checked = true;
[...boxs].forEach((item) => {
item.addEventListener("click", () => {
    if (checked) {
        item.innerHTML = "x";
    } else {
        item.innerHTML = "o"
    }
    checked = !checked
  });
});