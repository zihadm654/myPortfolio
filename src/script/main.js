const loader = document.querySelector(".screen__loader");
const body = document.querySelector("body");
const counter = () => {
  var count = setInterval(function () {
    var number = parseInt($(".counter").text());
    $(".counter").text((++number).toString());
    $(body).addClass("flow");
    if (number == 100) {
      clearInterval(count);
      $(body).removeClass("flow");
      $(loader).addClass("proActive");
    }
  }, 25);
};
counter();

//screen typeWriter
const text = "Web Developer";
const container = document.querySelector(".typer");
let typer = 0;
const typeWriter = () => {
  container.innerText = text.slice(0, typer);
  typer++;
  if (typer > text.length - 1) {
    typer = 0;
  }
};
setInterval(typeWriter, 200);
//cursor
var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// open sidebar by clicking the hamburger
const menu = document.querySelector(".hamburger");
const button = document.querySelector(".consultation");
const mobile = () => {
  menu.classList.toggle("active");
  button.classList.toggle("is-active");
};
menu.addEventListener("click", mobile);

// testimonial slide
let slidePosition = 0;
const slides = document.getElementsByClassName("content");
const totalSlides = slides.length;
document.getElementById("next").addEventListener("click", function () {
  moveToNext();
});
document.getElementById("previous").addEventListener("click", function () {
  moveToPrevious();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }
  slides[slidePosition].classList.add("visible");
}
function moveToNext() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevious() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
// const box = document.querySelector(".container");
// const sld = document.querySelectorAll(".content");

// let idx = 0;

// const run = () => {
//   idx++;
//   if (idx > sld.length - 1) {
//     idx = 0;
//     console.log("hello");
//   }
//   box.style.transform = `translateX(${-idx * 500}px)`;
// };
// setInterval(run, 1000);

//accordation
var acc = document.getElementsByClassName("accordation");
var panel = document.getElementsByClassName("panel");
for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    var setClasses = !this.classList.contains("active");
    setClass(acc, "active", "remove");
    setClass(panel, "show", "remove");
    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
