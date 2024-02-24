const image1 = document.querySelector(".imageAnim1");
const image2 = document.querySelector(".imageAnim3");
const image3 = document.querySelector(".imageAnim5");
const image4 = document.querySelector(".imageAnim2");
const image5 = document.querySelector(".imageAnim4");
const image6 = document.querySelector(".imageAnim6");

new simpleParallax(image1, {
  scale: 1.4,
  delay: 1,
  orientation: "left",
});

new simpleParallax(image2, {
  scale: 1.8,
  delay: 1,
  orientation: "down",
});

new simpleParallax(image3, {
  scale: 1.6,
  delay: 1,
  orientation: "up",
});

new simpleParallax(image4, {
  scale: 0.8,
  delay: 1,
  orientation: "right",
});

new simpleParallax(image5, {
  scale: 0.8,
  delay: 1,
  orientation: "left",
});

new simpleParallax(image6, {
  scale: 0.8,
  delay: 1,
  orientation: "right",
});
