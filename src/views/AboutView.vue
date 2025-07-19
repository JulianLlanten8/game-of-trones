<template>
  <div class="about">
    <!-- Intro Animation -->
    <div v-if="showIntro" ref="introOverlay" class="intro-overlay">
      <div ref="introContent" class="intro-content">
        <h1 ref="introTitle" class="intro-title">Winter is Coming</h1>
        <p ref="introSubtitle" class="intro-subtitle">Enter the World of Westeros</p>
      </div>
    </div>

    <!-- Snow Animation Container -->
    <div ref="snowContainer" class="snow-container" />

    <div class="hero-section">
      <h1 class="project-title">Game of Thrones Character Explorer</h1>
      <h3 class="project-title">Autor:</h3>
      <h2 class="developer-name">Hugo Julian Llanten Idrobo</h2>
    </div>

    <div class="project-description">
      <section class="purpose">
        <h3>🎯 Propósito del Proyecto</h3>
        <p>
          Este proyecto es una aplicación web interactiva que permite explorar y conocer a los
          personajes del universo de Game of Thrones de una manera visual y dinámica. Utilizando
          tecnologías web modernas, la aplicación ofrece una experiencia inmersiva para los
          fanáticos de la serie.
        </p>
      </section>

      <section class="features">
        <h3>✨ Características Principales</h3>
        <ul>
          <li>
            <strong>Exploración de Personajes:</strong> Visualiza información detallada de los
            personajes principales de Game of Thrones
          </li>
          <li>
            <strong>Organización por Casas:</strong> Los personajes están agrupados por sus
            respectivas casas nobles (Stark, Lannister, Targaryen, etc.)
          </li>
          <li>
            <strong>Interfaz Inmersiva:</strong> Diseño temático que evoca el mundo de Westeros con
            animaciones fluidas
          </li>
          <li>
            <strong>Responsive Design:</strong> Adaptable a diferentes dispositivos y tamaños de
            pantalla
          </li>
          <li>
            <strong>Carga Dinámica:</strong> Obtiene datos en tiempo real desde una API externa
          </li>
        </ul>
      </section>

      <section class="technologies">
        <h3>🛠️ Tecnologías Utilizadas</h3>
        <div class="tech-grid">
          <div class="tech-item">
            <strong>Vue.js 3</strong>
            <span>Framework JavaScript moderno con Composition API</span>
          </div>
          <div class="tech-item">
            <strong>Vite</strong>
            <span>Herramienta de construcción rápida y moderna</span>
          </div>
          <div class="tech-item">
            <strong>GSAP</strong>
            <span>Librería de animaciones profesionales</span>
          </div>
          <div class="tech-item">
            <strong>Vue Router</strong>
            <span>Enrutamiento para aplicaciones de una sola página</span>
          </div>
          <div class="tech-item">
            <strong>Pinia</strong>
            <span>Gestión de estado moderna para Vue</span>
          </div>
          <div class="tech-item">
            <strong>Bun</strong>
            <span>Runtime y gestor de paquetes de alto rendimiento</span>
          </div>
        </div>
      </section>

      <section class="api-info">
        <h3>🔗 Fuente de Datos</h3>
        <p>
          La aplicación consume datos de la <strong>Thrones API</strong> (thronesapi.com), que
          proporciona información completa sobre personajes, incluyendo imágenes, nombres,
          afiliaciones familiares y otros detalles relevantes del universo de Game of Thrones.
        </p>
      </section>

      <section class="objectives">
        <h3>🎓 Objetivos de Aprendizaje</h3>
        <p>
          Este proyecto sirve como demostración de competencias en desarrollo frontend moderno,
          incluyendo el manejo de APIs REST, gestión de estado, animaciones web, y mejores prácticas
          en Vue.js. Es parte del portafolio de desarrollo de Hugo Julian Llanten Idrobo.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Referencias para las animaciones
const showIntro = ref(true)
const introOverlay = ref(null)
const introContent = ref(null)
const introTitle = ref(null)
const introSubtitle = ref(null)
const snowContainer = ref(null)

