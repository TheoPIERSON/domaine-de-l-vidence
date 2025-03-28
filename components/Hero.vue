<template>
  <section class="relative font-cormorant">
    <img class="object-cover w-screen h-[60vh] md:h-auto md:w-full" src="/images/domaine.jpg" alt="" />
    <div class="absolute inset-0 bg-black bg-opacity-20 grid place-items-center text-center">
      <div class="w-full md:mb-32 pt-10">
        <p class="text-white font-thin opacity-0 animate-fadeIn2">Le domaine de l'Evidence · Pas-de-Calais, France</p>
        <h1 class="text-white text-5xl md:text-8xl opacity-0 animate-fadeIn1">
          Bienvenue au <br />
          Domaine de l'Evidence
        </h1>
        <p class="text-white shadow-lg opacity-0 animate-fadeIn3">1211 rue du Grand Chemin - 62136 Lestrem - France</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn1 {
  animation: fadeIn 1s ease-out 0.2s forwards;
}

.animate-fadeIn2 {
  animation: fadeIn 1s ease-out 0.8s forwards;
}

.animate-fadeIn3 {
  animation: fadeIn 1s ease-out 1.4s forwards;
}
</style>
