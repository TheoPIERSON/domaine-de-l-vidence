<template>
  <section class="font-cormorant">
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
        <ul class="list-disc list-inside">
          <li v-for="(equipment, index) in roomEquipments" :key="index">
            {{ equipment }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="grid grid-cols-3 gap-6 p-24">
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
    <img src="/images/Grece antique.jpg" class="w-full h-full object-cover" />
  </section>
</template>

<!-- Le reste du code reste identique -->

<script setup lang="ts">
// Définition d'un type pour une chambre
interface Room {
  title: string;
  description: string;
  image: string;
  equipments: string[];
}

// Typage de l'objet roomsData
const roomsData: Record<string, Room> = {
  "gite-piscine": {
    title: "Gîte avec piscine",
    description: "Gîte spacieux avec piscine pour des vacances de détente.",
    image: "/images/domaine.jpg",
    equipments: ["Piscine privée", "Terrasse", "Cuisine équipée", "Climatisation"],
  },
  "spa-privatif": {
    title: "Spa Privatif",
    description: "Un espace de relaxation ultime avec un spa privatif.",
    image: "/images/domaine.jpg",
    equipments: ["Spa privatif", "Jacuzzi", "Serviettes de bain", "Vue panoramique"],
  },
  "bain-nordique": {
    title: "Bain Nordique",
    description: "Expérience de détente ultime avec un bain nordique en extérieur.",
    image: "/images/domaine.jpg",
    equipments: ["Bain nordique", "Chauffage", "Vue sur la nature", "Espace détente"],
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
  }
);

// Variables réactives
const roomTitle = computed(() => roomData.value.title);
const roomDescription = computed(() => roomData.value.description);
const roomImage = computed(() => roomData.value.image);
const roomEquipments = computed(() => roomData.value.equipments);
</script>
