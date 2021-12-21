<template>
  <div class="app-code">
    <span class="d-flex">
      <span class="d-block flex-grow-1" style="overflow: auto;">
        <highlightjs language="javascript" :code="code" />
      </span>
      <y-btn @click="$kit.helpers.copy($slots.default[0].text)" small icon="content_copy" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    language: {
      required: false,
      type: String,
      default: null
    }
  },
  computed: {
    code () {
      if (!this.$slots || !this.$slots.default || !this.$slots.default[0] || typeof this.$slots.default[0].text !== 'string') {
        console.warn('app code component does not like this input.')
        return ''
      }
      return this.$slots.default[0].text.trim()
    }
  }
}
</script>

<style>
.theme--light.v-application code {
  background-color: transparent !important;
  color: #adbac7 !important;
}
</style>

<style lang="scss" scoped>
.app-code {
  // color: #D8DEE9;
  padding: 20px;
  background: #22272e;
  border-radius: 3px;
  position: relative;
  pre {
    white-space: pre-wrap;
    font-size: 1.05rem;
  }
}
</style>
