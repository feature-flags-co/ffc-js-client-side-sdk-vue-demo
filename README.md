# 敏捷开关 Vue [ffc-js-client-side-sdk demo](https://github.com/feature-flags-co/ffc-js-client-side-sdk)
[English README](README-EN.md)

## 集成 SDK 到已有的 Vue 项目
1. 安装 SDK
```
npm install ffc-js-client-side-sdk --save 
```
2. 将 src/ffc 文件夹复制到项目中，打开 src/ffc/config.js 文件并且将 **secret** 替换为您自己环境的 secret
```javascript
export const option = {
    secret: "USE_YOUR_ENVIRONMENT_SECRET", // 替换为自己环境的 secret
    anonymous: false,
    user: { // 运行 demo 时可以不用改
        id: 'my-user',
        userName: 'my user',
        email: '',
        customizedProperties: [
            {
                "name": "sex",
                "value": "male"
            }]
    },
    devModePassword: 'thisisademo' // 激活开发者模式的密码，非必须
}
```

3. 可以调用 如下方法切换用户
```
ffcClient.identify(user);
```
4. 使用开关
```js
<script>
import { ffcStore } from "./ffc";
</script>

<template>
  <div className="App">
    <header className="App-header">
      <div>Hello {{ffcStore.flags["hello"]}} </div>
      <Counter v-if="ffcStore.flags['counter'] === 'true'"/>
    </header>
  </div>
</template>
```

如果想了解更多关于 SDK 的使用方法, 请阅读 [SDK readme](https://github.com/feature-flags-co/ffc-js-client-side-sdk)

## 运行 Demo
1. 前往 [https://portal.featureflag.co](https://portal.featureflag.co) 创建项目和环境
2. 在环境中创建两个开关
    1. **hello** : 两个返回值，分别为 **World** 和 **Universe**
       ![hello flag config](./assets/helloflag.jpg)
    2. **counter** : 两个返回值，非别为 **true** 和 **false**
       ![counter flag config](./assets/counterflag.jpg)


3. 打开 src/ffc/config.js 文件并且将 secret 替换为您自己环境的 secret
```javascript
export const option = {
    secret: "USE_YOUR_ENVIRONMENT_SECRET", // 替换为自己环境的 secret
    anonymous: false,
    user: { // 运行 demo 时可以不用改
        id: 'my-user',
        userName: 'my user',
        email: '',
        customizedProperties: [
            {
                "name": "sex",
                "value": "male"
            }]
    },
    devModePassword: 'thisisademo' // 激活开发者模式的密码，非必须
}
```

4. 运行程序
```
npm install
npm run dev
```

5. 运行结果:
    1. Hello World
       ![Hello World](./assets/helloworld.jpg)
    2. Hello Universe
       ![Hello Universe](./assets/hellouniverse.jpg)
    3. 激活 counter 模块
       ![Activate counter module](./assets/withcountermodule.jpg)
