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
    <v-menu
        v-model="menu3"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template #activator="{ on, attrs }">
        <y-text-field
            v-model="internalTimeValue"
            class="ml-2"
            prepend-inner-icon="schedule"
            readonly
            v-bind="attrs"
            v-on="on"
        />
      </template>
      <v-time-picker
          v-model="internalTimeValue"
          format="24hr"
          @input="menu3 = false"
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
      default: null,
      type: String
    }
  },
  data () {
    return {
      menu2: false,
      menu3: false,
      internalDateValue: this.value ? moment(this.value).format('YYYY-MM-DD') : null,
      internalTimeValue: this.value ? moment(this.value).format('HH:mm') : null
    }
  },
  computed: {
    internalValue () {
      if (!this.internalDateValue && !this.internalTimeValue) {
        return null
      }
      if (!this.internalTimeValue) {
        return moment(this.internalDateValue).format()
      }
      return moment(`${this.internalDateValue} ${this.internalTimeValue}`).format()
    },
  },
  watch: {
    internalValue () {
      this.$emit('input', this.internalValue)
    }
  }
}
</script>
