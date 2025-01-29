const navbar = document.getElementById("navbar");
const scrollThreshold = 5;

window.addEventListener("scroll", () => {
  //   console.log("scroll top: " + document.documentElement.scrollTop);
  //   console.log("scroll Y: " + window.scrollY);

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add(
      "drop-shadow-xl",
      "bg-neutral-100",
      "border-transparent"
    );
  } else {
    navbar.classList.remove(
      "drop-shadow-xl",
      "bg-neutral-100",
      "border-transparent"
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.remove("opacity-0", "blur-sm", "translate-y-5");
    }, index * 100);
  });
});
