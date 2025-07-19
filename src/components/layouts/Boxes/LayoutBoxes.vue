<template>
  <section v-if="!loading">
    <h2 class="title-family-groups">Family Groups</h2>
    <section class="family-groups">
      <FamilyGroup v-for="(value, houseName) in familyGroups" :key="houseName" :group="houseName" />
    </section>
  </section>
</template>

<script setup>
import { groupedByFamily, loading } from '@api/gameOfThronesApi.js'
import FamilyGroup from '@/components/layouts/Boxes/Box/FamilyBox.vue'

const familyGroups = groupedByFamily
</script>

<style scoped>
.family-groups {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.title-family-groups {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: light-dark(var(--color-title), var(--color-title-dark));
}

.loading,
.error {
  text-align: center;
  margin-top: 2rem;
}

.loading img {
  width: 50px;
  height: 50px;
}

.error {
  color: red;
}
</style>
