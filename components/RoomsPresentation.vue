<template>
  <section class="p-10 h-auto">
    <div class="px-14 pt-20">
      <div class="flex justify-around w-full h-1/2">
        <img class="p-1 pr-10 w-2/3 h-auto" src="/images/nordique-bain.webp" alt="" />
        <img class="p-1 pl-10 w-1/3 h-auto" src="/images/nordique-sdb.jpeg" alt="" />
      </div>
      <h3 class="py-5 text-5xl font-thin text-gray-900 tracking-widest">Notre appartement avec bain nordique</h3>
      <p class="text-2xl text-gray-900 w-1/2 mb-10">
        Relaxez vous dans un appartement isolé équipé d’un bain nordique parfait pour se détendre sous les étoiles.
      </p>
    </div>

    <div class="px-14 pt-20">
      <div class="flex justify-around w-full h-1/2">
        <img class="p-1 pr-10 w-1/3 h-1/2" src="/images/gite-chambre.webp" alt="" />
        <img class="p-1 pl-10 w-2/3 custom-height object-cover" src="/images/gite-cuisine.webp" alt="" />
      </div>
      <h3 class="py-5 text-5xl font-thin text-gray-900 tracking-widest">Notre gîte avec piscine</h3>
      <p class="text-2xl text-gray-900 w-1/2 mb-10">
        Relaxez vous dans un appartement équipé parfait pour se détendre et profiter de la piscine.
      </p>
    </div>
    <div class="px-14 pt-20">
      <div class="flex justify-around w-full h-1/2">
        <img class="p-1 pr-10 w-2/3 custom-height object-cover" src="/images/spa-jaccuzi.webp" alt="" />
        <img class="p-1 pl-10 w-1/3 h-auto" src="/images/spa-chambre.webp" alt="" />
      </div>
      <h3 class="py-5 text-5xl font-thin text-gray-900 tracking-widest">Notre chambre avec spa privatif</h3>
      <p class="text-2xl text-gray-900 w-1/2 mb-10">Profitez d’un moment de détente dans une ambiance intimiste.</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.custom-height {
  height: 43rem;
}
</style>
