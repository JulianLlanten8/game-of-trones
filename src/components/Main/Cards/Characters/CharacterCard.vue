<template>
  <figure class="item">
    <img :src="character.imageUrl" :alt="character.fullName" aspect-ratio="16 / 9" />
    <figcaption>

      <h3>{{ character.fullName }}</h3>
      <p>
        <strong>Family:</strong> {{ character.family }}
      </p>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps({
  character: Object,
});
</script>


<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  border-radius: 0.5rem;
}

figcaption {
  padding: 1rem;
  background-color: var(--color-bg-secondary);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 0.5rem 0.5rem;
}

/* center image in figure */
figure {
  max-height: 260px;
}
</style>
