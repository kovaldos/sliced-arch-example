import { ReactiveEffect } from 'vue'

let result

export const useReactiveEffect = () => {
  const noop = () => {}

  const effect = new ReactiveEffect(() => {
    result ??= 0
    result += 1
  }, noop,
    () => {}
  )

  return {
    effect
  }
}