// Función para crear copos de nieve
const createSnowflakes = () => {
  const snowflakesCount = 60
  const snowflakes = []

  for (let i = 0; i < snowflakesCount; i++) {
    const snowflake = document.createElement('div')
    snowflake.className = 'snowflake'
    snowflake.innerHTML = Math.random() > 0.5 ? '❄' : '❅'

    // Posición y tamaño aleatorios
    const size = Math.random() * 0.6 + 0.4
    const startX = Math.random() * window.innerWidth
    const duration = Math.random() * 4 + 6 // Caída más lenta para naturalidad
    const delay = Math.random() * 5

    // Posición inicial desde arriba
    snowflake.style.position = 'absolute'
    snowflake.style.left = startX + 'px'
    snowflake.style.top = '-100px' // Empezar desde arriba
    snowflake.style.fontSize = size + 'rem'
    snowflake.style.opacity = Math.random() * 0.7 + 0.2

    snowContainer.value.appendChild(snowflake)
    snowflakes.push(snowflake)

    // Animación de caída natural desde arriba hacia abajo
    gsap.fromTo(
      snowflake,
      {
        y: -100,
        x: 0,
        rotation: 0
      },
      {
        y: window.innerHeight + 100,
        rotation: Math.random() * 180, // Rotación más sutil
        duration: duration,
        delay: delay,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          // Reposicionar horizontalmente para variedad
          const newX = Math.random() * window.innerWidth
          snowflake.style.left = newX + 'px'
          gsap.set(snowflake, { y: -100, x: 0 })
        }
      }
    )

    // Movimiento horizontal muy sutil como si fuera por el viento
    gsap.to(snowflake, {
      x: `+=${Math.random() * 30 - 15}`, // Movimiento horizontal mínimo
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: delay
    })
  }
}

// Animación de introducción
const playIntroAnimation = () => {
  const tl = gsap.timeline()

  // Fade in del overlay
  tl.from(introOverlay.value, {
    opacity: 0,
    duration: 0.5
  })

  // Animación del título principal
  tl.from(
    introTitle.value,
    {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1.5,
      ease: 'power2.out'
    },
    0.5
  )

  // Efecto de texto brillante
  tl.to(
    introTitle.value,
    {
      textShadow:
        '0 0 20px rgba(173, 216, 230, 0.8), 0 0 40px rgba(173, 216, 230, 0.6), 0 0 60px rgba(173, 216, 230, 0.4)',
      duration: 1,
      ease: 'power2.inOut'
    },
    1
  )

  // Animación del subtítulo
  tl.from(
    introSubtitle.value,
    {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    },
    1.5
  )

  // Pausa dramática
  tl.to({}, { duration: 2 })

  // Fade out de la introducción
  tl.to(introOverlay.value, {
    opacity: 0,
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
      showIntro.value = false
    }
  })

  return tl
}

onMounted(async () => {
  // Crear los copos de nieve
  createSnowflakes()

  // Reproducir la animación de introducción
  await playIntroAnimation()
})
</script>

<style scoped>
/* Intro Animation Styles */
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(20, 30, 50, 0.95) 50%,
    rgba(0, 0, 0, 0.95) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.intro-content {
  text-align: center;
  padding: 2rem;
}

.intro-title {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  color: #add8e6;
  margin-bottom: 1rem;
  text-shadow:
    0 0 10px rgba(173, 216, 230, 0.5),
    0 0 20px rgba(173, 216, 230, 0.3),
    0 0 30px rgba(173, 216, 230, 0.2);
  font-family: 'Georgia', serif;
  letter-spacing: 0.1em;
  line-height: 1.1;
}

.intro-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: rgba(173, 216, 230, 0.8);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0;
}

/* Snow Animation Styles */
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  user-select: none;
  font-size: 1rem;
  z-index: 1;
}

/* Main Content Styles */
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  position: relative;
  z-index: 2;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(192, 192, 192, 0.05));
  border-radius: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  backdrop-filter: blur(15px);
  position: relative;
  z-index: 3;
}

.developer-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--got-gold, #d4af37);
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.project-title {
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--got-silver, #c0c0c0);
  margin: 0;
  opacity: 0.9;
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

section {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(212, 175, 55, 0.15);
  position: relative;
  z-index: 3;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--got-gold, #d4af37);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

p {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

li:last-child {
  border-bottom: none;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tech-item {
  background: rgba(212, 175, 55, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-item strong {
  color: var(--got-gold, #d4af37);
  font-size: 1.1rem;
}

.tech-item span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .developer-name {
    font-size: 2rem;
  }

  .project-title {
    font-size: 1.4rem;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  section {
    padding: 1.5rem;
  }
}

/* Tema claro */
@media (prefers-color-scheme: light) {
  p,
  li {
    color: rgba(0, 0, 0, 0.8);
  }

  .tech-item span {
    color: rgba(0, 0, 0, 0.6);
  }

  section {
    background: rgba(212, 175, 55, 0.05);
    border: 1px solid rgba(212, 175, 55, 0.2);
  }
}
</style>
