import {useBettingService} from '../../../modules/Betting/composables/service/use-betting-service.ts'


export const useSharedBettingService = createSharedComposables(() => {
  const bettingService = useBettingService()
})

useBettingService()
useSharedBettingService()
