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
        :dark="theme==='dark'"
        :color="theme==='dark'?'#00A1FF':'#005A8E'"
        class="search-input"
        placeholder="Введите название новости или тега"
        append-icon="mdi-magnify"
        hide-details
        dense
        outlined
        clearable
        @click:append="()=>{}"
      />
    </v-col>
    <div class="py-3 py-md-6">
      <div class="font-weight-bold">
        Популярные теги
      </div>
      <div
        v-for="(tag,i) in tags"
        :key="i"
        class="d-flex pt-md-2 align-center"
      >
        <div class="pr-4">
          {{ tag.name }}
        </div>
        <v-chip-group
          v-model="tagsSelected[i]"
          multiple
        >
          <BaseChipSelected
            v-for="(item,j) in tag.items"
            :key="j"
            :item="{type:i,name:item}"
            class="mr-2"
          />
        </v-chip-group>
      </div>
    </div>
    <!-- result of searching   -->
    <div v-if="news.length===0 && isLoad">
      По вашему запросу ничего не найдено
    </div>
    <div v-else-if="news.length>0">
      <v-row>
        <v-col
          v-for="(item,i) in news"
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
          :class="(n-1)===activeIndex?'is-active':''"
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
import { mapState } from 'vuex'
import img from '@/assets/images/delete/home-1.png'

export default {
  name: 'NewsView',
  components: {
    BaseChipSelected: () => import('@/components/events/BaseChipSelected'),
    BaseNews: () => import('@/components/events/BaseNewsSmall')
  },
  data: () => ({
    news: [
      {
        id: 1,
        img: img,
        date: '12 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '13 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '14 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '15 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '16 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '17 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '18 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '19 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      }
    ],
    tags: [
      { name: 'Факультет:', items: ['Факультет', 'Декан', 'ППА'] },
      { name: 'Хакатоны:', items: ['Факультет', 'Декан', 'ППА'] },
      { name: 'Конференции:', items: ['Факультет', 'Декан', 'ППА'] },
      { name: 'Студ. жизнь:', items: ['Факультет', 'Декан', 'ППА'] }
    ],
    tagsSelected: [[], [], [], []],
    pages: 3,
    activeIndex: 0,
    isLoad: false,
  }),
  computed: {
    ...mapState('app', ['theme'])
  },
  watch: {
    // tagsSelected(val) {
    //   console.log(val)
    // }
  },
  mounted() {
    this.isLoad = true
  },
  methods: {
    next() {
      this.activeIndex = this.activeIndex < this.pages - 1 ? this.activeIndex + 1 : 0
    },
    prev() {
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.pages - 1
    },
    clickDelimiters(i) {
      this.activeIndex = i
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