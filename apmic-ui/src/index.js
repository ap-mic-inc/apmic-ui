import CheckBox from './components/CheckBox.vue'
import CommonBtn from './components/CommonBtn.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import InputBox from './components/InputBox.vue'
import ToggleSwitch from './components/ToggleSwitch.vue'

const coms = [CheckBox, CommonBtn, DropdownMenu, InputBox, ToggleSwitch]

const install = (Vue) => {
  coms.forEach((com) => {
    console.log('components:', com)
    Vue.component(com.name, com)
  })
}

export default install
