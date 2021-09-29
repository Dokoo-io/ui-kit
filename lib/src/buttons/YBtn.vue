<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :small="small"
    :loading="loading"
    :large="large"
    :disabled="loading || disabled"
    :icon="!!icon"
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

    <!-- after iterating over slots and scopedSlots, you can customize them like this -->
    <template #default>
      <v-icon v-if="iconPrefix" left :small="small" :large="large">
        {{ iconPrefix }}
      </v-icon>
      <v-icon v-if="icon" :small="small">
        {{ icon }}
      </v-icon>
      <slot name="default" />
      <v-icon v-if="iconSuffix" right :small="small">
        {{ iconSuffix }}
      </v-icon>
    </template>
  </v-btn>
</template>

<script>
export default {
  props: {
    loading: {
      required: false,
      type: Boolean,
      default: false
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    color: {
      required: false,
      type: String,
      default: 'info'
    },
    iconPrefix: {
      required: false,
      type: String,
      default: null
    },
    iconSuffix: {
      required: false,
      type: String,
      default: null
    },
    small: {
      required: false,
      type: Boolean,
      default: false
    },
    large: {
      required: false,
      type: Boolean,
      default: false
    },
    icon: {
      required: false,
      type: String,
      default: null
    }
  }
}
</script>
