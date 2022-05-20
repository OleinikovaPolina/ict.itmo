<template>
  <div v-if="program">
    <!-- header -->
    <v-container>
      <v-row class="d-flex align-stretch justify-center">
        <v-col
          cols="12"
          md="6"
          lg="5"
          :class="$vuetify.breakpoint.smAndDown?'text-center':''"
          class="d-flex flex-column justify-space-around"
        >
          <div class="pb-4 pb-md-4 text-body-2 breadcrumbs text-start">
            <span>Поступление /</span>
            <router-link
              v-if="program.type===0"
              to="/baccalaureate"
            >
              Бакалавриат
            </router-link>
            <router-link
              v-if="program.type===1"
              to="/magistracy"
            >
              Магистратура
            </router-link>
            <span>/ {{ program.direction }}</span>
          </div>
          <div>
            <div class="pb-4 pb-lg-8 text-h4 text-xl-h3">
              {{ program.direction }}
            </div>
            <div class="text-subtitle-1 pb-6">
              {{ program.description }}
            </div>
          </div>
          <div :class="$vuetify.breakpoint.smAndDown?'mx-auto':''">
            <BaseButton
              link="/"
              text="Перейти на сайт"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="7"
          class="d-flex justify-center"
        >
          <HeaderAnimation :animation-header="animationHeader" />
        </v-col>
      </v-row>
    </v-container>
    <!--  info  -->
    <v-container class="d-flex justify-center">
      <v-col
        cols="12"
        md="10"
        xl="12"
      >
        <v-row
          align="stretch"
          justify="center"
        >
          <v-col
            cols="6"
            md="4"
            xl="3"
            class="px-2 px-lg-4 px-xl-8"
          >
            <div
              style="height: 100%"
            >
              <div
                class="program-info pa-2 py-6 d-flex flex-column align-center justify-center item-background"
                style="height: 100%"
              >
                <div class="program-info-title text-center pb-2 subtitle-color">
                  Вступительные испытания и минимальные баллы&nbsp;ЕГЭ
                </div>
                <div
                  class="subtitle-color"
                  style="width: fit-content"
                >
                  <p
                    v-for="exam in program.exams"
                    :key="exam"
                    class="mb-0"
                  >
                    {{ exam }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="6"
            md="4"
            xl="3"
            class="px-2 px-lg-4 px-xl-8"
          >
            <div
              style="height: 100%"
            >
              <div
                class="program-info px-4 py-6 d-flex flex-column justify-center item-background"
                style="height: 100%"
              >
                <div class="subtitle-color pb-1 pb-md-2 pb-lg-3">
                  Количество мест - <b>{{ program.numbers }}</b>
                </div>
                <div class="subtitle-color pb-1 pb-md-2 pb-lg-3">
                  Проходной балл прошлого года - <b>{{ program.score }}</b>
                </div>
                <div class="subtitle-color pb-1 pb-md-2 pb-lg-3">
                  Язык обучения - <b>{{ program.language }}</b>
                </div>
                <div class="subtitle-color">
                  Форма обучения - <b>{{ program.form }}</b>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="8"
            md="4"
            xl="3"
            class="px-2 px-lg-4 px-xl-8"
          >
            <div
              style="height: 100%"
            >
              <div
                class="subtitle-color program-info px-6 py-4 d-flex flex-column justify-center item-background"
                style="height: 100%"
              >
                <div class="text-h6 text-xl-h5 text-center pb-1 pb-md-3">
                  Полезные ссылки
                </div>
                <div
                  style="width: fit-content"
                  class="d-flex flex-column pl-xl-4"
                >
                  <a
                    v-for="link in program.links"
                    :key="link.link"
                    class="link-arrow mb-1 mb-md-2 mr-0"
                    :href="link.link"
                    target="_blank"
                  >{{ link.name }}</a>
                  <a
                    class="link-arrow mb-1 mb-md-2 mr-0"
                    href="https://abit.itmo.ru/page/66"
                    target="_blank"
                  >Правила приема 2022 </a>
                  <a
                    class="link-arrow mr-0"
                    :href="`https://abit.itmo.ru/${program.type===0?'bachelor':'master'}#scholarship`"
                    target="_blank"
                  >Стипендии </a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <!--  directions  -->
    <v-container class="directions pb-md-16">
      <div class="d-flex pb-6">
        <v-col
          cols="3"
          md="1"
        >
          <v-img
            width="100"
            :src="programAreasImg"
          />
        </v-col>
        <v-col
          cols="9"
          md="6"
        >
          <div class="text-h6 text-xl-h4">
            Основные направления профессиональной
            деятельности выпускников:
          </div>
        </v-col>
      </div>
      <div class="d-flex text-subtitle-1 flex-wrap">
        <v-col
          v-for="n in 2"
          :key="n"
          cols="12"
          md="6"
          class="py-0"
        >
          <ul class="ict-ul">
            <li
              v-for="area in program.areas[n-1]"
              :key="n+area"
            >
              {{ area }}
            </li>
          </ul>
        </v-col>
      </div>
    </v-container>
    <!-- Дисциплины -->
    <div class="hex-section">
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
      <v-container>
        <div
          class=" text-center mx-auto text-h5 text-sm-h4 text-xl-h3"
          :style="{width:$vuetify.breakpoint.smAndDown?'275px':'450px'}"
        >
          Дисциплины
        </div>
        <BaseHexagonContainer
          :link="'/disciplines/'+program.code"
          :hex-array="hexArray"
        />
      </v-container>
    </div>
    <LineComponent
      id="1"
      color="#FF776E"
      width="55%"
      position="left"
      top="5px"
    />
    <LineComponent
      id="2"
      color="#FF0281"
      width="65%"
      position="right"
      top="15px"
    />
    <!--  Контактные лица  -->
    <v-container class="py-8 py-md-16">
      <v-row justify="center">
        <v-col
          v-for="(person,i) in program.contacts"
          :key="i"
          cols="12"
          sm="6"
          xl="4"
        >
          <BasePerson
            :person="person"
            :small-person="true"
          />
        </v-col>
      </v-row>
    </v-container>
    <LineComponent
      id="3"
      color="#6A30F4"
      width="35%"
      position="right"
    />
    <LineComponent
      id="4"
      color="#18FFBA"
      width="75%"
      position="left"
      top="15px"
    />
    <!-- Где работают выпускники ИКТ -->
    <div class="section-background job">
      <v-container class="py-10 py-md-12 py-xl-16">
        <div class="text-center mx-auto pb-6 pb-md-8 text-h6 text-sm-h4 text-xl-h3">
          Где работают выпускники ИКТ
        </div>
        <v-row justify="center">
          <v-col
            cols="12"
            md="11"
          >
            <v-row
              justify="center"
              align="stretch"
            >
              <v-col
                v-for="(item,i) in usefulLinks"
                :key="i"
                cols="6"
                md="4"
              >
                <div
                  class="pa-md-4"
                  style="height: 100%;"
                >
                  <BaseUlBlock
                    :item="item"
                    :background="'app-background'"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="5"
      color="#FF776E"
      width="55%"
      position="left"
    />
    <!--  Leaders  -->
    <div class="pt-8 pt-md-12">
      <v-container>
        <div class="text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Преподаватели
        </div>
        <CarouselLeadersComponent
          v-if="program.teachers.length"
          :slider="program.teachers"
        />
      </v-container>
    </div>
  </div>
  <BaseNotFound v-else />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProgramView',
  components: {
    BaseNotFound: () => import('@/components/app/BaseNotFound'),
    BasePerson: () => import('@/components/BasePerson'),
    LineComponent: () => import('@/components/LineComponent'),
    BaseUlBlock: () => import('@/components/BaseUlBlock'),
    BaseButton: () => import('@/components/BaseButton'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent'),
    HeaderAnimation: () => import('@/components/HeaderAnimation'),
    BaseHexagonContainer: () => import('@/components/BaseHexagonContainer')
  },
  props: { animationHeader: { type: Boolean, default: false } },
  data: () => ({
    scrolledHexLines: false,
    hexArray: [
      { img: require('@/assets/images/home/Vector.svg'), text: 'Архитектура баз данных' },
      { img: require('@/assets/images/home/Vector1.svg'), text: 'Облачные технологии' },
      { img: require('@/assets/images/home/Vector3.svg'), text: 'Backend разработка' },
      { img: require('@/assets/images/home/Vector2.svg'), text: 'Frontend разработка' },
      { img: require('@/assets/images/home/Vector4.svg'), text: 'Управление проектами' },
      { img: require('@/assets/images/home/Vector5.svg'), text: 'Геймификация' }
    ],
    slider: [
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') },
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') },
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') }
    ],
    usefulLinks: [
      {
        name: 'Инвестиционный</br>и банковский сектор',
        img: require('@/assets/images/program/job/Vector.svg'),
        links: [
          { name: 'Сбербанк Технологии' },
          { name: 'Intercontinental Exchange' }]
      },
      {
        name: 'Информационная</br>безопасность',
        img: require('@/assets/images/program/job/Vector1.svg'),
        links: [
          { name: 'Dr.Web' },
          { name: 'Avast Software' },
          { name: 'Диджитал Секьюрити' }]
      },
      {
        name: 'Компании, занимающиеся</br>автоматизацией бизнеса',
        img: require('@/assets/images/program/job/Vector2.svg'),
        links: [
          { name: 'T-Systems' },
          { name: 'Luxoft' },
          { name: 'KORUS Consulting' },
          { name: 'Горизонты Роста' }]
      },
      {
        name: 'Ведущие международные</br>IT‑компании',
        img: require('@/assets/images/program/job/Vector3.svg'),
        links: [
          { name: 'Microsoft' },
          { name: 'EMC Corporation' },
          { name: 'Интермедиа' }]
      },
      {
        name: 'Телекоммуникационные</br>компании',
        img: require('@/assets/images/program/job/Vector4.svg'),
        links: [
          { name: 'Alcatel-Lucent' },
          { name: 'Мегафон' },
          { name: 'GS Group' }]
      }
    ]
  }),
  computed: {
    ...mapState('app', ['theme']),
    program() {
      return this.$store.getters['programs/program'](this.$route.params.id)
    },
    programAreasImg() {
      return this.theme === 'dark' ? require('../assets/images/program/Vector.svg') : require('../assets/images/program/VectorLight.svg')
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
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
  width: 100%;
  background-size: cover;
  background-position: top left;
  margin-top: -10em;
  padding-top: 21em;
  position: relative;
  @media (max-width: 1904px) {
    margin-top: -10em;
    padding-top: 18em;
  }
  @media (max-width: 1600px) {
    margin-top: -8em;
    padding-top: 14em;
  }
  @media (max-width: 1280px) {
    margin-top: -7.5em;
    padding-top: 12em;
  }
  @media (max-width: 960px) {
    background-position: 25% 0;
    margin-top: -4em;
    padding-top: 10em;
  }
  @media (max-width: 600px) {
    background-position: 25% 0;
    margin-top: -4em;
    padding-top: 7em;
  }

  .hex-section-line {
    position: absolute;
    top: 0;
    left: 0;
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

.job * {
  font-size: 19px;
  line-height: normal;
  @media (max-width: 1904px) {
    font-size: 15px;
  }
  @media (max-width: 1264px) {
    font-size: 10px;
  }
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
}

.program-info {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 30px;

  * {
    line-height: normal;
    font-size: 24px;
    @media (max-width: 1904px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .program-info-title {
    font-family: "Rubik-Medium", sans-serif !important;
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 1904px) {
      font-size: 20px;
    }
    @media (max-width: 1440px) {
      font-size: 19px;
    }
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
}

.directions .text-h6, .program-info .text-h6 {
  @media (min-width: 1904px) {
    font-size: 28px !important;
  }
  @media (max-width: 600px) {
    font-size: 15px !important;
    line-height: normal;
  }
}
</style>