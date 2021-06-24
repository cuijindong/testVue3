* Vue3的composition Api中2个最重要的响应式Api（ref, reactive）。
* ref用来处理基本数据类型，reactive用来处理对象（深度响应式）。
* 如果中ref处理数组/对象，内部会自动将对象转换成reactive的代理对象(ref.value是Proxy类型的)。
* ref内部：通过给value属性添加getter/setter来实现对数据的劫持。
* reactive内部：通过Proxy来实现对对象内部数据的劫持，并通过Reflect操作对象内部数据。
* ref在模板中会自动被解包。

