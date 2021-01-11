import Test from './Test.vue';
import Info from './Info.vue';

const components = [Test, Info]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Test, Info
}

export default { install }