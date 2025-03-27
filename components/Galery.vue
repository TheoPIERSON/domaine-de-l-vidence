<template>
  <section class="bg-amber-50 font-cormorant p-8 h-auto">
    <div class="p-24 grid place-items-center">
      <h2 ref="galeryTitle" class="text-7xl text-gray-900 text-center w-2/3 tracking-widest p-2">
        Accueil chaleureux et service irréprochable
      </h2>
      <p ref="galeryDescription" class="text-xl text-gray-900 w-2/3 text-center p-2">
        Votre bien-être est le maitre mot au Domaine de l'Evidence. Faciliter votre séjour et en faire un pur moment de
        détente est notre priorité.
      </p>
    </div>

    <div class="gallery-container grid grid-cols-2 gap-6 p-24">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        :class="[
          'gallery-item overflow-hidden  transition-transform duration-300 hover:scale-105',
          getSizeClass(index),
        ]"
      >
        <img ref="images" :src="image.url" :alt="image.alt" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GalleryImage {
  url: string;
  alt: string;
}
// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const images = ref<HTMLElement | null>(null);
const galeryTitle = ref<HTMLElement | null>(null);
const galeryDescription = ref<HTMLElement | null>(null);

const galleryImages = ref<GalleryImage[]>([
  { url: "/images/gite-serviette.jpeg", alt: "image gite-serviette" },
  { url: "/images/domaine.jpg", alt: "Image domaine" },
  { url: "/images/gite-chambre.webp", alt: "Image gite chambre" },
  { url: "/images/gite-cuisine.webp", alt: "Image gite cuisine" },
  { url: "/images/nordique-bain.webp", alt: "Image bain nordique" },
  { url: "/images/nordique-sdb.jpeg", alt: "Image salle de bain" },
  { url: "/images/piscine.jpeg", alt: "Image piscine" },
  { url: "/images/spa-chambre.webp", alt: "Image spa chambre" },
  { url: "/images/spa-jaccuzi.webp", alt: "Image spa jaccuzi" },
]);

const getSizeClass = (index: number) => {
  const sizeClasses = [
    "row-span-2", // Tall image
    "row-span-1", // Standard image
    "row-span-3", // Very tall image
    "row-span-1", // Standard image
    "row-span-2", // Tall image
    "row-span-1", // Standard image  "row-span-2", // Tall image
    "row-span-1", // Standard image
    "row-span-3", // Very tall image
    "row-span-1", // Standard image
    "row-span-2", // Tall image
  ];
  return sizeClasses[index];
};

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
  if (galeryTitle.value) {
    animateWithScrollTrigger(
      galeryTitle.value,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1 },
      0.2
    );
  }

  if (galeryDescription.value) {
    animateWithScrollTrigger(
      galeryDescription.value,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1 },
      0.4
    );
  }

  // Animation de l'image de gauche
  if (images.value) {
    animateWithScrollTrigger(images.value, { opacity: 0, scale: 0.95 }, { opacity: 1, x: 0, scale: 1 }, 0.6);
  }
});
</script>

<style scoped>
.gallery-container {
  grid-auto-rows: min-content;
}
</style>
