<template>
  <y-form
    :inputs="inputs"
  />
</template>

<script>
export default {
  data () {
    return {
      inputs: [
        {
          type: 'text',
          key: 'test',
          options: {
            label: 'Some text field'
          }
        }
      ]
    }
  }
}
</script>
