<template>
  <section class="font-cormorant bg-amber-50">
    <div class="relative h-auto w-screen overflow-hidden">
      <img :src="roomImage" :alt="roomTitle" class="w-screen h-[40vh] md:h-[70vh] object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl md:text-8xl font-semibold text-center drop-shadow-md">
          {{ roomTitle }}
        </h2>
      </div>
    </div>

    <div class="grid place-items-center w-full">
      <h3 class="text-center text-2xl md:text-5xl p-10 md:p-20 md:w-2/3">{{ roomSubtitle }}</h3>

      <div class="mx-8 md:mt-6">
        <p v-for="(equipment, index) in roomEquipments" :key="index">
          {{ equipment }}
        </p>
      </div>
      <a
        :href="roomLink"
        target="_blank"
        class="p-3 px-8 mt-6 md:mt-10 bg-orange-800 hover:bg-orange-900 text-white text-2xl"
        >Réserver</a
      >
    </div>
  </section>

  <!-- Section galerie avec photos cliquables -->
  <section class="grid grid-cols-3 gap-6 p-8 md:p-24 bg-amber-50">
    <div v-for="(image, index) in roomGalleryImages" :key="index" class="cursor-pointer overflow-hidden">
      <img
        :src="image"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        @click="openLightbox(index)"
      />
    </div>
  </section>

  <!-- Lightbox modal -->
  <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
    <div class="relative w-full h-full flex flex-col justify-center items-center">
      <!-- Navigation buttons -->
      <button @click="prevImage" class="absolute left-4 text-white text-4xl hover:text-gray-300 z-10">&lt;</button>

      <button @click="nextImage" class="absolute right-4 text-white text-4xl hover:text-gray-300 z-10">&gt;</button>

      <!-- Close button -->
      <button @click="closeLightbox" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">
        &times;
      </button>

      <!-- Image container -->
      <div class="max-w-4xl max-h-[80vh] flex items-center justify-center">
        <img :src="roomGalleryImages[currentImageIndex]" class="max-h-full max-w-full object-contain" />
      </div>

      <!-- Image counter -->
      <div class="text-white mt-4">{{ currentImageIndex + 1 }} / {{ roomGalleryImages.length }}</div>
    </div>
  </div>

  <section class="p-10 font-montserrat w-screen">
    <h3 class="text-2xl md:text-3xl text-gray-900 md:w-3/4 tracking-wide p-2">
      Situé à 30 minutes de la métropole lilloise, le Domaine de l'Evidence vous propose un lieu de détente et de
      relaxation adapté à vos besoins
    </h3>
    <p class="md:p-2 my-8 md:w-3/4">{{ roomDescription }}</p>
    <a
      :href="roomLink"
      target="_blank"
      class="p-3 px-8 m-6 md:mt-10 bg-orange-800 hover:bg-orange-900 text-white text-xl"
      >Réserver*</a
    >
    <p class="mt-4 text-sm">*En cliquant vous serez rediriger vers le site de reservation</p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// Définition d'un type pour une chambre
interface Room {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  equipments: string[];
  galleryImages: string[]; // Ajout des images de galerie
  link: string;
}

// Variables pour le lightbox
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Fonctions pour le lightbox
const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  // Empêcher le défilement du body quand le lightbox est ouvert
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  // Réactiver le défilement du body
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (currentImageIndex.value < roomGalleryImages.value.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0; // Revenir au début
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = roomGalleryImages.value.length - 1; // Aller à la dernière image
  }
};

// Fermer le lightbox si on appuie sur Escape
if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxOpen.value) {
      closeLightbox();
    }
    if (e.key === "ArrowLeft" && lightboxOpen.value) {
      prevImage();
    }
    if (e.key === "ArrowRight" && lightboxOpen.value) {
      nextImage();
    }
  });
}

const roomLink = computed(() => roomData.value.link);

// Typage de l'objet roomsData
const roomsData: Record<string, Room> = {
  "gite-piscine": {
    title: "Gîte avec piscine",
    subtitle: "Gîte spacieux avec piscine pour des vacances de détente.",
    description:
      "Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. Profitez d'un séjour relaxant dans notre gîte avec piscine. ",
    image: "/images/domaine.jpg",
    equipments: ["Relaxez vous dans un appartement équipé parfait pour se détendre et profiter de la piscine."],
    galleryImages: [
      "/images/domaine.jpg",
      "/images/gite-chambre.webp",
      "/images/gite-cuisine.webp",
      "/images/gite-serviette.jpeg",
    ],
    link: "https://www.ledomainedelevidence.com/fr/chambre/appartement-5dc676bb-a9eb-4752-a03f-70a9e693ac01?info%5Barrival_date%5D=27/03/2025&info%5Bdeparture_date%5D=29/03/2025&info%5Brooms%5D=true&info%5Btotal_adult%5D=2",
  },
  "spa-privatif": {
    title: "Spa Privatif",
    subtitle: "Un espace de relaxation ultime avec spa privatif.",
    description:
      "Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste.",
    image: "/images/domaine.jpg",
    equipments: [
      "Relaxez vous dans un appartement isolé équipé d'un bain nordique parfait pour se détendre sous les étoiles.",
    ],
    galleryImages: ["/images/domaine.jpg", "/images/spa-chambre.webp", "/images/spa-jaccuzi.webp"],
    link: "https://www.ledomainedelevidence.com/fr/chambre/chambre-privative?info%5Barrival_date%5D=27/03/2025&info%5Bdeparture_date%5D=29/03/2025&info%5Brooms%5D=true&info%5Btotal_adult%5D=2",
  },
  "bain-nordique": {
    title: "Bain Nordique",
    subtitle: "Expérience de détente ultime avec un bain nordique en extérieur.",
    description:
      "Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. Profitez d'un moment de détente dans une ambiance intimiste. ",
    image: "/images/domaine.jpg",
    equipments: [
      "Relaxez vous dans un appartement isolé équipé d'un bain nordique parfait pour se détendre sous les étoiles.",
    ],
    galleryImages: [
      "/images/domaine.jpg",
      "/images/nordique-bain.webp",
      "/images/nordique-sdb.jpeg",
      "/images/gite-serviette.jpeg",
    ],
    link: "https://www.ledomainedelevidence.com/fr/chambre/formule-2h-de-jacuzzi-privatif-du-lundi-au-vendredi?info%5Barrival_date%5D=27/03/2025&info%5Bdeparture_date%5D=29/03/2025&info%5Brooms%5D=true&info%5Btotal_adult%5D=2",
  },
};

// Récupérer les données de la chambre
const route = useRoute();
const { slug } = route.params;

// Utilisation d'une valeur par défaut typée
const roomData = ref<Room>(
  roomsData[slug as string] || {
    title: "Chambre non trouvée",
    subtitle: "Désolé, cette chambre n'existe pas.",
    description: "Aucune description disponible.",
    image: "",
    equipments: [],
    galleryImages: ["/images/Grece antique.jpg"],
  }
);

// Variables réactives
const roomTitle = computed(() => roomData.value.title);
const roomSubtitle = computed(() => roomData.value.subtitle);
const roomDescription = computed(() => roomData.value.description);
const roomImage = computed(() => roomData.value.image);
const roomEquipments = computed(() => roomData.value.equipments);
const roomGalleryImages = computed(() => roomData.value.galleryImages);
</script>

<style scoped>
/* Animation de transition pour le lightbox */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
