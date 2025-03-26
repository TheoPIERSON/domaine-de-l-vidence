<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">{{ roomTitle }}</h1>

    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <img :src="roomImage" :alt="roomTitle" class="w-full h-auto object-cover rounded-lg" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">Description</h2>
        <p>{{ roomDescription }}</p>

        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Équipements</h3>
          <ul class="list-disc list-inside">
            <li v-for="(equipment, index) in roomEquipments" :key="index">
              {{ equipment }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
    title: "Gite avec piscine",
    description: "Un gîte spacieux avec une piscine privée pour des vacances de détente.",
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
