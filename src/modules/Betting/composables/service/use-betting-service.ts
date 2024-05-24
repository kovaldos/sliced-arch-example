import { useBettingRepository } from '../repository/use-betting-repository.ts'
import { useBettingStore } from '../../store'
import { computed, ref, unref } from 'vue'
import { useBettingUtils } from '../../utils/use-betting-utils.ts'
import { IBettingService } from '../../types/interfaces.ts'


export const useBettingService = (): IBettingService => {
  // repository, store можно использовать только в сервисах
  const bettingStore = useBettingStore()
  const { getBets } = useBettingRepository()
  // методы обработки параметров, данных и т.д
  const { modify } = useBettingUtils()

  // внутренние реактивные переменные для хранения данных
  // в неизменном виде
  const _bets = ref()

  // переменные отдаваемые наружу только для чтения
  const readOnlyGlobal = computed(() => bettingStore.name)
  const readOnlyBets = computed(() => unref(_bets))

  const loadBets = async (params = {}) => {
    try {
      const modifiedParams = modify(params)

      _bets.value = await getBets(modifiedParams)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  return {
    readOnlyBets,
    readOnlyGlobal,
    loadBets,
  }
}
