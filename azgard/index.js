const inputs = document.querySelectorAll(".input-field");
const navBullets = document.querySelectorAll(".navigation span");
const images = document.querySelectorAll(".image");

inputs.forEach((element) => {
  element.addEventListener("focus", () => {
    element.classList.add("active");
  });
});

/**
 * Moves the slider to the specified index.
 *
 * @param {String} index - The index of the slider to move to.
 * @return {void} This function does not return anything.
 */
function moveSlider() {
  let index = this.dataset.value;

  // For the images
  let currentImage = document.querySelector(`.slide-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  // For the text
  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  // For the navigation bullets
  navBullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

navBullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
