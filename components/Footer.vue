<template>
  <footer class="flex justify-center items-center flex-wrap p-10 font-montserrat">
    <div class="w-screen font-cormorant text-4xl"><h2>Le domaine de l'évidence</h2></div>
    <div class="m-4 p-4 border-r">
      <ul>
        <li class="font-bold">Infos de contact</li>
        <li>Adresse: 1211 rue du Grand Chemin</li>
        <li>Numéro de téléphone: 0629996475</li>
        <li>Adresse email: ledomainedelevidence@gmail.com</li>
      </ul>
    </div>
    <div class="m-4 p-4 border-r">
      <ul>
        <li class="font-bold">Lien utiles</li>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/rooms">Logements</NuxtLink></li>
        <li><NuxtLink to="#footer">Contact</NuxtLink></li>
        <li><NuxtLink to="/">Mentions légales</NuxtLink></li>
      </ul>
    </div>
    <div class="m-4 p-4 pr-8 border-r">
      <ul>
        <li class="font-bold">Réseaux sociaux</li>
        <div class="flex w-full mt-4 justify-around items-center">
          <a href="https://www.instagram.com/ledomainedelevidence/?hl=fr"
            ><Icon class="p-3 hover:p-4 duration-200" name="formkit:instagram" style="color: black"
          /></a>
          <a href=""><Icon class="p-3 hover:p-4 duration-200" name="formkit:facebook" style="color: black" /></a>
          <a href=""> <Icon class="p-3 hover:p-4 duration-200" name="formkit:tiktok" style="color: black" /> </a>
        </div>
      </ul>
    </div>
    <div class="m-4 p-4 border-r">
      <ul>
        <li class="font-bold">Site de réservation</li>
        <li class="hover:underline"><a href="https://www.ledomainedelevidence.com/fr">Le domaine de l'évidence</a></li>
      </ul>
    </div>
    <div>
      <ul class="font-bold">
        <li>crédits droit d'auteur</li>
        <li>© 2025 Le Domaine de l'Evidence. Tous droits réservés.</li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
