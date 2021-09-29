<template>
  <v-card>
    <v-card-title v-if="title" class="mb-3">
      {{ title }}
    </v-card-title>
    <v-card-text v-if="inputs" class="pb-0">
      <y-form
        ref="form"
        :initial-value="initialValue"
        :inputs="inputs"
        :error="error"
      />
    </v-card-text>
    <component
      v-bind="options"
      :is="customForm()"
      v-else-if="customForm"
      ref="form"
      :initial-value="initialValue"
      :error="error"
    />
    <v-card-actions>
      <v-spacer />
      <y-btn
        color="error"
        text
        @click="$emit('close')"
      >
        Cancel
      </y-btn>
      <y-btn
        color="success"
        text
        :loading="loading"
        :disabled="loading"
        @click="validate"
      >
        Confirm
      </y-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    options: {
      required: false,
      type: Object,
      default: () => {}
    },
    onValidate: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    inputs: {
      type: Array,
      required: false
    },
    initialValue: {
      type: [Object, Array],
      required: false,
      default: null
    },
    customForm: {
      type: Function,
      required: false,
      default: null
    }
  },
  data () {
    return {
      show: false,
      loading: false,
      error: null
    }
  },
  created () {
  },
  methods: {
    validate () {
      return new Promise((resolve) => {
        if (this.$refs.form.blurAll) {
          this.$refs.form.blurAll()
        }
        this.$nextTick(async () => {
          this.loading = true
          this.error = null
          try {
            await this.onValidate(this.$refs.form.getValue())
            this.$emit('close')
          } catch (error) {
            console.error(error)
            this.error = error
          }
          this.loading = false
          resolve()
        })
      })
    }
  }
}
</script>
