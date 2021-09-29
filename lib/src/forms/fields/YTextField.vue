<template>
  <v-text-field
    v-bind="$attrs"
    outlined
    dense
    :name="`${new Date().getTime()}-text-input`"
    v-on="$listeners"
  >
    <!-- pass through scoped slots -->
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <!-- pass through normal slots -->
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-text-field>
</template>
