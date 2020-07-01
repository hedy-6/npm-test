import Vue from "vue";
import Test from './Test.vue';
import Info from './Info.vue'

const components = [
  Test,
  Info
]

components.map(component => {
  Vue.component(component.name, component)
})

export default components

// Vue.component(Test.name, Test)

// export default Test;