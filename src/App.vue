<script setup>
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './data/projects'
import { profile } from './data/profile'
</script>

<template>
  <header class="hero">
    <h1>{{ profile.name }}</h1>
    <p class="role">{{ profile.role }}</p>
    <p>{{ profile.tagline }}</p>
    <nav>
      <a href="#proyectos">Proyectos</a>
      <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      <a v-if="profile.email" :href="`mailto:${profile.email}`">Contacto</a>
    </nav>
  </header>

  <main>
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
      </div>
    </section>
  </main>

  <footer>© {{ new Date().getFullYear() }} {{ profile.name }}</footer>
</template>