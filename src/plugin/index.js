/**
 * Created by liukun on 2020/12/22.
 */

import wallpaper from './wallpaper'

const components = [
  wallpaper
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  wallpaper
}
