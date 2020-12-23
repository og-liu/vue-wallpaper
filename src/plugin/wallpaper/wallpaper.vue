<template>
  <transition name="fade">
    <div class="fullscreen" ref="wallpaper" v-show="wallpaperVisible"></div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'vue-wallpaper',
  props: {
    // 自今日起第 d 天前的数据
    d: {
      type: Number,
      default: 0
    },
    // z-index 层级
    z: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      wallpaperVisible: false
    }
  },
  mounted () {
    axios.get('/api/HPImageArchive.aspx', {
      params: {
        format: 'js',
        idx: this.d,
        n: 1
      }
    }).then(res => {
      const img = new Image()
      img.src = 'http://www.bing.com' + res.data.images[0].url
      img.onload = () => {
        this.wallpaperVisible = true
        this.$nextTick(() => {
          this.$refs.wallpaper.style.background = `url(${img.src})`
          this.$refs.wallpaper.style.backgroundSize = 'cover'
          this.$refs.wallpaper.style.backgroundPosition = '50% 50%'
          this.$refs.wallpaper.style.zIndex = this.z
        })
      }
    })
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
