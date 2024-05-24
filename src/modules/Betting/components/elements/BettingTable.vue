<script lang="ts" setup>
  import { useBettingTable } from '../../composables/view/use-betting-table.ts'
  import { onMounted } from 'vue'

  const { loadTableBets } = useBettingTable()

  onMounted(() => loadTableBets())
</script>
<template>
</template>
