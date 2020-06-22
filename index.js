let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 2; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};

// secod Carusel

let x = 1;
for (let GDG_LI of document.querySelectorAll(".GDG_li")) {
  GDG_LI.style.position = "relative";
  GDG_LI.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${x}</span>`
  );
  i++;
}

let size = 200;
let res = 2;

let GDG_UL = document.getElementById("GDG_ul");
let listItems = document.querySelectorAll("li");

let state = 0;

document.getElementById("GDG_prev").onclick = function () {
  state += size * res;
  state = Math.min(state, 0);
  GDG_UL.style.marginLeft = state + "px";
};

document.getElementById("GDG_next").onclick = function () {
  state -= size * res;
  state = Math.max(state, -size + (listItems.length - res));
  GDG_UL.style.marginLeft = state + "px";
};


//modal
$(".gamburger_img").on("click", function () {
  $(".modal_gamburger").slideDown("slow");
  $('.gamburger_menu_mobile').css({display:'none'})
});

$(".close").on("click", function () {
  $(".modal_gamburger").slideUp("slow");
  $('.gamburger_menu_mobile').css({display:'flex'})
});
