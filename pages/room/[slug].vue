<template>
  <section class="font-cormorant bg-amber-50">
    <div class="relative h-auto w-screen overflow-hidden">
      <img :src="roomImage" :alt="roomTitle" class="w-screen h-[70vh] object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-8xl font-semibold text-center drop-shadow-md">
          {{ roomTitle }}
        </h2>
      </div>
    </div>

    <div class="grid place-items-center w-full">
      <h3 class="text-center text-5xl p-20 w-2/3">{{ roomDescription }}</h3>

      <div class="mt-6">
        <p v-for="(equipment, index) in roomEquipments" :key="index">
          {{ equipment }}
        </p>
      </div>
      <a :href="roomLink" target="_blank" class="p-3 px-8 mt-10 bg-orange-800 hover:bg-orange-900 text-white text-2xl"
        >Réserver</a
      >
    </div>
  </section>
  <section class="grid grid-cols-3 gap-6 p-24 bg-amber-50">
    <img v-for="(image, index) in roomGalleryImages" :key="index" :src="image" class="w-full h-full object-cover" />
  </section>
  <section class="p-10">description du logement</section>
</template>

<script setup lang="ts">
// Définition d'un type pour une chambre
interface Room {
  title: string;
  description: string;
  image: string;
  equipments: string[];
  galleryImages: string[]; // Ajout des images de galerie
  link: string;
}
const roomLink = computed(() => roomData.value.link);

// Typage de l'objet roomsData
const roomsData: Record<string, Room> = {
  "gite-piscine": {
    title: "Gîte avec piscine",
    description: "Gîte spacieux avec piscine pour des vacances de détente.",
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
    description: "Un espace de relaxation ultime avec un spa privatif.",
    image: "/images/domaine.jpg",
    equipments: [
      "Relaxez vous dans un appartement isolé équipé d’un bain nordique parfait pour se détendre sous les étoiles.",
    ],
    galleryImages: ["/images/domaine.jpg", "/images/spa-chambre.webp", "/images/spa-jaccuzi.webp"],
    link: "https://www.ledomainedelevidence.com/fr/chambre/chambre-privative?info%5Barrival_date%5D=27/03/2025&info%5Bdeparture_date%5D=29/03/2025&info%5Brooms%5D=true&info%5Btotal_adult%5D=2",
  },
  "bain-nordique": {
    title: "Bain Nordique",
    description: "Expérience de détente ultime avec un bain nordique en extérieur.",
    image: "/images/domaine.jpg",
    equipments: [
      "Relaxez vous dans un appartement isolé équipé d’un bain nordique parfait pour se détendre sous les étoiles.",
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
    description: "Désolé, cette chambre n'existe pas.",
    image: "",
    equipments: [],
    galleryImages: ["/images/Grece antique.jpg"],
  }
);

// Variables réactives
const roomTitle = computed(() => roomData.value.title);
const roomDescription = computed(() => roomData.value.description);
const roomImage = computed(() => roomData.value.image);
const roomEquipments = computed(() => roomData.value.equipments);
const roomGalleryImages = computed(() => roomData.value.galleryImages);
</script>
