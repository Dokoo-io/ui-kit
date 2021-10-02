<template>
  <div class="app-code">
    <span class="d-flex">
      <span class="d-block flex-grow-1">
        <pre><slot /></pre>
      </span>
      <y-btn @click="$kit.helpers.copy($slots.default)" small icon="content_copy" />
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-code {
  padding: 20px;
  color: #3b3b3b;
  background: #f8f8f8;
  border-radius: 3px;
  position: relative;
}
</style>
