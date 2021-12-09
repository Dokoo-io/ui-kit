<template>
  <div class="app-code">
    <span class="d-flex">
      <span class="d-block flex-grow-1" style="overflow: auto;">
        <highlightjs language="javascript" :code="$slots.default[0].text" />
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
  }
}
</script>

<style>
.theme--light.v-application code {
  background: #2E3440;
}
</style>

<style lang="scss" scoped>
.app-code {
  color: #D8DEE9;
  padding: 20px;
  background: #2E3440;
  border-radius: 3px;
  position: relative;
  pre {
    white-space: pre-wrap;
  }
}
</style>
