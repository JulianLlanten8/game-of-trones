<template>
  <section v-if="!loading && characters.length">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
  </section>
  <section v-else>
    <p v-if="error" class="error">{{ error.message }}</p>
    <article v-else class="loading">
      <img src="@svgs/svg-spinners--pulse.svg" alt="Loading" />
      <p>Cargando personajes...</p>
    </article>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import CharacterCard from './Characters/CharacterCard.vue';
import {
  error,
  loading,
  fetchCharacters
} from '@/assets/api/gameOfThronesApi.js';

const characters = ref([]);


onMounted(async () => {
  try {
    characters.value = await fetchCharacters();
  } catch (e) {
    console.error('Error loading characters:', e);
  }
});

</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.loading {
  display: grid;
  place-items: center;
  height: 100dvh;
  width: 100dvw;
  text-align: center;
}

.loading img {
  width: 250px;
  height: 250px;
}

.loading p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #666;
}

.error {
  color: #e74c3c;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
  background: #fdf2f2;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  margin: 2rem;
}
</style>