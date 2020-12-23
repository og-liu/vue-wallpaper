> 每日壁纸
<div align="center">
  <p align="center">vue-wallpaper<br>
  —— Made with ❤️ by <a href="https://github.com/og-liu">og-liu</a></p>
  <p align="center">
    <img src="https://img.shields.io/github/license/og-liu/vue-wallpaper" alt="License">
    <a href="https://github.com/og-liu/vue-wallpaper/stargazers">
        <img src="https://img.shields.io/github/stars/og-liu/vue-wallpaper" alt="Github starts">
    </a>
    <a href="https://www.npmjs.com/package/vue-wallpaper">
      <img src="https://img.shields.io/npm/dt/vue-wallpaper" alt="Npm downloads">
    </a>
    <img src="https://img.shields.io/npm/v/vue-wallpaper" alt="Npm version">
  </p>
</div>


## 安装
``` bash
# install dependencies
npm install vue-wallpaper
```

## 引入
```js
// main.js
import wallpaper from 'vue-wallpaper'
Vue.use(wallpaper)
```

## 解决跨域 （如果项目运行中修改配置文件，则需要重新运行项目才能生效）
```js
// config/index.js
module.exports = {
  dev: {
    proxyTable: {
      '/api': {
        target: 'http://www.bing.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

## 使用
```html
<vue-wallpaper></vue-wallpaper>

<!-- Prop d 使用 d 天前的数据 -->
<vue-wallpaper :d="1"></vue-wallpaper>

<!-- Prop z 墙纸 z-index 层级 -->
<vue-wallpaper :d="1" :z="2"></vue-wallpaper>
```
