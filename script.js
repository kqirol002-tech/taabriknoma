let tugma = document.querySelector(".tugma");
let ism = document.querySelector(".ism");
let div = document.querySelector(".project");
let familiya = document.querySelector(".age");
let matn = document.querySelector(".matn");
let pink = document.querySelector(".pink");
let blue = document.querySelector(".blue");
let orange = document.querySelector(".orange");
let green = document.querySelector(".green");
let bluewiolet = document.querySelector(".bluewiolet");
let img = document.querySelector(".img");
let bg = document.querySelector(".bg");

tugma.addEventListener("click", (e) => {
  e.preventDefault();

  let name2 = familiya.value;
  div.getElementsByTagName("p")[0].innerText = name2;

  let name = ism.value;
  div.getElementsByTagName("h2")[0].innerText = name;

  let name3 = matn.value;
  div.getElementsByTagName("p")[0].innerText = name3;

  let name4 = familiya.value;
  div.getElementsByTagName("pre")[0].innerText = name4;
});
pink.addEventListener("click", (e1) => {
  e1.preventDefault();

  bg.style.backgroundImage =
    "url('https://template.canva.com/EAGS_pIbYkY/1/0/1131w-jL4tQYA06a8.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
});
blue.addEventListener("click", (e2) => {
  e2.preventDefault();

  bg.style.backgroundImage =
    "url('https://i.pinimg.com/736x/db/d6/84/dbd684dfc4f653093cf51599c87dbef4.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
});
orange.addEventListener("click", (e3) => {
  e3.preventDefault();

  bg.style.backgroundImage =
    "url('https://img.magnific.com/premium-photo/festive-birthday-cupcake-with-balloons-confetti-orange-background_1298956-7555.jpg?semt=ais_hybrid&w=740&q=80')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
});
green.addEventListener("click", (e4) => {
  e4.preventDefault();

  bg.style.backgroundImage =
    "url('https://img.magnific.com/premium-vector/birthday-photo-frame-event-party-bitrhday-celebration-gold-glitter-green-background_1023797-1561.jpg?semt=ais_hybrid&w=740&q=80')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
});
bluewiolet.addEventListener("click", (e5) => {
  e5.preventDefault();

  bg.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/previews/060/298/187/non_2x/purple-background-with-golden-happy-birthday-greeting-and-many-colorful-balloons-flying-upright-vector.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
});
