// require.context, 将svg目录的所有文件通过require引入
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
// register globally
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
