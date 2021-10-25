import { v4 } from 'uuid'
import Color from 'color'
import copy from 'copy-to-clipboard'
import {VServerIterator, VServerTable} from '@hammerbot/v-server-table'
import { notify, addModal, Interactions } from '@dokoo/v-programmatic-interactions'
import { VNumberField, DokooForm } from '@dokoo/v-form-builder'
import YBtn from './buttons/YBtn'
import YCard from './cards/YCard'
import YTextField from './forms/fields/YTextField'
import YNumberField from './forms/fields/YNumberField'
import YSelect from './forms/fields/YSelect'
import YAutocomplete from './forms/fields/YAutocomplete'
import YCombobox from './forms/fields/YCombobox'
import YTextarea from './forms/fields/YTextarea'
import YPaddedPage from './pages/PaddedPage'
import FetchedComponent from './helpers/FetchedComponent'
import YDataTable from './helpers/DataTable'
import YSwitch from './forms/fields/YSwitch'
import YUuidChip from './chips/UuidChip'
import FormModal from './interactions/FormModal'
import YFetchedSelect from './forms/fields/YFetchedSelect'
import YFileInput from './forms/fields/YFileInput'
import YMonacoEditor from './forms/fields/YMonacoEditor'
import ConfirmModal from './interactions/ConfirmModal'
import AppCode from "./helpers/AppCode";
import YDateInput from "./forms/fields/YDateInput";
import YDateTimeInput from "./forms/fields/YDateTimeInput";

export const registerComponents = (Vue) => {
  const dokooFormOptions = {
    text: {
      component: YTextField
    },
    number: {
      component: VNumberField(YTextField)
    },
    select: {
      component: YSelect
    },
    combobox: {
      component: YCombobox
    },
    date: {
      component: YDateInput
    },
    dateTime: {
      component: YDateTimeInput
    },
    autocomplete: {
      component: YAutocomplete
    }
  }

  // Buttons
  Vue.component('YBtn', YBtn)

  // Cards
  Vue.component('YCard', YCard)

  // Fields
  Vue.component('YTextField', YTextField)
  Vue.component('YNumberField', YNumberField)
  Vue.component('YTextarea', YTextarea)
  Vue.component('YFetchedSelect', YFetchedSelect)
  Vue.component('YSwitch', YSwitch)
  Vue.component('YSelect', YSelect)
  Vue.component('YAutocomplete', YAutocomplete)
  Vue.component('YCombobox', YCombobox)
  Vue.component('YFileInput', YFileInput)
  Vue.component('YMonacoEditor', YMonacoEditor)
  Vue.component('YDateInput', YDateInput)
  Vue.component('YDateTimeInput', YDateTimeInput)

  // Forms
  Vue.component('YForm', DokooForm(dokooFormOptions))

  // Pages
  Vue.component('YPaddedPage', YPaddedPage)

  // Utils
  Vue.component('YFetch', FetchedComponent)
  Vue.component('YDataTable', YDataTable)
  Vue.component('YServerTable', VServerTable)
  Vue.component('YServerIterator', VServerIterator)
  Vue.component('YInteractions', Interactions)
  Vue.component('YUuidChip', YUuidChip)
  Vue.component('YAppCode', AppCode)
}

const formModal = (options) => {
  addModal({
    component: () => FormModal,
    options
  })
}

const confirm = (options) => {
  if (typeof options === 'string') {
    options = {
      text: options
    }
  }
  return new Promise((resolve) => {
    addModal({
      component: () => ConfirmModal,
      options: {
        ...options,
        onConfirm: () => {
          resolve(true)
        },
        onCancel: () => {
          resolve(false)
        }
      }
    })
  })
}

export const kit = {
  modal: addModal,
  formModal,
  confirm,
  notification: notify,
  uuid: v4,
  helpers: {
    isDark (hexa) {
      if (hexa === 'pink') {
        return true
      }

      try {
        const color = Color(hexa)
        if (color.isDark()) {
          return true
        }
      } catch (error) {
        console.error(error)
        // Not a color
      }

      return false
    },
    copy (text, options = {}) {
      const realOptions = {
        notificationText: 'The text have been copied!'
      }

      Object.assign(realOptions, options)
      copy(text, {
        format: 'text/plain'
      })
      notify({
        icon: 'content_copy',
        text: realOptions.notificationText
      })
    },
    formatDate (date) {
      return new Date(date).toLocaleString()
    }
  }
}

export default {
  install (Vue) {
    registerComponents(Vue)
    Vue.$kit = kit
    Vue.prototype.$kit = kit
  }
}

export {Interactions}
