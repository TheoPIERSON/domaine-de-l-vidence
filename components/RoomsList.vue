<template>
  <section class="flex h-screen w-full font-cormorant">
    <NuxtLink to="/room" class="relative h-full w-1/3 overflow-hidden">
      <img src="/images/domaine.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-4xl font-semibold text-center drop-shadow-lg">Gite avec piscine</h2>
      </div>
    </NuxtLink>
    <div class="relative h-full w-1/3 overflow-hidden">
      <img src="/images/domaine.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-4xl font-semibold text-center drop-shadow-lg">Spa Privatif</h2>
      </div>
    </div>
    <div class="relative h-full w-1/3 overflow-hidden">
      <img src="/images/domaine.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-4xl font-semibold text-center drop-shadow-lg">Bain nordique</h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
