<script setup>
import { watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false }, // abierto / cerrado
  src: { type: String, required: true },
  alt: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

const cerrar = () => emit('update:modelValue', false)

// const onKeydown = (e) => {
//   if (e.key === 'Escape' && props.modelValue) cerrar()
// }

// onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  // window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

// Bloquea el scroll de la página mientras el modal está abierto
watch(
  () => props.modelValue,
  (abierto) => {
    document.body.style.overflow = abierto ? 'hidden' : ''
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="overlay" role="dialog" aria-modal="true" :aria-label="alt" @click.self="cerrar">
        <button class="cerrar" type="button" aria-label="Cerrar" @click="cerrar">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              fill="none" />
          </svg>
        </button>
        <img :src="src" :alt="alt" class="imagen" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.85);
}

.imagen {
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.cerrar {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;
}


.cerrar:hover {
  background: rgba(255, 255, 255, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>