<template>
  <div
    ref="editor"
    :style="{
      height: `${height}px`
    }"
    class="editor-wrapper"
  />
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    height: {
      type: Number,
      required: false,
      default: 400
    }
  },
  data () {
    return {
      editor: null,
      internalValue: this.value
    }
  },
  watch: {
    value (val) {
      if (this.editor && this.editor.getValue() !== val) {
        this.editor.setValue(val)
      }
    }
  },
  async mounted () {
    const monaco = await import('monaco-editor')
    this.editor = monaco.editor.create(this.$refs.editor, {
      language: 'html',
      theme: 'vs-dark',
      value: this.value,
      ...this.options
    })
    this.editor.onDidChangeModelContent(() => {
      if (this.editor.getValue() !== this.value) {
        this.$emit('input', this.editor.getValue())
      }
    })
  }
}
</script>
