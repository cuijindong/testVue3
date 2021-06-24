* setup的参数
 - setup(props, context) / setup(props, {attrs, slots, emit})。
 - props：包含了props声明且传入的所有属性对象，setup中的props是响应式的，当传入新的prop时，它将被更新。但是，因为props是响应式的，所以不能使用es6结构，因为他会消除prop的响应性。
 - attrs：一个非prop的attribute是指：传像一个组件，但是该组件并没有相应的props或emits定义的attribute。常见：class，id。
 - slots：插槽。
 - emit：触发方法。
