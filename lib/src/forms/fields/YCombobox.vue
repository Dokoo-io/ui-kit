<template>
  <v-combobox
    ref="combobox"
    v-bind="$attrs"
    outlined
    dense
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </v-combobox>
</template>

<script>
export default {
  methods: {
    blur () {
      return this.$refs.combobox.blur()
    }
  }
}
</script>
