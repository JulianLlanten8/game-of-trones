<template>
  <figure class="item">
    <img :src="character.imageUrl" :alt="character.fullName" aspect-ratio="1/1" />
    <figcaption>

      <h3>{{ character.fullName }}</h3>
      <!-- <p>
        <strong>Family:</strong> {{ character.family }}
      </p> -->
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
  transform: translateY(-4px);
  box-shadow: light-dark(0 8px 25px rgba(212, 175, 55, 0.3),
      0 8px 25px rgba(192, 192, 192, 0.2));
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: light-dark(var(--got-gold), var(--got-silver));
  text-shadow: light-dark(10px 1px 2px rgba(74, 74, 74, 0.7),
      1px 1px 2px rgba(0, 0, 0, 0.8));
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  border-radius: 0.5rem;
  border: light-dark(2px solid rgba(212, 175, 55, 0.4),
      2px solid rgba(192, 192, 192, 0.3));
}

figcaption {
  padding: 1rem;
  background: light-dark(linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(192, 192, 192, 0.15)),
      linear-gradient(135deg, rgba(28, 28, 28, 0.95), rgba(74, 74, 74, 0.85)));
  backdrop-filter: blur(10px);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  color: light-dark(var(--got-iron), var(--got-silver));
  border-top: light-dark(2px solid rgba(212, 175, 55, 0.6),
      2px solid rgba(192, 192, 192, 0.4));
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

strong {
  font-weight: 700;
  color: light-dark(var(--got-gold-dark), var(--got-silver));
}

/* center image in figure */
figure {
  max-height: 260px;
}
</style>
