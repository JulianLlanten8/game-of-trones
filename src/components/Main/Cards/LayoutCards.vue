<template>
  <section v-if="characters.length">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
  </section>
</template>

<script setup>
import CharacterCard from './Characters/CharacterCard.vue';
import { ref } from 'vue';
import { get } from '@/assets/api/get';

const characters = ref([]);
const error = ref(null);

const URL = ref('https://thronesapi.com/api/v2/Characters');

get(URL.value).then((data) => {
  characters.value = data;
}).catch((e) => {
  error.value = e;
});

</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
</style>