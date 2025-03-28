<template>
  <section class="p-4 md:p-10 h-auto">
    <div class="md:px-14 pt-20">
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

    <div class="md:px-14 pt-20">
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
    <div class="md:px-14 pt-20">
      <NuxtLink to="/room/spa-privatif" class="flex justify-around w-full h-1/2">
        <img
          ref="spaImage1"
          class="p-1 md:pr-10 md:w-2/3 md:custom-height object-cover"
          src="/images/spa-jaccuzi.webp"
          alt=""
        />
        <img ref="spaImage2" class="hidden md:block p-1 pl-10 w-1/3 h-auto" src="/images/spa-chambre.webp" alt="" />
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Références pour les images
const nordicImage1 = ref(null);
const nordicImage2 = ref(null);
const giteImage1 = ref(null);
const giteImage2 = ref(null);
const spaImage1 = ref(null);
const spaImage2 = ref(null);

// Références pour les titres et descriptions
const nordicTitle = ref(null);
const nordicDescription = ref(null);
const giteTitle = ref(null);
const giteDescription = ref(null);
const spaTitle = ref(null);
const spaDescription = ref(null);

onMounted(() => {
  // Fonction pour animer les images avec un effet de fade in
  const animateImageFadeIn = (imageRef: any, delay = 0) => {
    gsap.fromTo(
      imageRef.value,
      {
        opacity: 0,
        scale: 0.95, // Légèrement réduit
        y: 10, // Décalage vers le bas
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        delay: delay,
        ease: "power.out",
        scrollTrigger: {
          trigger: imageRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  // Fonction pour animer les textes avec un effet de fade depuis la gauche
  const animateTextFadeFromLeft = (textRef: any, delay = 0) => {
    gsap.fromTo(
      textRef.value,
      {
        opacity: 0,
        x: -50, // Démarre à gauche
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0, // Position finale
        scale: 1,
        duration: 0.6,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  // Animer les images de chaque section
  // Section Bain Nordique
  animateImageFadeIn(nordicImage1);
  animateImageFadeIn(nordicImage2, 0.2);
  animateTextFadeFromLeft(nordicTitle, 0.3);
  animateTextFadeFromLeft(nordicDescription, 0.4);

  // Section Gîte
  animateImageFadeIn(giteImage1, 0.3);
  animateImageFadeIn(giteImage2, 0.4);
  animateTextFadeFromLeft(giteTitle, 0.3);
  animateTextFadeFromLeft(giteDescription, 0.4);

  // Section Spa
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
