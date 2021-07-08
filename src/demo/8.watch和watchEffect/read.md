## watch
  * setup中可以有多个watch
  * watch可以监听一个响应式对象，可以是ref，也可以是一个reactive。也可通过具有返回值的 getter 函数监听reactive对象中的某个属性。
  * watch可以多源监听。
## watchEffect
  * 为了根据响应式状态自动应用和重新应用副作用，我们可以使用 watchEffect 方法。它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
  * 可以手动停止监听。

