import { createStore } from 'vuex'

export default createStore({
  state: {//存放在这里的数据，在项目的任何地方都可以访问
    
  },
  //不能在其他页面上直接修改state中的数据，
  //必须通过getters，mutations或者actions来修改
  getters: {//相当于store的计算属性，可以对state中的数据进行修改以后再显示
    
  },
  mutations: {//可以修改state中的数据
    
  },
  actions: {
    
  },
  modules: {
  }
})
