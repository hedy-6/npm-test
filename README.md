# NPM 发包流程

## 注册 npm 账号

在 [npm 官网](https://www.npmjs.com/) 注册账号

## 初始化 npm 项目

```
npm init
```

[这里查看配置说明](https://docs.npmjs.com/files/package.json#description)

主要配置以下字段
- name
- version
- main

## git托管

## 发包

```
npm login //登录
npm whoami //查看已经登录的账号
npm publish
```

## 使用 npm 发布一个 vue 组件（一）

- 入口文件

```
import Vue from "vue";
import Test from './Test.vue';

Vue.component(Test.name, Test)

export default Test;
```

- 使用

```
<template>
  <div id="app">
    <Test msg="123" />
  </div>
</template>
<script>
import  Test  from "hedytest";
export default {
  components: {
    Test
  }
};
</script>
```

## 使用 npm 发布一个 vue 组件（二）

- 入口文件

```
import Test from './Test.vue';

Test.install = Vue => Vue.component(Test.name, Test)

export default Test;
```

- 使用

```
<template>
  <div id="app">
    <Test msg="123" />
  </div>
</template>
<script>
import Vue from "vue";
import Test from "hedytest";

Vue.use(Test);
export default {};
</script>
```

## 使用 npm 发布多个 vue 组件（一）

- 入口文件

```
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

export {
  Test,
  Info
}
```

- 使用

```
<template>
  <div id="app">
    <Info msg="111" />
    <Test msg="123" />
  </div>
</template>
<script>
import { Info, Test } from "hedytest";
export default {
  components: {
    Info,
    Test
  }
};
</script>
```

## 使用 npm 发布多个 vue 组件（二）

