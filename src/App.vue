<script setup>
import { ref, watch } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './data/projects'
import { profile } from './data/profile'

// Lee el tema que dejó el script de index.html
const isDark = ref(document.documentElement.dataset.theme === 'dark')

watch(isDark, (dark) => {
  const theme = dark ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* almacenamiento no disponible: se ignora */
  }
})

</script>

<template>
  <header class="hero">
    <h1>{{ profile.name }}</h1>

    <p class="role">{{ profile.role }}</p>

    <div class="switch-theme">
      <h5>Cambiar tema</h5>
      <button type="button" class="switch" role="switch" :aria-checked="isDark"
        :aria-label="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'" @click="isDark = !isDark">
        <!-- Sol -->
        <svg class="icono" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        </svg>
        <!-- Luna -->
        <svg class="icono" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="perilla" :class="{ activa: isDark }"></span>
      </button>
    </div>

    <p>{{ profile.tagline }}</p>

    <nav>
      <a href="#proyectos">Proyectos</a>
      <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      <a v-if="profile.email" :href="`mailto:${profile.email}`">Contacto</a>
    </nav>
  </header>

  <main>

    <section id="tecnologías">
      <h2>Tecnologías con experiencia</h2>
      <div class="chips">
        <span v-for="t in profile.technologies" :key="t" class="chip">{{ t }}</span>
      </div>
    </section>

    <section id="proyectos">
      <h2>Proyectos Independientes</h2>
      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
      </div>
    </section>
  </main>

  <footer>© {{ new Date().getFullYear() }} {{ profile.name }}</footer>
</template>