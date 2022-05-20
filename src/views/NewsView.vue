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
      <div class="d-flex justify-center align-center pt-4 pt-md-8">
        <button
          class="btn-nav mr-3"
          @click="prev"
        >
          <v-icon
            :large="$vuetify.breakpoint.mdAndUp"
            color="white"
          >
            mdi-chevron-left
          </v-icon>
        </button>
        <v-btn
          v-for="n in pages"
          :key="n"
          icon
          :small="$vuetify.breakpoint.smAndDown"
          class="btn-nav-nums"
          :class="(n-1)===page?'is-active':''"
          @click="clickDelimiters(n-1)"
        >
          <span>{{ n }}</span>
        </v-btn>
        <button
          class="btn-nav ml-3"
          @click="next"
        >
          <v-icon
            :large="$vuetify.breakpoint.mdAndUp"
            color="white"
          >
            mdi-chevron-right
          </v-icon>
        </button>
      </div>
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
    page: 0,
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
      this.page = 0
      this.changeRoute()
    },
    getRouterQuery() {
      let pageQuery = parseInt(this.$route.query.page?.toString()) - 1
      this.page = pageQuery > -1 ? pageQuery : 0
      this.search = this.$route.query.search?.toString()
      this.tagsSelected = this.$route.query.tags?.toString().split(',').map(x => parseInt(x)) || []
    },
    changeRoute() {
      let query = { page: (this.page + 1).toString() }
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
      await this.getNews({ page: this.page, search: this.search, tags: this.tagsSelected })
      this.pages = Math.ceil(this.news.count / 16)
      this.isLoad = true
    },
    scrollPage(){
      const top = window.scrollY + document.getElementById('news')?.getBoundingClientRect().y -document.querySelector('.navbar-container')?.clientHeight
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
    },
    async next() {
      this.page = this.page < this.pages - 1 ? this.page + 1 : 0
      this.scrollPage()
      this.changeRoute()
    },
    async prev() {
      this.page = this.page > 0 ? this.page - 1 : this.pages - 1
      this.scrollPage()
      this.changeRoute()
    },
    async clickDelimiters(i) {
      this.page = i
      this.scrollPage()
      this.changeRoute()
    }
  }
}
</script>

<style scoped lang="scss">
.btn-nav {
  background-color: #2DC0C5;
  transition: all .3s ease-in-out;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
}

.btn-nav:hover {
  transform: scale(1.15);
}

.btn-nav:active {
  background-color: #1E7F83;
}

.btn-nav.is-active {
  background-color: #1E7F83;
}

.btn-nav-nums span {
  font-size: 22px;
  line-height: 24px;
  font-family: "OpenSans-Bold", sans-serif !important;
  opacity: 0.6;
  @media (max-width: 1904px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.theme-dark {
  .btn-nav-nums span {
    opacity: 0.8;
  }
}

.btn-nav-nums.is-active span {
  color: #2DC0C5 !important;
  opacity: 1;
}
</style>