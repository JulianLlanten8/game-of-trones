<template>
  <h1 ref="titleEl" class="fire-text">{{ text }}</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const titleEl = ref(null)
const text = 'Game of Thrones'

onMounted(() => {
  // Good , according to the documentation implementing the TextPlugin correctly.
  gsap.fromTo(
    titleEl.value,
    {
      opacity: 0,
      scale: 0.9,
      textShadow: '0 0 0px rgba(255, 150, 50, 0)'
    },
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: 'power2.out',
      textShadow: '0 0 10px var(255, 200, 100, 0.5), 0 0 20px rgba(255, 150, 50, 0.4), 0 0 30px rgba(255, 100, 0, 0.3)'
    }
  )


})
</script>

<style scoped>
.fire-text {
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;

  /* Fondo fuego animado */
  background: linear-gradient(-45deg,
      #f3ec78,
      #af4261,
      #dca444,
      #f3ec78,
      #af4261);
  background-size: 400% 400%;
  animation: fireGlow 6s ease-in-out infinite;

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  /* Brillo base */
  text-shadow: 0 0 5px rgba(255, 100, 0, 0.2);
  transition: text-shadow 0.3s ease;
}

@keyframes fireGlow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
