* setup执行时机
  - 在beforeCreate之前执行，此时组件还没有创建。
  - setup中this默认为undefined，不能通过this访问当前实例。
  - this在其他composition Api中也一样是undefined。
* setup返回值
  - setup返回一个对象：为模板提供数据，也就是说html模板可以访问该对象中的属性或方法。
  - 返回对象中的属性和方法会与data函数返回的对象属性和methods中的方法进行合并，共实例使用。
  - 如果重名，setup优先。
  - 推荐使用setup代替data和methods。
  - setup不能是一个async函数：因为async函数返回值不再是一个对象，而是一个promise。