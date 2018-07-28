import template from './template.vue'
import { popupRegister } from 'vc-popup-base'

var popupConfig = {}

var defaultConfig = {
  position: 'center',
  animation: {
    init: 'vc-slide-up-init',
    in: 'vc-slide-up-in',
    out: 'vc-slide-up-out'
  }
}

export default popupRegister('{{ humpName }}', template, popupConfig, defaultConfig)
