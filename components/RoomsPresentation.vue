<template>
  <section class="p-4 md:p-10 h-auto">
    <div class="md:px-14 pt-10 md:pt-20">
      <NuxtLink to="/room/bain-nordique" class="flex justify-around w-full h-1/2">
        <img ref="nordicImage1" class="p-1 md:pr-10 md:w-2/3 h-auto" src="/images/nordique-bain.webp" alt="" />
        <img ref="nordicImage2" class="hidden md:block p-1 pl-10 w-1/3 h-auto" src="/images/nordique-sdb.jpeg" alt="" />
      </NuxtLink>
      <h3 ref="nordicTitle" class="py-5 text-3xl md:text-5xl font-thin text-gray-900 tracking-widest">
        <NuxtLink to="/room/bain-nordique"> Notre appartement avec bain nordique</NuxtLink>
      </h3>
      <p ref="nordicDescription" class="text-xl md:text-2xl text-gray-900 md:w-1/2 mb-10">
        Relaxez vous dans un appartement isolé équipé d'un bain nordique parfait pour se détendre sous les étoiles.
      </p>
    </div>

    <div class="md:px-14 pt-10 md:pt-20">
      <NuxtLink to="/room/gite-piscine" class="flex justify-around w-full h-1/2">
        <img ref="giteImage1" class="p-1 md:pr-10 md:w-1/3 object-cover" src="/images/gite-chambre.webp" alt="" />
        <img
          ref="giteImage2"
          class="hidden md:block p-1 pl-10 w-2/3 custom-height object-cover"
          src="/images/gite-cuisine.webp"
          alt=""
        />
      </NuxtLink>
      <h3 ref="giteTitle" class="py-5 text-3xl md:text-5xl font-thin text-gray-900 tracking-widest">
        <NuxtLink to="/room/gite-piscine"> Notre gîte avec piscine</NuxtLink>
      </h3>
      <p ref="giteDescription" class="text-xl md:text-2xl text-gray-900 md:w-1/2 mb-10">
        Relaxez vous dans un appartement équipé parfait pour se détendre et profiter de la piscine.
      </p>
    </div>
    <div class="md:px-14 pt-10 md:pt-20">
      <NuxtLink to="/room/spa-privatif" class="flex justify-around w-full h-1/2">
        <img
          ref="spaImage1"
          class="p-1 md:pr-10 md:w-2/3 md:custom-height object-cover"
          src="/images/spa-jaccuzi.webp"
          alt=""
        />
        <img
          ref="spaImage2"
          class="hidden md:block p-1 pl-10 w-1/3 h-auto object-cover"
          src="/images/spa-chambre.webp"
          alt=""
        />
      </NuxtLink>
      <h3 ref="spaTitle" class="py-5 text-3xl md:text-5xl font-thin text-gray-900 tracking-widest">
        <NuxtLink to="/room/spa-privatif"> Notre chambre avec spa privatif</NuxtLink>
      </h3>
      <p ref="spaDescription" class="text-xl md:text-2xl text-gray-900 md:w-1/2 mb-10">
        Profitez d'un moment de détente dans une ambiance intimiste.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Références pour les images
const nordicImage1 = ref<HTMLElement | null>(null);
const nordicImage2 = ref<HTMLElement | null>(null);
const giteImage1 = ref<HTMLElement | null>(null);
const giteImage2 = ref<HTMLElement | null>(null);
const spaImage1 = ref<HTMLElement | null>(null);
const spaImage2 = ref<HTMLElement | null>(null);

// Références pour les titres et descriptions
const nordicTitle = ref<HTMLElement | null>(null);
const nordicDescription = ref<HTMLElement | null>(null);
const giteTitle = ref<HTMLElement | null>(null);
const giteDescription = ref<HTMLElement | null>(null);
const spaTitle = ref<HTMLElement | null>(null);
const spaDescription = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (!process.client) return; // Vérification pour éviter les erreurs côté serveur

  // Importer GSAP uniquement après le montage du composant
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  // Fonction pour animer les images avec un effet de fade in
  const animateImageFadeIn = (imageRef: Ref<HTMLElement | null>, delay = 0) => {
    if (!imageRef.value) return;
    gsap.fromTo(
      imageRef.value,
      { opacity: 0, scale: 0.95, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        delay,
        ease: "power.out",
        scrollTrigger: {
          trigger: imageRef.value,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  // Fonction pour animer les textes avec un effet de fade depuis la gauche
  const animateTextFadeFromLeft = (textRef: Ref<HTMLElement | null>, delay = 0) => {
    if (!textRef.value) return;
    gsap.fromTo(
      textRef.value,
      { opacity: 0, x: -50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.value,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  // Animer les éléments de chaque section
  animateImageFadeIn(nordicImage1);
  animateImageFadeIn(nordicImage2, 0.2);
  animateTextFadeFromLeft(nordicTitle, 0.3);
  animateTextFadeFromLeft(nordicDescription, 0.4);

  animateImageFadeIn(giteImage1, 0.3);
  animateImageFadeIn(giteImage2, 0.4);
  animateTextFadeFromLeft(giteTitle, 0.3);
  animateTextFadeFromLeft(giteDescription, 0.4);

  animateImageFadeIn(spaImage1, 0.3);
  animateImageFadeIn(spaImage2, 0.4);
  animateTextFadeFromLeft(spaTitle, 0.3);
  animateTextFadeFromLeft(spaDescription, 0.4);
});
</script>

<style scoped>
.custom-height {
  height: 43rem;
}
</style>
