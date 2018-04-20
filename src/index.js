import createInstance from './createInstance'

export default function install (Vue, options = {}) {
  const name = options.name || 'VueTimeFlows'
  options.name = undefined
  return Vue.component(name, createInstance(options))
}

export {
  createInstance
}
