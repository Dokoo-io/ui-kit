<script>
export default {
  props: {
    fetchFn: {
      required: true,
      type: Function
    }
  },
  data () {
    return {
      fetching: false,
      result: null,
      error: null
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.fetching = true
      this.error = null
      try {
        this.result = await this.fetchFn()
      } catch (error) {
        this.error = error
      }
      this.fetching = false
    }
  },
  render (h) {
    if (this.result === null && this.fetching) {
      return this.$slots.fetching
    } else if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({
        data: this.result
      })
    } else if (this.$slots.refetching) {
      return this.$slots.refetching
    }
    return h('')
  }
}
</script>
