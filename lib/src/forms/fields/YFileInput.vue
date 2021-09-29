<template>
  <v-file-input
    v-bind="$attrs"
    outlined
    dense
    :disabled="disabled || loading"
    :loading="loading"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    loading: {
      required: false,
      type: Boolean,
      default: false
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>
