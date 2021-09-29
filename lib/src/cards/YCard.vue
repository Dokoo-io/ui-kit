<template>
  <v-card
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-card-title v-if="$slots.title" class="pb-4">
      <slot name="title" />
    </v-card-title>
    <slot name="default" />
    <v-card-actions v-if="$slots['action-buttons']">
      <v-spacer />
      <slot name="action-buttons" />
    </v-card-actions>
    <!-- pass through scoped slots -->
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </v-card>
</template>

<script>
export default {}
</script>
