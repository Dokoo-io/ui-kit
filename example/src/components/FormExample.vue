<template>
  <div>
    <y-form
        v-model="internalValue"
        :inputs="inputs"
    />
    <div>
      {{ internalValue }}
    </div>
  </div>
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
        },
        {
          type: 'combobox',
          key: 'test combo',
          options: {
            label: 'Some combobox field',
            multiple: true
          }
        },
        {
          type: 'date',
          key: 'my date'
        },
        {
          type: 'dateTime',
          key: 'my date and time'
        },
        {
          type: 'file',
          key: 'my_file',
          options: {
            label: 'My File input'
          }
        }
      ],
      internalValue: {}
    }
  }
}
</script>
