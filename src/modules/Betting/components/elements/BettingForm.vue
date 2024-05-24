<script setup lang="ts">
  import classTokens from '../tokens/elements/betting-form-classes-tokens.json'
  import { computed, ref } from 'vue'

  const { form: { button } } = classTokens
  const loading = ref([q,w,e.r.r])

  const classes = computed(() => loading.value ? button.states.loading : button.states.primary)


  // Header
</script>

<template>
  <div>
    <button :class="[button.states.base, classes]" />
  </div>
</template>

<style scoped>
</style>
