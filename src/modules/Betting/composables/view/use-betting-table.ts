import { ref, computed, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useBettingService } from '../service/use-betting-service.ts'
import { useBettingModals } from './use-betting-modals.ts'

export const useBettingTable = () => {
  const { loadBets, readOnlyBets } = useBettingService()
  const { showBetsLoadingFailedErrorModal } = useBettingModals()

  // const router = useRouter()
  const isLoading = ref(false)

  const requestTableId = computed(() => useRouter().currentRoute.value.params.id)
  const betIdsForTable = computed(() => unref(readOnlyBets).map((bet: any) => bet.id))

  const loadTableBets = async () => {
    isLoading.value = true

    try {
      await loadBets({ id: unref(requestTableId) })
    } catch (err) {
      showBetsLoadingFailedErrorModal(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    betIdsForTable,
    loadTableBets
  }
}
