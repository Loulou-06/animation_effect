const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".event2",
  triggerHook: "onEnter",
  duration: "100%",
})
  .setPin(".event1 .pinSection") // Corrigé espace entre sélecteurs
  .addIndicators() // Méthode correcte pour les indicateurs
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event2",
  triggerHook: "onEnter",
  duration: "200%",
})
  .setPin(".event2 .pinSection") // Corrigé espace entre sélecteurs
  .addIndicators() // Méthode correcte pour les indicateurs
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event3",
  triggerHook: "onEnter",
  duration: "300%",
})
  .setPin(".event3 .pinSection") // Corrigé espace entre sélecteurs
  .addIndicators() // Méthode correcte pour les indicateurs
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event4",
  triggerHook: "onEnter",
  duration: "400%",
})
  .setPin(".event4 .pinSection") // Corrigé espace entre sélecteurs
  .addIndicators() // Méthode correcte pour les indicateurs
  .addTo(controller);
