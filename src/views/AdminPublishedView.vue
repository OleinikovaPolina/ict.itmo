<template>
  <v-container>
    <div class="d-flex">
      <BaseButtonOutlined
        text="Анонсы"
        class="rounded-r-0"
        :active="typeData===0"
        :click-btn="true"
        @clickBtnCallback="changeTypeData(0)"
      />
      <BaseButtonOutlined
        text="Новости"
        class="rounded-l-0 ml-2"
        :active="typeData===1"
        :click-btn="true"
        @clickBtnCallback="changeTypeData(1)"
      />
    </div>
    <v-row
      v-if="isLoad"
      class="pt-6"
      align="stretch"
    >
      <v-col
        v-for="(info,i) in typeData===1?news.results:announcements.results"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseBlock
          :info="info"
          :link="(typeData?'/updateNews/':'/updateAnnouncements/')+info.id"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="isLoad"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="5"
      >
        <v-pagination
          v-model="page"
          :length="pages"
          :total-visible="7"
          circle
          dark
          @input="changeRoute"
        />
      </v-col>
    </v-row>
    <div
      v-if="!isLoad"
      class="d-flex justify-center align-center"
      style="min-height: 75vh"
    >
      <v-progress-circular indeterminate />
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminPublishedView',
  components: {
    BaseBlock: () => import('@/components/admin/BaseBlock'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined')
  },
  data: () => ({
    typeData: 0,
    pages: 3,
    page: 1,
    isLoad: false
  }),
  computed: {
    ...mapState('news', ['tags', 'tagsCategories', 'news', 'announcements'])
  },
  watch: {
    '$route.params': {
      handler: function() {
        this.getRouterQuery()
        this.changeNews()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions('news', ['getNews', 'getAnnouncements']),
    getRouterQuery() {
      let pageQuery = parseInt(this.$route.query.page?.toString())
      this.page = pageQuery > 0 ? pageQuery : 1
      let typeDataQuery = parseInt(this.$route.query.typeData?.toString())
      this.typeData = typeDataQuery === 1 ? 1 : 0
    },
    changeRoute() {
      let query = { page: (this.page).toString() }
      if (this.typeData) {
        query.typeData = this.typeData
      }
      this.$router
        .push({ query: query })
        .catch(() => ({}))
    },
    async changeNews() {
      this.isLoad = false
      if (this.typeData === 1) {
        await this.getNews({ page: this.page - 1 })
        this.pages = Math.ceil(this.news.count / 16)
      } else if (this.typeData === 0) {
        await this.getAnnouncements({ page: this.page - 1 })
        this.pages = Math.ceil(this.announcements.count / 16)
      }
      this.isLoad = true
    },
    changeTypeData(val) {
      this.typeData = val
      this.page = 1
      this.changeRoute()
      this.changeNews()
    }
  }
}
</script>

<style lang="scss">
@import "../styles/pagination";
</style>