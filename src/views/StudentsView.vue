<template>
  <div v-if="isLoad">
    <!-- header -->
    <v-container style="position: relative;z-index: 1;">
      <BaseStudentsHackathon
        :block="getArticle(2)"
      />
    </v-container>
    <!-- competition -->
    <div class="hex-section">
      <v-container style="z-index: 10; position: relative">
        <BaseStudentsCompetition
          :block="getArticle(3)"
        />
      </v-container>
      <svg
        v-if="scrolledHexLines"
        class="hex-section-line"
        width="100%"
        height="100%"
        viewBox="0 0 1440 812"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004"
          stroke="url(#Gradient1)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient id="Gradient1">
            <stop
              class="line-stop-1"
              offset="0"
              stop-color="#6A30F4"
            >
              <animate
                attributeName="offset"
                values="0;1"
                dur="1.5s"
                begin="0.5s"
                fill="freeze"
              />
            </stop>
            <stop
              offset="0"
              class="line-stop-2"
              stop-opacity="0"
            >
              <animate
                attributeName="offset"
                values="0;1"
                dur="1.5s"
                begin="0.5s"
                fill="freeze"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        v-if="scrolledHexLines"
        class="hex-section-line"
        width="100%"
        height="100%"
        viewBox="0 0 1440 812"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="one"
          d="M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621"
          stroke="url(#Gradient2)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient id="Gradient2">
            <stop
              class="line-stop-1"
              offset="0"
              stop-color="#18FFBA"
            >
              <animate
                attributeName="offset"
                values="0;1"
                dur="1.5s"
                fill="freeze"
              />
            </stop>
            <stop
              offset="0"
              class="line-stop-2"
              stop-opacity="0"
            >
              <animate
                attributeName="offset"
                values="0;1"
                dur="1.5s"
                fill="freeze"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
      <LineComponent
        id="1"
        color="#FF0281"
        width="50%"
        position="left"
        top="-10px"
        left-after="20%"
      />
      <LineComponent
        id="2"
        color="#FF776E"
        width="50%"
        position="left"
        top="5px"
      />
    </div>
    <!-- Useful links -->
    <v-container class="py-6 py-md-12">
      <div class="text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
        Полезные ссылки
      </div>
      <v-row justify="center">
        <v-col
          cols="9"
          md="11"
        >
          <v-row>
            <v-col
              v-for="(item,i) in usefulLinks"
              :key="i"
              cols="12"
              md="4"
            >
              <BaseUlBlock :item="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!--  course  -->
    <!--    <v-container class="pb-4 pb-md-12">-->
    <!--      <BaseStudentsArticleComponent :block="getArticle(4)" />-->
    <!--    </v-container>-->
    <!--  Leaders  -->
    <LineComponent
      id="3"
      color="#6A30F4"
      width="35%"
      position="right"
    />
    <LineComponent
      id="4"
      color="#FF776E"
      width="70%"
      position="left"
      top="10px"
    />
    <div class="section-background pt-8 pt-md-12 pb-2 pb-md-6">
      <v-container>
        <div class="text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Сотрудники факультета
        </div>
        <CarouselLeadersComponent :slider="[dean].concat(contacts,office)" />
      </v-container>
    </div>
    <LineComponent
      id="5"
      color="#FF0281"
      width="35%"
      position="left"
      top="-5px"
    />
    <LineComponent
      id="6"
      color="#18FFBA"
      width="68%"
      position="right"
      top="10px"
    />
  </div>
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
  name: 'StudentsView',
  components: {
    // BaseStudentsArticleComponent: () => import('@/components/students/BaseStudentsArticleComponent'),
    BaseStudentsCompetition: () => import('@/components/students/BaseStudentsCompetition'),
    BaseStudentsHackathon: () => import('@/components/students/BaseStudentsHackathon'),
    LineComponent: () => import('@/components/LineComponent'),
    BaseUlBlock: () => import('@/components/BaseUlBlock'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent')
  },
  data: () => ({
    isLoad: false,
    scrolledHexLines: false,
    usefulLinks: [
      {
        name: 'Административные', img: require('../assets/images/students/building.svg'),
        links: [
          { name: 'Студенческий офис', href: 'https://student.itmo.ru/ru/studoffice/' },
          { name: 'Интернет-портал ИСУ', href: 'https://isu.ifmo.ru/' },
          { name: 'Личный кабинет my.itmo', href: 'https://my.itmo.ru/' },
          {
            name: 'Прохождение практики',
            href: 'https://docs.google.com/document/d/1BC2OQzaQ8bW3ZAfSdk8c_F1_j9JhVi3tWjeekJ_i8Fc/edit#heading=h.y9jim1888njz'
          }]
      },
      {
        name: 'Информационные', img: require('../assets/images/students/news.svg'),
        links: [
          { name: 'Поступление', href: 'https://abit.itmo.ru/' },
          { name: 'Telegram-канал ИКТ', href: 'https://t.me/itmoict' },
          { name: 'Telegram-канал ITMOLNIA', href: 'https://t.me/s/itmolnia' },
          { name: 'Сайт ИТМО', href: 'https://itmo.ru/ru/' }]
      },
      {
        name: 'Другое', img: require('../assets/images/students/calendar.svg'),
        links: [
          { name: 'Центр Карьеры', href: 'https://careers.itmo.ru/' },
          { name: 'ITMO.Students', href: 'https://student.itmo.ru/ru/' },
          { name: 'Telegram-канал ППА', href: 'https://t.me/+OAOaeubBw6IzYjAy' }]
      }
    ]
  }),
  computed: {
    ...mapState('news', [ 'articles']),
    ...mapState('contacts', ['contacts', 'dean', 'office'])
  },
  async mounted() {
    await this.getArticles()
    this.isLoad = true
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('news', ['getArticles']),
    getArticle(id) {
      return Object.assign({ title: this.articles.find(a => a.id === id).title }, JSON.parse(this.articles.find(a => a.id === id).description))
    },
    handleScroll() {
      if (!this.scrolledHexLines) {
        let height = document.documentElement.clientHeight
        let line = document.querySelector('.hex-section')
        if (line) {
          let bottomLine = line.getBoundingClientRect().top + 150
          if (bottomLine < height && bottomLine > 0) {
            this.scrolledHexLines = true
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.hex-section {
  position: relative;
  z-index: 0;
  width: 100%;
  background-size: cover;
  background-position: top left;
  margin-top: -6em;
  padding-top: 25em;
  @media (max-width: 1904px) {
    margin-top: -8em;
    padding-top: 18em;
  }
  @media (max-width: 1440px) {
    margin-top: -6em;
    padding-top: 18em;
  }
  @media (max-width: 1280px) {
    margin-top: -6em;
    padding-top: 16em;
  }
  @media (max-width: 960px) {
    background-position: 25% 0;
    margin-top: -9em;
    padding-top: 14em;
  }
  @media (max-width: 600px) {
    background-position: 25% 0;
    margin-top: -6em;
    padding-top: 10em;
  }

  .hex-section-line {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    @media (max-width: 960px) {
      left: -10%;
    }
    @media (max-width: 800px) {
      left: -25%;
      width: 125%;
    }
    @media (max-width: 600px) {
      left: -20%;
      width: 120%;
    }
    @media (max-width: 480px) {
      left: -50%;
      width: 150%;
    }
  }
}
</style>
