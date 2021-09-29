<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-chip
        v-bind="$attrs"
        label
        small
        color="primary"
        v-on="{
          click: () => {
            $kit.helpers.copy(uuid)
          },
          ...on,
          ...$listeners
        }"
      >
        <span>
          <slot name="prepend" />
          {{ sliced }}
        </span>
      </v-chip>
    </template>
    {{ uuid }}
  </v-tooltip>
</template>

<script>
export default {
  computed: {
    sliced () {
      return this.uuid.slice(0, 5)
    },
    uuid () {
      return this.$slots.default?.[0]?.text?.trim()
    }
  }
}
</script>
