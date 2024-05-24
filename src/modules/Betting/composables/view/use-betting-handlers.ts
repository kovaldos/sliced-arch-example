import { useBettingService } from '../service/use-betting-service.ts'

export const useBettingHandlers = () => {
  const {loadBets} = useBettingService()

  const onClick = () => {
    console.log('click')
    return loadBets()
  }

  return {
    onClick
  }
}
