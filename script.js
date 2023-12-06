const btnColor = document.getElementsByClassName("btn-color")[0];
const slider = document.querySelectorAll("input[type=range]");
const label = document.querySelectorAll("#label");

// merubah warna background dengan menggunakan class toggle.
btnColor.addEventListener("click", function () {
  if (btnColor) {
    document.body.classList.toggle("active");
    document.body.removeAttribute("style");
  }
});

// menambah tombol baru untuk merubah warna background menjadi random tanpa merubah struktur HTML
const tRandColor = document.createElement("button");
const tBtn = document.createTextNode("Random Color");
tRandColor.appendChild(tBtn);
tRandColor.setAttribute("type", "button");
btnColor.after(tRandColor);

tRandColor.addEventListener("click", function () {
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  label[0].innerHTML = slider[0].value = r;
  label[1].innerHTML = slider[1].value = g;
  label[2].innerHTML = slider[2].value = b;
});

// merubah warna background dengan menggunakan slider
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("input", function () {
    r = slider[0].value;
    g = slider[1].value;
    b = slider[2].value;

    label[i].innerHTML = slider[i].value;

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });
}
