<template>
  <section class="font-cormorant md:p-8 h-auto">
    <div class="p-12 md:p-24 grid place-items-center">
      <h2 ref="commoditiesTitle" class="text-3xl md:text-7xl text-gray-900 text-center md:w-2/3 tracking-widest p-2">
        Commodités, Soin et Bien-être
      </h2>
      <p ref="commoditiesDescription" class="text-xl text-gray-900 md:w-2/3 text-center p-2">
        Le temps s'arrête dès que l'arrivée dans le domaine où le calme et la tranquillité sont de mise.
      </p>
    </div>
    <div class="flex justify-center items-center">
      <div ref="imageLeft" class="grid place-items-start w-1/2 p-4 md:p-8">
        <img class="object-cover w-full h-96" src="/images/gite-serviette.jpeg" alt="" />
        <p>Découvrir</p>
      </div>
      <div ref="imageRight" class="grid place-items-start w-1/2 p-4 md:p-8">
        <img class="object-cover w-full h-96" src="/images/piscine.jpeg" alt="" />
        <p>Découvrir</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const imageLeft = ref<HTMLElement | null>(null);
const imageRight = ref<HTMLElement | null>(null);
const commoditiesTitle = ref<HTMLElement | null>(null);
const commoditiesDescription = ref<HTMLElement | null>(null);

onMounted(() => {
  // Fonction générique pour animer un élément avec ScrollTrigger
  const animateWithScrollTrigger = (
    element: HTMLElement | null,
    fromOptions: gsap.TweenVars,
    toOptions: gsap.TweenVars,
    delay = 0
  ) => {
    if (!element) return;

    gsap.fromTo(element, fromOptions, {
      ...toOptions,
      duration: 1,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  };

  // Animation des textes
  if (commoditiesTitle.value) {
    animateWithScrollTrigger(
      commoditiesTitle.value,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1 },
      0.2
    );
  }

  if (commoditiesDescription.value) {
    animateWithScrollTrigger(
      commoditiesDescription.value,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1 },
      0.4
    );
  }

  // Animation de l'image de gauche
  if (imageLeft.value) {
    animateWithScrollTrigger(imageLeft.value, { opacity: 0, x: -50, scale: 0.95 }, { opacity: 1, x: 0, scale: 1 }, 0.6);
  }

  // Animation de l'image de droite
  if (imageRight.value) {
    animateWithScrollTrigger(imageRight.value, { opacity: 0, x: 50, scale: 0.95 }, { opacity: 1, x: 0, scale: 1 }, 0.8);
  }
});
</script>

<style scoped></style>
