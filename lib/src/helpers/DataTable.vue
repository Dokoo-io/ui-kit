<template>
  <v-data-table
    v-bind="$attrs"
    :footer-props="{
      itemsPerPageOptions: paginationOptions
    }"
    :loader-height="2"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    paginationOptions: {
      type: Array,
      required: false,
      default: () => [20, 50, 100, 200, -1]
    }
  }
}
</script>
