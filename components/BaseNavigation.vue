<template>
  <div class="font-cormorant">
    <!-- Navbar principale transparente -->
    <nav
      class="flex justify-between items-center p-6 px-10 md:px-32 fixed w-screen md:w-full z-50 border-b border-gray-300 transition-transform duration-300 ease-in-out bg-white bg-opacity-10"
      :class="{ 'translate-y-0': !isScrollingDown || menuOpen, '-translate-y-full': isScrollingDown && !menuOpen }"
    >
      <a href="/" class="grid place-items-center text-black">
        <p>Emoji rose</p>
        <p>Le Domaine de l'Evidence</p>
      </a>
      <div>
        <button @click="toggleMenu" class="focus:outline-none relative">
          <Icon v-if="!menuOpen" name="prime:align-right" style="color: black" class="w-6 h-6" />
          <Icon v-else name="prime:times" style="color: white" class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Menu plein écran qui suit la position de défilement -->
    <div
      class="fixed z-40 flex flex-col transition-opacity duration-300 ease-in-out menu-container"
      :class="{ 'opacity-100 visible': menuOpen, 'opacity-0 invisible': !menuOpen }"
      :style="menuOpen ? { top: '0', bottom: '0', left: '0', right: '0' } : {}"
    >
      <div class="menu-bg w-full h-full absolute"></div>
      <div class="p-8 pt-24 mb-20 mt-10 relative z-10">
        <ul class="space-y-8 text-2xl text-white">
          <li><NuxtLink to="/" class="hover:underline" @click="closeMenu">Accueil</NuxtLink></li>

          <li><NuxtLink to="/rooms" class="hover:underline" @click="closeMenu">Les appartements</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:underline" @click="closeMenu">Les prestations</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:underline" @click="closeMenu">Accès & Contact</NuxtLink></li>
          <li>
            <a href="#" class="hover:underline" @click="closeMenu">
              Français
              <Icon name="flagpack:gp" style="color: white" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
      <div class="ml-8 relative z-10">
        <a href="#" class="p-4 px-8 m-10 bg-rose-800 hover:bg-rose-900 text-white text-2xl" @click="closeMenu"
          >Réserver</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const isScrollingDown = ref(false);
const lastScrollTop = ref(0);
const scrollThreshold = 10; // Le nombre de pixels de défilement nécessaire pour déclencher le changement

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  // Vérifie si l'utilisateur a défilé suffisamment pour déclencher le changement
  if (Math.abs(currentScrollTop - lastScrollTop.value) < scrollThreshold) return;

  // Déterminer la direction du défilement
  isScrollingDown.value = currentScrollTop > lastScrollTop.value;

  // Mettre à jour la position de défilement précédente
  lastScrollTop.value = currentScrollTop;
};

// Ajouter l'écouteur d'événement au montage du composant
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Nettoyer l'écouteur d'événement lors du démontage du composant
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Conteneur du menu */
.menu-container {
  opacity: 0;
  visibility: hidden;
}

/* Image d'arrière-plan pour le menu plein écran */
.menu-bg {
  background-image: url("/images/nordique-bain.webp");
  background-size: cover;
  background-position: center;
  position: absolute;
}

/* Overlay pour améliorer la lisibilité du texte */
.menu-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
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
