<template>
  <v-container v-if="loading && Object.keys(announcement).length">
    <BaseNews
      v-if="loading && announcement"
      :data="announcement"
    />
  </v-container>
  <BaseNotFound v-else-if="loading" />
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AnnouncementView',
  components: {
    BaseNotFound: () => import('@/components/app/BaseNotFound'),
    BaseNews: () => import('@/components/events/BaseNews')
  },
  data: () => ({ loading: false }),
  computed: mapState('news', ['announcement']),
  watch: {
    '$route.params': {
      handler: async function() {
        this.loading = false
        await this.getAnnouncement(this.$route.params.id)
        this.loading = true
      },
      deep: true,
      immediate: true
    }
  },
  async mounted() {
    await this.getAnnouncement(this.$route.params.id)
    this.loading = true
  },
  methods: mapActions('news', ['getAnnouncement'])
}
</script>