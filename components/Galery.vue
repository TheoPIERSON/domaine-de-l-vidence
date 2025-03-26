<template>
  <section class="bg-amber-50 font-cormorant p-8 h-auto">
    <div class="p-24 grid place-items-center">
      <h2 class="text-7xl text-gray-900 text-center w-2/3 tracking-widest p-2">
        Accueil chaleureux et service irréprochable
      </h2>
      <p class="text-xl text-gray-900 w-2/3 text-center p-2">
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
        <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface GalleryImage {
  url: string;
  alt: string;
}

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
</script>

<style scoped>
.gallery-container {
  grid-auto-rows: min-content;
}
</style>
