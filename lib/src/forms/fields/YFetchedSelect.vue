<template>
  <v-autocomplete
    v-bind="$attrs"
    :items="filteredItems"
    outlined
    dense
    :disabled="loading"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
    <template v-if="loading" #append>
      <div class="pa-1">
        <v-progress-circular :size="15" width="2" indeterminate />
      </div>
    </template>
  </v-autocomplete>
</template>

<script>

export default {
  props: {
    fetchFn: {
      required: true,
      type: Function
    },
    filterFn: {
      required: false,
      type: Function,
      default: null
    }
  },
  data () {
    return {
      items: [],
      loading: false
    }
  },
  computed: {
    filteredItems () {
      if (this.filterFn) {
        return this.items.filter(this.filterFn)
      }
      return this.items
    }
  },
  async created () {
    this.loading = true
    try {
      this.items = await this.fetchFn()
    } catch (error) {
      this.error = error
    }
    this.loading = false
  }
}
</script>
