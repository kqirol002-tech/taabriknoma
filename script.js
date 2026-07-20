let tugma = document.querySelector(".tugma");
let ism = document.querySelector(".ism");
let div_modal = document.querySelector(".project-modal");
let familiya = document.querySelector(".age");
let matn = document.querySelector(".matn");
let pink = document.querySelector(".pink");
let blue = document.querySelector(".blue");
let orange = document.querySelector(".orange");
let green = document.querySelector(".green");
let bluewiolet = document.querySelector(".bluewiolet");
let blah = document.querySelector("#blah");
let imgInp = document.querySelector("#imgInp");
let image = document.querySelector(".img");
let dizayn = document.querySelector(".flex-btn-1");
let none = document.querySelector(".none");
let div = document.querySelector(".project");
let bg = document.querySelector(".bg");
let bg_modal = document.querySelector(".bg-modal");

tugma.addEventListener("click", (e) => {
  e.preventDefault();

  let name = ism.value;
  div_modal.querySelector(".project-name").innerText = name;
  div.querySelector(".project-name").innerText = name;

  let name3 = matn.value;
  div_modal.querySelector(".project-text").innerText = name3;
  div.querySelector(".project-text").innerText = name3;

  let name4 = familiya.value;
  div_modal.querySelector(".yosh").innerText = name4;
  div.querySelector(".yosh").innerText = name4;

  let name5 = image.value;
  div_modal.querySelector(".project-img").src = name5;
  div.querySelector(".project-img").src = name5;
});
pink.addEventListener("click", (e1) => {
  e1.preventDefault();

  bg.style.backgroundImage =
    "url('https://template.canva.com/EAGS_pIbYkY/1/0/1131w-jL4tQYA06a8.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg_modal.style.backgroundImage =
    "url('https://template.canva.com/EAGS_pIbYkY/1/0/1131w-jL4tQYA06a8.jpg')";
  bg_modal.style.backgroundSize = "cover";
  bg_modal.style.backgroundPosition = "center";
});
blue.addEventListener("click", (e2) => {
  e2.preventDefault();

  bg.style.backgroundImage =
    "url('https://i.pinimg.com/736x/db/d6/84/dbd684dfc4f653093cf51599c87dbef4.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg_modal.style.backgroundImage =
    "url('https://i.pinimg.com/736x/db/d6/84/dbd684dfc4f653093cf51599c87dbef4.jpg')";
  bg_modal.style.backgroundSize = "cover";
  bg_modal.style.backgroundPosition = "center";
});
orange.addEventListener("click", (e3) => {
  e3.preventDefault();

  bg.style.backgroundImage =
    "url('https://img.magnific.com/premium-photo/festive-birthday-cupcake-with-balloons-confetti-orange-background_1298956-7555.jpg?semt=ais_hybrid&w=740&q=80')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg_modal.style.backgroundImage =
    "url('https://img.magnific.com/premium-photo/festive-birthday-cupcake-with-balloons-confetti-orange-background_1298956-7555.jpg?semt=ais_hybrid&w=740&q=80')";
  bg_modal.style.backgroundSize = "cover";
  bg_modal.style.backgroundPosition = "center";
});
green.addEventListener("click", (e4) => {
  e4.preventDefault();

  bg.style.backgroundImage =
    "url('https://img.magnific.com/premium-vector/birthday-photo-frame-event-party-bitrhday-celebration-gold-glitter-green-background_1023797-1561.jpg?semt=ais_hybrid&w=740&q=80')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
   bg_modal.style.backgroundImage =
    "url('https://img.magnific.com/premium-vector/birthday-photo-frame-event-party-bitrhday-celebration-gold-glitter-green-background_1023797-1561.jpg?semt=ais_hybrid&w=740&q=80')";
  bg_modal.style.backgroundSize = "cover";
  bg_modal.style.backgroundPosition = "center";
});
bluewiolet.addEventListener("click", (e5) => {
  e5.preventDefault();

  bg.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/previews/060/298/187/non_2x/purple-background-with-golden-happy-birthday-greeting-and-many-colorful-balloons-flying-upright-vector.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg_modal.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/previews/060/298/187/non_2x/purple-background-with-golden-happy-birthday-greeting-and-many-colorful-balloons-flying-upright-vector.jpg')";
  bg_modal.style.backgroundSize = "cover";
  bg_modal.style.backgroundPosition = "center";
});
imgInp.onchange = (evt) => {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
};
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

/* Close when clicking outside the modal box */
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

/* Close when pressing Escape */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
