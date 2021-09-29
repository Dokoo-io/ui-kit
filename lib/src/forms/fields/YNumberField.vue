<template>
  <y-text-field
    ref="field"
    v-model="localValue"
    v-bind="$attrs"
    :errors="!!errors.length"
    :error-messages="errors"
    v-on="listeners"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </y-text-field>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    value: {
      required: false,
      type: Number,
      default: null
    }
  },
  data () {
    return {
      localValue: ''
    }
  },
  computed: {
    listeners () {
      return _.omit(this.$listeners, ['input'])
    },
    errors () {
      if (isNaN(this.localValue)) {
        return ['Must be a number']
      }
      return []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        if (value !== null && value.toString() !== this.localValue) {
          this.localValue = value
        }
      }
    },
    localValue: {
      handler () {
        if (typeof this.localValue === 'string') {
          this.localValue = this.localValue.replace(',', '.')
        }
        if (!isNaN(this.localValue) && this.localValue !== '') {
          this.$emit('input', parseFloat(this.localValue))
        }
        if (this.localValue === '') {
          this.$emit('input', null)
        }
      }
    }
  },
  methods: {
    focus () {
      this.$refs.field.focus()
    },
    select () {
      this.$refs.field.$refs.input.select()
    }
  }
}
</script>
