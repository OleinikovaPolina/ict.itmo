<template>
  <div v-if="isLoad">
    <!-- header -->
    <v-container style="z-index: 1;position: relative">
      <v-row class="d-flex align-center justify-center">
        <v-col
          cols="12"
          sm="6"
          :class="$vuetify.breakpoint.xs?'text-center':''"
        >
          <div class="pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1">
            Факультет ИКТ
          </div>
          <div class="text-subtitle-1">
            Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих
            профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и
            высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в
            проектах наших партнеров.
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-center"
        >
          <HeaderAnimation :animation-header="animationHeader" />
        </v-col>
      </v-row>
    </v-container>
    <!-- What can you learn at the Faculty of ICT -->
    <div
      style="z-index: 0;position: relative"
      class="hex-section"
    >
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
      <v-container style="position: relative;z-index: 10;">
        <v-col
          cols="10"
          sm="7"
          lg="6"
          class=" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3"
        >
          {{ article.title }}
        </v-col>
        <BaseHexagonContainer
          :hex-array="JSON.parse(article.description).winnersHex"
          :link="'/article/1'"
        />
      </v-container>
      <LineComponent
        id="1"
        color="#FF776E"
        width="55%"
        position="left"
      />
      <LineComponent
        id="2"
        color="#FF0281"
        width="55%"
        position="right"
        top="10px"
      />
    </div>
    <!--  News  -->
    <NewsComponent
      class="pb-8 pb-xl-12"
      :news="news.results"
    />
    <!--  Leaders  -->
    <LineComponent
      id="3"
      color="#6A30F4"
      width="35%"
      position="left"
      top="-10px"
    />
    <LineComponent
      id="4"
      color="#18FFBA"
      width="75%"
      position="right"
    />
    <div class="section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14">
      <v-container>
        <div class="text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3">
          Руководство факультета
        </div>
        <CarouselLeadersComponent :slider="persons" />
      </v-container>
    </div>
    <LineComponent
      id="5"
      color="#FF0281"
      width="40%"
      position="left"
    />
    <LineComponent
      id="6"
      color="#FF776E"
      width="45%"
      position="right"
      top="10px"
    />
    <!--  ethics  -->
    <div class="ethics">
      <TheEthicsMobileComponent class="ethics-mobile" />
      <TheEthicsComponent class="ethics-desktop" />
    </div>
    <LineComponent
      id="7"
      color="#18FFBA"
      width="30%"
      position="right"
      top="-5px"
    />
    <LineComponent
      id="8"
      color="#FF0281"
      width="60%"
      position="left"
      top="10px"
      left-after="15%"
    />
    <!-- Clubs -->
    <div class="section-background pt-4 pb-10 pt-lg-12 pb-lg-16">
      <v-container>
        <div class="text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3">
          Клубы факультета
        </div>
        <v-row class="d-flex align-start justify-space-around">
          <v-col
            v-for="(club,i) in clubs"
            :key="i"
            cols="6"
            md="3"
            class="pt-6 text-center d-flex flex-column align-center animation-club"
          >
            <img
              alt="..."
              rel="preload"
              :src="club.img"
              class="club-img"
            >
            <div class="club-text">
              <div class="text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8">
                {{ club.name }}
              </div>
              <div class="club-description px-sm-2">
                {{ club.description }}
              </div>
              <div class="d-flex justify-center club-description pt-2">
                <div>
                  <img
                    alt="..."
                    rel="preload"
                    :src="club.iconLink"
                    :width="$vuetify.breakpoint.xs?20:30"
                    class="mr-2"
                  >
                </div>
                <a
                  :href="club.link"
                  target="_blank"
                >{{ club.link }}</a>
              </div>
            </div>
            <LineComponent
              v-if="i===2 && $vuetify.breakpoint.smAndDown"
              id="11"
              color="#6A30F4"
              width="100%"
              position="right"
              top="-20px"
            />
            <LineComponent
              v-if="i===2 && $vuetify.breakpoint.smAndDown"
              id="12"
              color="#FF776E"
              width="30%"
              position="left"
              top="-10px"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="9"
      color="#6A30F4"
      width="100%"
      position="right"
    />
    <LineComponent
      v-if="$vuetify.breakpoint.mdAndUp"
      id="10"
      color="#FF776E"
      width="30%"
      position="left"
      top="10px"
    />
    <!--  Numbers  -->
    <div class="pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8">
      <v-container class="animation-numbers">
        <div class="text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Факультет в цифрах
        </div>
        <v-row>
          <v-col
            v-for="(num,i) in numbers"
            :key="i"
            cols="4"
            :md="i===1?6:3"
            class="text-center"
          >
            <div class="numbers-name">
              {{ num.name }}
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="numbers-description subtitle-color"
              v-html="num.description"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--  podcast  -->
    <LineComponent
      id="13"
      color="#6A30F4"
      width="35%"
      position="right"
    />
    <LineComponent
      id="14"
      color="#FF776E"
      width="70%"
      position="left"
      top="10px"
    />
    <div class="section-background pt-4 pt-md-8 pb-4 pb-md-8 ">
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col class="text-center d-md-none">
            <div class="text-h6 text-sm-h5">
              Видео
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            :class="$vuetify.breakpoint.smAndDown?'text-center':''"
            class="d-flex flex-column justify-space-around order-2 order-md-0"
          >
            <div>
              <div class="pb-8 text-h4 text-xl-h3 d-none d-md-block">
                Видео
              </div>
              <div class="text-subtitle-1 pb-6">
                Мы снимаем полезные и классные видеролики про программирование, насущные вопросы, жизнь в Университете
                ИТМО. А также рассказываем про программы и возможности, которые реализуются у нас на факультете ИКТ.
                Если хотите окунуться в жизнь факультета, то погружайся вместе с ИКТ!
              </div>
            </div>
            <div :class="$vuetify.breakpoint.smAndDown?'mx-auto':''">
              <BaseButton
                href="https://vk.com/video/@ict.itmo"
                text="Открыть"
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center order-1"
          >
            <TheStudentsVideoComponent />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="15"
      color="#FF0281"
      width="35%"
      position="left"
      top="-5px"
    />
    <LineComponent
      id="16"
      color="#18FFBA"
      width="68%"
      position="right"
      top="10px"
    />
    <!--  Partners  -->
    <PartnersComponent />
  </div>
  <div
    v-else
    class="d-flex justify-center fill-height align-center fill-height"
    style="min-height: 75vh"
  >
    <v-progress-circular indeterminate />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    LineComponent: () => import('@/components/LineComponent'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent'),
    HeaderAnimation: () => import('@/components/HeaderAnimation'),
    TheEthicsComponent: () => import('@/components/home/TheEthicsComponent'),
    TheEthicsMobileComponent: () => import('@/components/home/TheEthicsMobileComponent'),
    NewsComponent: () => import('@/components/events/NewsComponent'),
    PartnersComponent: () => import('@/components/home/ThePartnersComponent'),
    BaseHexagonContainer: () => import('@/components/BaseHexagonContainer'),
    TheStudentsVideoComponent: () => import('@/components/students/TheStudentsVideoComponent'),
    BaseButton: () => import('@/components/BaseButton')
  },
  props: { animationHeader: { type: Boolean, default: false } },
  data: () => ({
    clubs: [
      {
        img: require('../assets/images/home/aires.png'),
        name: 'AIRes',
        description: 'Сообщество разработчиков искусственного интеллекта',
        link: 'https://vk.com/airesclub',
        iconLink: require('../assets/images/home/vkMini.svg')
      },
      {
        img: require('../assets/images/home/ftml.png'),
        name: 'FTML',
        description: 'Клуб frontend-разработчиков',
        link: 'https://vk.com/ftmlclub',
        iconLink: require('../assets/images/home/vkMini.svg')
      },
      {
        img: require('../assets/images/home/pm.png'),
        name: 'PM\'s',
        description: 'Объединение специалистов в сфере менеджемента',
        link: 'https://vk.com/pms_itmo',
        iconLink: require('../assets/images/home/vkMini.svg')
      },
      {
        img: require('../assets/images/home/infolab.png'),
        name: 'Info Lab',
        description: 'Проектный клуб разработчиков',
        link: 'https://vk.com/infolab_club',
        iconLink: require('../assets/images/home/vkMini.svg')
      }
    ],
    numbers: [
      { name: '>60', description: 'преподавателей' },
      { name: '~1000', description: 'студентов' },
      { name: '6', description: 'образовательных<br>программ' }
    ],
    scrolledClub: [{ type: false }, { type: false }, { type: false }, { type: false }],
    scrolledNumbers: false,
    scrolledHexLines: false,
    isLoad: false
  }),
  computed: {
    ...mapState('news', ['news', 'article']),
    ...mapState('contacts', ['contacts', 'dean', 'office']),
    persons() {
      let arr = [this.dean].concat(this.office, this.contacts)
      arr[1] = arr.splice(5, 1, arr[1])[0]
      return arr
    }
  },
  watch: {
    scrolledClub: {
      handler: function(values) {
        values.forEach((val, i) => {
          if (val.type) {
            document.querySelectorAll('.animation-club')[i].classList.add('animation--active')
          }
        })
      },
      deep: true
    },
    scrolledNumbers(val) {
      if (val) {
        document.querySelector('.animation-numbers').classList.add('animation--active')
      }
    }
  },
  async mounted() {
    await this.getNews()
    await this.getArticle(1)
    this.isLoad = true
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('news', ['getNews', 'getArticle']),
    handleScroll() {
      let height = document.documentElement.clientHeight
      document.querySelectorAll('.animation-club').forEach((obj, i) => {
        if (!this.scrolledClub[i].type) {
          let bottomClub = obj.getBoundingClientRect().bottom
          this.scrolledClub[i].type = bottomClub < height && bottomClub > 0
        }
      })
      if (!this.scrolledNumbers) {
        let numbers = document.querySelector('.animation-numbers')
        if (numbers) {
          let bottomNumbers = numbers.getBoundingClientRect().bottom
          this.scrolledNumbers = bottomNumbers < height && bottomNumbers > 0
        }
      }
      if (!this.scrolledHexLines) {
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
@import "../styles/colors.scss";

@keyframes FadeIn {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.club-img {
  width: 180px;
  height: 210px;
  @media (max-width: 1904px) {
    width: 160px;
    height: 178px;
  }
  @media (max-width: 1264px) {
    width: 140px;
    height: 160px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 134px;
  }
}

.club-text {
  opacity: 0;
  transform: translateY(20px);
}

.animation--active {
  .club-text {
    animation: 1s FadeIn forwards;
  }

  .numbers-description {
    animation: 1s FadeIn forwards;
  }
}

.club-name {
  color: $news-3;
  font-size: 28px;
  line-height: 26px;
}

.club-description {
  font-size: 20px;
  line-height: 25px;
  padding-top: 0.1em;
  @media (max-width: 1904px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 1264px) {
    font-size: 12px;
    line-height: 17px;
  }
}

.numbers-name {
  font-size: 180px;
  line-height: normal;
  letter-spacing: -0.02em;
  color: $ict-blue-green;
  font-family: "Rubik-SemiBold", sans-serif !important;
  @media (max-width: 1904px) {
    font-size: 120px;
  }
  @media (max-width: 1264px) {
    font-size: 92px;
  }
  @media (max-width: 960px) {
    font-size: 70px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
}

.numbers-description {
  font-size: 24px;
  line-height: 26px;
  opacity: 0;
  transform: translateY(20px);
  max-width: 250px;
  margin: 0 auto;
  @media (max-width: 1264px) {
    font-size: 20px;
    line-height: 22px;
  }
  @media (max-width: 960px) {
    font-size: 15px;
    line-height: 17px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 10px;
  }
}

.hex-section {
  width: 100%;
  background-size: cover;
  background-position: top left;
  margin-top: -15em;
  padding-top: 23em;
  position: relative;
  @media (max-width: 1904px) {
    margin-top: -11em;
    padding-top: 14em;
  }
  @media (max-width: 1280px) {
    margin-top: -6em;
    padding-top: 11em;
  }
  @media (max-width: 960px) {
    background-position: 25% 0;
    margin-top: -4em;
    padding-top: 10em;
  }
  @media (max-width: 600px) {
    background-position: 25% 0;
    margin-top: -4.5em;
    padding-top: 7em;
  }

  .hex-section-line {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    @media (max-width: 960px) {
      left: -8%;
    }
    @media (max-width: 800px) {
      left: -13%;
    }
    @media (max-width: 600px) {
      left: -13%;
    }
    @media (max-width: 480px) {
      left: -25%;
    }
  }
}

.ethics {
  .ethics-desktop {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .ethics-mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
