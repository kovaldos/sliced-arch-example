import { IBettingRepository } from '../../types/interfaces.ts'

export const useBettingRepository = (): IBettingRepository => {
  const baseUrl = 'http://localhost:8080';

  const getBets = async (params: any) => {
    const response = await fetch(`${baseUrl}/custom-oath`, params)

    return {
      data: response.body
    }
  }

  return {
    getBets
  }
}
