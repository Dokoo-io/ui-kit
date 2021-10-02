<script>
import { VTextField } from 'vuetify/lib'
export default {
  extends: VTextField,
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    }
  },
  created () {
    if (this.attrs$ && !this.attrs$.name) {
      this.attrs$.name = this.$attrs.name || `${new Date().getTime()}-text-input`
    }
  }
}
</script>
