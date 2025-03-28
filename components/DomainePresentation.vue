<template>
  <section class="bg-amber-50 font-cormorant p-8 h-auto">
    <h2 class="p-4 md:p-24 text-3xl md:text-7xl font-thin text-gray-900 w-full tracking-wide md:tracking-widest">
      <span v-for="(word, index) in titleWords" :key="index" ref="wordRefs" class="inline-block opacity-0 mr-4">
        {{ word }}
      </span>
    </h2>
    <p ref="descriptionRef1" class="text-xl md:text-2xl text-gray-900 md:w-2/5 ml-4 md:ml-24">
      Le domaine de l'Evidence propose des lieux d'évasion et de tranquilité en proximité de la métropole Lilloise.
    </p>
    <p ref="descriptionRef2" class="text-xl md:text-2xl text-gray-900 md:w-1/2 ml-4 md:ml-24 mb-10">
      Venez découvrir nos habitations.
    </p>
    <a
      ref="buttonRef"
      href="https://www.ledomainedelevidence.com/fr/chambres.fr"
      target="_blank"
      class="p-3 px-8 ml-24 bg-orange-800 hover:bg-orange-900 text-white text-2xl"
    >
      Réserver
    </a>
    <RoomsPresentation />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mots du titre
const titleText = "Un cocon de calme et de relaxation";
const titleWords = computed(() => titleText.split(" "));

// Créer des références pour les éléments à animer
const wordRefs = ref<HTMLElement[]>([]);
const descriptionRef1 = ref(null);
const descriptionRef2 = ref(null);
const buttonRef = ref(null);

onMounted(() => {
  // Animation des mots du titre (de bas en haut)
  gsap.fromTo(
    wordRefs.value,
    {
      opacity: 0,
      y: 50, // Départ du mot plus bas
    },
    {
      opacity: 1,
      y: 0, // Position finale
      duration: 0.7,
      stagger: 0.2, // Délai entre chaque mot
      ease: "power2.out",
      scrollTrigger: {
        trigger: wordRefs.value[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animations précédentes conservées
  gsap.fromTo(
    descriptionRef1.value,
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descriptionRef1.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    descriptionRef2.value,
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descriptionRef2.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    buttonRef.value,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.9,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: buttonRef.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
</script>

<style scoped>
/* Styles existants conservés */
</style>
