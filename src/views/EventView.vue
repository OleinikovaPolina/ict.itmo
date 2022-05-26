<template>
  <v-container v-if="loading && Object.keys(eventsOne).length">
    <BaseNews :data="eventsOne" />
  </v-container>
  <BaseNotFound v-else-if="loading" />
  <div
    v-else
    class="d-flex justify-center fill-height align-center"
    style="min-height: 75vh"
  >
    <v-progress-circular indeterminate />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'EventView',
  components: {
    BaseNotFound: () => import('@/components/app/BaseNotFound'),
    BaseNews: () => import('@/components/events/BaseNews')
  },
  data: () => ({ loading: false }),
  computed: mapState('news', { 'eventsOne': 'event' }),
  watch: {
    '$route.params': {
      handler: async function() {
        this.loading = false
        await this.getEvent(this.$route.params.id)
        this.loading = true
      },
      deep: true,
      immediate: true
    }
  },
  async mounted() {
    await this.getEvent(this.$route.params.id)
    this.loading = true
  },
  methods: mapActions('news', ['getEvent'])
}
</script>
