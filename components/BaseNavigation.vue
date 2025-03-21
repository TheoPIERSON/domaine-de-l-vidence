<template>
  <div class="font-cormorant">
    <!-- Navbar principale transparente -->
    <nav class="flex justify-between items-center p-6 px-32 fixed w-full z-50">
      <div class="grid place-items-center text-black">
        <p>Emoji rose</p>
        <p>Le Domaine de l'Evidence</p>
      </div>
      <div>
        <button @click="toggleMenu" class="focus:outline-none relative">
          <Icon v-if="!menuOpen" name="prime:align-right" style="color: black" class="w-6 h-6" />
          <Icon v-else name="prime:times" style="color: white" class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Menu plein écran toujours présent mais caché -->
    <div
      class="fixed inset-0 menu-bg z-40 flex flex-col transition-opacity duration-300 ease-in-out"
      :class="{ 'opacity-100 visible': menuOpen, 'opacity-0 invisible': !menuOpen }"
    >
      <div class="p-8 pt-24 mb-20">
        <ul class="space-y-8 text-2xl text-white">
          <li><a href="#" class="hover:underline" @click="closeMenu">Accueil</a></li>
          <li><a href="#" class="hover:underline" @click="closeMenu">Les appartements</a></li>
          <li><a href="#" class="hover:underline" @click="closeMenu">Les prestations</a></li>
          <li><a href="#" class="hover:underline" @click="closeMenu">Accès & Contact</a></li>
          <li>
            <a href="#" class="hover:underline" @click="closeMenu">
              Français
              <Icon name="flagpack:gp" style="color: white" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
      <div class="ml-8">
        <a href="#" class="p-4 px-8 m-10 bg-rose-800 hover:bg-rose-900 text-white text-2xl" @click="closeMenu"
          >Réserver</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<style scoped>
/* Image d'arrière-plan pour le menu plein écran */
.menu-bg {
  background-image: url("/images/nordique-bain.webp");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
}

/* Overlay pour améliorer la lisibilité du texte */
.menu-bg::before {
  content: "";
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -10;
}

/* Classe qui rend le menu visible */
.opacity-100 {
  opacity: 1;
  visibility: visible;
}

.opacity-0 {
  opacity: 0;
  visibility: hidden;
}
</style>
