import Block from './Block'
import Example from './Example'

const components = [Block, Example]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}