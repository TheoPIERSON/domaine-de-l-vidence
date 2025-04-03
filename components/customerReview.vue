<template>
  <section class="bg-amber-50 font-cormorant p-8 grid place-items-center">
    <h2 ref="galeryTitle" class="text-3xl md:text-7xl text-gray-900 text-center md:w-2/3 tracking-wide p-2">
      Nos clients témoignent
    </h2>
    <div>
      <h3 class="text-xl font-bold mb-4">Avis Google</h3>

      <div v-if="reviews.length">
        <div v-for="review in reviews" :key="review.author_name" class="p-4 border-b">
          <p class="font-semibold">{{ review.author_name }}</p>
          <p class="flex">
            <svg
              v-for="n in Math.round(review.rating)"
              :key="n"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M12 17.27l5.18 3.73-1.64-6.27L21 9.5l-6.41-.52L12 3 9.41 9 3 9.5l4.46 4.23-1.64 6.27L12 17.27z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
          <p class="italic">"{{ review.text }}"</p>
        </div>
      </div>
      <p v-else>Aucun avis disponible.</p>
      <p>
        <a
          :href="'https://www.google.com/search?sca_esv=b830e5eece9fbec0&sxsrf=AHTn8zrxipKdK3OIe_o7JAN2X-kJoTDH_Q:1743682847542&uds=ABqPDvztZD_Nu18FR6tNPw2cK_RRkK3S-rvtELW9cBva8HWnzgo3mSQMPRSmqgD8GypfbkL2G4vF-xgyTgZgS0WsuND-lyfxcVsGXRS18xgqixK2xEaJmkCssorvbrwSuC3EuG0etl91fjyLlwah4eFM7u7TAcDmvw&q=Le+Domaine+de+L%27Evidence+Avis&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzV48q431xL-Kj14wOEX-UbcO5jZCl9K7_0B1SqezZQIFb05H4a2-OwTMPwziN5Kdf4bKmy7lPwVHuK84nEtxMG43wrS73QpVBhTozTfw-9won5XEZg%3D%3D&hl=fr-FR&sa=X&ved=2ahUKEwizgOrl7LuMAxUeT6QEHa7mMzgQ_4MLegQIMxAN&biw=1240&bih=880&dpr=2'"
          target="_blank"
          class="text-blue-950 underline mt-4 block"
        >
          Voir plus d'avis sur Google
        </a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
}
const placeId = "ChIJAQBcfcYg3UcRDYZtCUk4ysE";

const reviews = ref<GoogleReview[]>([]);

onMounted(async () => {
  const response = await fetch("/api/getReviews");
  const data: GoogleReview[] = await response.json();
  reviews.value = data;
});
</script>
