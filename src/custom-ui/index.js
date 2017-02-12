import CUINavBar from './controls/navbar/index'

const components = [
  CUINavBar
]

let install = function (Vue,opts = {}) {
  if (install.installed) return
  install.installed = true
  components.map(component => {
    Vue.component(component.name,component)
  })
}

export default {
  install,
  CUINavBar
}
