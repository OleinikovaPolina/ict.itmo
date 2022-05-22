<template>
  <v-container class="news-container">
    <!--  breadcrumbs  -->
    <div class="text-body-2 breadcrumbs text-start">
      <router-link
        to="/events"
      >
        События
      </router-link>
      <span>/ Новости</span>
    </div>
    <!--  inputs  -->
    <div class="pt-4 pb-2 text-h4 text-xl-h3">
      Новости
    </div>
    <v-col
      cols="12"
      md="6"
      class="pl-0"
    >
      <v-text-field
        v-model="search"
        :dark="theme==='dark'"
        :color="theme==='dark'?'#00A1FF':'#005A8E'"
        class="search-input"
        placeholder="Введите название новости или тега"
        append-icon="mdi-magnify"
        hide-details
        dense
        outlined
        clearable
        @keyup.enter="clickTagSearch"
        @click:append="clickTagSearch"
      />
    </v-col>
    <div class="py-3 py-md-6">
      <div class="font-weight-bold">
        Популярные теги
      </div>
      <div
        v-for="(category,i) in tagsCategories"
        :key="i"
        class="d-flex pt-md-2 align-center"
      >
        <div class="pr-4">
          {{ category.name }}
        </div>
        <v-chip-group
          v-model="tagsSelected"
          multiple
          column
          @change="clickTagSearch"
        >
          <BaseChipSelected
            v-for="item in tags.filter(tag=>tag.category.id===category.id)"
            :key="item.id"
            :item="item"
            class="mr-2"
          />
        </v-chip-group>
      </div>
    </div>
    <!-- result of searching   -->
    <div v-if="isLoad && news.results && news.results.length===0">
      По вашему запросу ничего не найдено
    </div>
    <div
      v-else-if="news.results && news.results.length>0"
      id="news"
      :style="{opacity: isLoad?1:0.5}"
    >
      <v-row>
        <v-col
          v-for="(item,i) in news.results"
          :key="i"
          cols="6"
          md="3"
          class="pt-4 pt-md-8"
        >
          <BaseNews :news="item" />
        </v-col>
      </v-row>
      <v-row justify="center">
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
            @input="changePage"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'NewsView',
  components: {
    BaseChipSelected: () => import('@/components/events/BaseChipSelected'),
    BaseNews: () => import('@/components/events/BaseNewsSmall')
  },
  data: () => ({
    tagsSelected: [],
    search: '',
    pages: 3,
    page: 1,
    isLoad: false
  }),
  computed: {
    ...mapState('app', { theme: 'theme' }),
    ...mapState('news', ['tags', 'tagsCategories', 'news'])
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
  async mounted() {
    await this.getTags()
  },
  methods: {
    ...mapActions('news', ['getNews', 'getTags']),
    clickTagSearch() {
      this.page = 1
      this.changeRoute()
    },
    getRouterQuery() {
      let pageQuery = parseInt(this.$route.query.page?.toString())
      this.page = pageQuery > 0 ? pageQuery : 1
      this.search = this.$route.query.search?.toString()
      this.tagsSelected = this.$route.query.tags?.toString().split(',').map(x => parseInt(x)) || []
    },
    changeRoute() {
      let query = { page: (this.page).toString() }
      if (this.tagsSelected.length) {
        query.tags = this.tagsSelected.toString()
      }
      if (this.search) {
        query.search = this.search
      }
      this.$router
        .push({ query: query })
        .catch(() => ({}))
    },
    async changeNews() {
      this.isLoad = false
      await this.getNews({ page: this.page - 1, search: this.search, tags: this.tagsSelected })
      this.pages = Math.ceil(this.news.count / 16)
      this.isLoad = true
    },
    scrollPage() {
      const top = window.scrollY + document.getElementById('news')?.getBoundingClientRect().y - document.querySelector('.navbar-container')?.clientHeight
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    },
    changePage() {
      this.scrollPage()
      this.changeRoute()
    }
  }
}
</script>

<style lang="scss">
@import "../styles/pagination";
</style>