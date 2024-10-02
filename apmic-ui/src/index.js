import CheckBox from './components/CheckBox.vue'
import CollapsibleBlock from './components/CollapsibleBlock.vue'
import CommonBtn from './components/CommonBtn.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import InputBox from './components/InputBox.vue'
import ListItem from './components/ListItem.vue'
import ToggleSwitch from './components/ToggleSwitch.vue'
import presetStyles from '../preset-css'

const components = {
  CheckBox,
  CollapsibleBlock,
  CommonBtn,
  DropdownMenu,
  InputBox,
  ListItem,
  ToggleSwitch
}

const install = (app) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default {
  install
}

export {
  CheckBox,
  CollapsibleBlock,
  CommonBtn,
  DropdownMenu,
  InputBox,
  ListItem,
  ToggleSwitch,
  presetStyles
}
