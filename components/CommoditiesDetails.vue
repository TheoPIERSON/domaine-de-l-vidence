<template>
  <section class="pt-24 bg-amber-50 font-cormorant grid w-screen grid-rows-3 h-screen">
    <NuxtLink to="/" class="text-3xl md:text-7xl text-gray-900 tracking-widest relative image-link">
      <img src="/images/planche.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <!-- Overlay sombre -->
      <h2 class="absolute inset-0 flex items-center justify-center text-center text-gray-100">Le Goût de l'Evidence</h2>
    </NuxtLink>

    <NuxtLink to="/" class="text-3xl md:text-7xl text-gray-900 tracking-widest relative image-link">
      <img src="/images/Massage.jpeg" alt="" class="w-full h-full object-cover" />
      <h2 class="absolute inset-0 flex items-center justify-center text-center text-gray-100">Domaine du bien-être</h2>
    </NuxtLink>
    <NuxtLink to="/" class="text-3xl md:text-7xl text-gray-900 tracking-widest relative image-link">
      <img src="/images/avion.jpg" alt="" class="w-full h-full object-cover" />
      <h2 class="absolute inset-0 flex items-center justify-center text-center text-gray-100">
        Entre Terre, Mer et Ciel
      </h2>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2; /* S'assurer que le texte est au-dessus de l'overlay */
}

.image-link {
  position: relative;
}

.image-link::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 1;
  transition: 600ms;
}
.image-link:hover::after {
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}
</style>
