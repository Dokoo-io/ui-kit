<template>
  <div class="d-flex">
    <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template #activator="{ on, attrs }">
        <y-text-field
            v-model="internalDateValue"
            prepend-inner-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
        />
      </template>
      <v-date-picker
          v-model="internalDateValue"
          @input="menu2 = false"
      />
    </v-menu>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    value: {
      required: false,
      type: String,
      default: null
    }
  },
  data () {
    return {
      menu2: false,
      internalDateValue: this.value ? moment(this.value).format('YYYY-MM-DD') : null
    }
  },
  computed: {
    internalValue () {
      if (!this.internalDateValue) {
        return null
      }
      return moment(this.internalDateValue).format('YYYY-MM-DD')
    }
  },
  watch: {
    internalValue () {
      this.$emit('input', this.internalValue)
    }
  }
}
</script>
