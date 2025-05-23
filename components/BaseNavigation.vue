<template>
  <div class="font-cormorant">
    <!-- Navbar principale transparente -->
    <nav
      ref="navBar"
      class="flex justify-between items-center p-6 px-10 md:px-32 fixed w-screen md:w-full z-50 border-b border-gray-300 transition-transform duration-300 ease-in-out bg-white bg-opacity-20"
      :class="{
        'translate-y-0': !isScrollingDown || menuOpen || isAtTop,
        '-translate-y-full': isScrollingDown && !menuOpen && !isAtTop,
      }"
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

    <!-- Menu plein écran -->
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
          <li><NuxtLink to="/commodities" class="hover:underline" @click="closeMenu">Les prestations</NuxtLink></li>
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
          >Réserver*</a
        >
        <p class="mt-4 text-sm text-gray-400">*En cliquant vous serez rediriger vers le site de reservation</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Déclaration des variables réactives
const menuOpen = ref(false);
const isScrollingDown = ref(false);
const lastScrollTop = ref(0);
const scrollThreshold = 10;
const navBar = ref<HTMLElement | null>(null);
const isAtTop = ref(true);

// Fonction pour ouvrir/fermer le menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

// Fonction pour fermer le menu
const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

// Gestion du scroll pour l'affichage/masquage de la navbar
const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  // Vérifier si on est en haut de la page
  isAtTop.value = currentScrollTop < 50;

  // Déterminer la direction du défilement seulement si le seuil est dépassé
  if (Math.abs(currentScrollTop - lastScrollTop.value) > scrollThreshold) {
    isScrollingDown.value = currentScrollTop > lastScrollTop.value;
    lastScrollTop.value = currentScrollTop;
  }
};

onMounted(() => {
  // Importer GSAP uniquement côté client
  if (typeof window !== "undefined") {
    import("gsap")
      .then((gsapModule) => {
        const gsap = gsapModule.default || gsapModule.gsap;

        import("gsap/ScrollTrigger")
          .then((ScrollTriggerModule) => {
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            // Vous pouvez initialiser des animations GSAP ici si nécessaire
          })
          .catch((err) => {
            console.error("Erreur lors du chargement de ScrollTrigger:", err);
          });
      })
      .catch((err) => {
        console.error("Erreur lors du chargement de GSAP:", err);
      });
  }

  // Ajouter l'écouteur d'événement de défilement
  window.addEventListener("scroll", handleScroll);

  // Vérifier la position initiale du défilement
  isAtTop.value = (window.scrollY || document.documentElement.scrollTop) < 50;
});

onUnmounted(() => {
  // Nettoyer l'écouteur d'événement lors du démontage du composant
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.menu-container {
  opacity: 0;
  visibility: hidden;
}
.menu-bg {
  background-image: url("/images/nordique-bain.webp");
  background-size: cover;
  background-position: center;
  position: absolute;
}
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
.opacity-100 {
  opacity: 1;
  visibility: visible;
}
.opacity-0 {
  opacity: 0;
  visibility: hidden;
}
</style>
