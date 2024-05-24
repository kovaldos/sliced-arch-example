// import {
//   ComputedRef,
//   // ReactiveEffect,
//   // UnwrapNestedRefs,
//   // reactive,
//   // computed,
//   defineProps,
//   getCurrentScope,
//   getCurrentInstance
// } from 'vue'
//
// type PropsTree<T> = {
//   readonly [K in keyof T]: T[K];
// };
//
// type PropsMap<T> = {
//   [K in keyof PropsTree<T>]: ComputedRef<PropsTree<T>[K]>;
// }
//
// // type DestructibleTree<T> = UnwrapNestedRefs<PropsMap<T>>
//
// // export const destructure = <T>(props: PropsTree<T>) => reactive(Object.keys(props).reduce((acc, key): PropsMap<T> => {
// //     acc[key as keyof T] = computed(() => props[key as keyof T]);
// //
// //     return acc;
// // }, {} as PropsMap<T>)) as DestructibleTree<T>;
//
//
// export const destructure = <T>(props: PropsTree<T>) => {
//   const map = {} as PropsMap<T>
//   const instance = getCurrentInstance()!
//
//   defineProps.call(instance, props)
//
//   Object.keys(props).forEach((k) => {
//     instance.props[k] = props[k as keyof PropsTree<T>];
//   })
//
//   console.log(getCurrentScope(), map, instance)
//
//   return instance.props
// }
//
