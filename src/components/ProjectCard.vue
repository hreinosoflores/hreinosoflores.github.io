<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="card">
    <header>
      <img v-if="project.image" :src="project.image" :alt="`Captura de ${project.title}`" class="shot" />
      <h3>{{ project.title }}</h3>
      <div class="links">
        <a :href="project.repo" target="_blank" rel="noopener">Código</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">Demo</a>
      </div>
    </header>

    <dl>
      <dt>Problema</dt>
      <dd>{{ project.problem }}</dd>

      <dt>Solución</dt>
      <dd>{{ project.solution }}</dd>

      <dt>Stack</dt>
      <dd class="chips">
        <span v-for="s in project.stack" :key="s" class="chip">{{ s }}</span>
      </dd>

      <dt>Resultado</dt>
      <dd>{{ project.result }}</dd>
    </dl>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  background: var(--card);
}

header {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

h3 {
  margin: 0;
  font-size: 1.35rem;
  text-align: center;
}

.links {
  display: flex;
  gap: .75rem;
}

.links a {
  font-size: .9rem;
}

dl {
  margin: 1rem 0 0;
}

dt {
  margin-top: 1rem;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--accent);
  font-weight: 700;
}

dd {
  margin: .25rem 0 0;
  line-height: 1.55;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
}

.chip {
  font-size: .8rem;
  padding: .2rem .6rem;
  border-radius: 999px;
  background: var(--chip);
}

.shot {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
  border: 1px solid var(--border);
  margin-bottom: 1rem;
}
</style>