<template>
  <y-card>
    <template #title>
      Confirmation
    </template>
    <v-card-text>
      <div>
        {{ text }}
      </div>
      <v-alert v-if="error" class="mt-5" type="error">
        {{ error }}
      </v-alert>
    </v-card-text>
    <template #action-buttons>
      <y-btn
        text
        color="error"
        @click="$emit('close')"
      >
        Cancel
      </y-btn>
      <y-btn
        text
        color="success"
        @click="validate"
      >
        Confirmer
      </y-btn>
    </template>
  </y-card>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: {
      type: Function,
      required: false,
      default: () => null
    }
  },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  methods: {
    async validate () {
      this.loading = true
      try {
        await this.onConfirm()
        this.$emit('close')
      } catch (error) {
        this.error = error
      }
      this.loading = false
    },
    async cancel () {
      try {
        await this.onCancel()
      } catch (error) {
        this.$kit.notification({
          text: 'Une erreur est survenue',
          type: 'error'
        })
      }
      this.$emit('close')
    }
  }
}
</script>
