import { ComputedRef } from 'vue'

export interface IBettingRepository {
  getBets(args: any): Promise<{data: any}>
}

export interface IBettingService {
  readOnlyBets: ComputedRef<any>,
  readOnlyGlobal: ComputedRef<any>,
  loadBets(params: any): Promise<void>,
}
