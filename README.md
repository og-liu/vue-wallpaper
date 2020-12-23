# vue-wallpaper

> 每日壁纸

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
