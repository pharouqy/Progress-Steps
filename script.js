const circles = document.querySelectorAll(".progress-container .circle");
const progress = document.querySelector(".progress");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let current = 1;

next.addEventListener("click", () => {
  current++;
  if (current > circles.length) {
    current = circles.length;
  }
  console.log(current);
  colors();
});

prev.addEventListener("click", () => {
  current--;
  if (current < 1) {
    current = 1;
  }
  console.log(current);
  colors();
});

function colors() {
  circles.forEach((circle, index) => {
    console.log(circle, index + 1);
    if (index < current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const activesCricles = document.querySelectorAll(".active");

  progress.style.width =
    ((activesCricles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (current === 1) {
    prev.disabled = true;
  } else if (current === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
