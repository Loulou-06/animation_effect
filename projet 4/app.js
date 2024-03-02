const path = [{ x: 2500, y: 400 }];
// gsap.registerPlugin(BezierPlugin);

const path2 = [
  { x: 0, y: 500 },
  { x: 0, y: 200 },
  { x: 600, y: 100 },
  { x: 2000, y: 100 },
];

const plane = document.getElementById("plane");

//partie greenshock
const TL = new TimelineMax();

TL.to(plane, 2, {
  bezier: { values: path, autoRotate: true },
  scale: 2.5,
  curviness: 1000, // Ajustez la courbure selon vos besoins
  type: "hard",
  ease: Power1.easeInOut,
});
TL.to(plane, 3, {
  bezier: { values: path2, autoRotate: true },
  scale: 0.5,
  ease: Power1.easeInOut,
});

//partie scrollmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: 3000,
  triggerHook: 0.4,
})
  .setPin(plane)
  .setTween(TL)
  .addIndicators()
  //   .reverse(false)
  .addTo(controller);
