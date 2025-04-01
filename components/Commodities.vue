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
      <NuxtLink to="/commodities" class="grid place-items-start w-1/2 p-4 md:p-8 image-link">
        <img class="object-cover w-full h-96" src="/images/gite-serviette.jpeg" alt="Serviette du gîte" />
        <p>Découvrir</p>
      </NuxtLink>
      <NuxtLink to="/commodities" class="grid place-items-start w-1/2 p-4 md:p-8 image-link">
        <img class="object-cover w-full h-96" src="/images/piscine.jpeg" alt="Piscine" />
        <p>Découvrir</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Vérification pour éviter l'exécution côté serveur
if (process.client) {
  import("gsap").then((module) => {
    const gsap = module.gsap;
    import("gsap/ScrollTrigger").then((plugin) => {
      gsap.registerPlugin(plugin.ScrollTrigger);

      const commoditiesTitle = ref<HTMLElement | null>(null);
      const commoditiesDescription = ref<HTMLElement | null>(null);

      onMounted(() => {
        if (!commoditiesTitle.value || !commoditiesDescription.value) return;

        // Animation du titre et de la description
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: commoditiesTitle.value,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(commoditiesTitle.value, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
        }).from(
          commoditiesDescription.value,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        );

        // Animation des images avec fade-in
        const imageLinks = document.querySelectorAll(".image-link");

        imageLinks.forEach((image) => {
          gsap.from(image, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    });
  });
}
</script>

<style scoped></style>
