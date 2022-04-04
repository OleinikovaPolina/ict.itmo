<template>
  <div>
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
          <div class="pb-4 pb-md-0 text-body-2 breadcrumbs text-start">
            <span>Поступление /</span>
            <router-link
              to="/baccalaureate"
            >
              Бакалавриат
            </router-link>
            <span>/ Прикладная информатика</span>
          </div>
          <div>
            <div class="pb-8 text-h4 text-xl-h3">
              Прикладная информатика
            </div>
            <div class="text-subtitle-1 pb-6">
              Образовательная программа направлена на подготовку специалистов широкого профиля, владеющих технологиями
              разработки мобильных и веб-приложений. Обучение включает в себя активную самостоятельную,
              научно-исследовательскую и проектную работу.
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
          <BaseHeaderAnimation />
        </v-col>
      </v-row>
    </v-container>
    <!--  info  -->
    <v-container class="d-flex justify-center">
      <v-col
        cols="12"
        md="10"
      >
        <v-row
          align="stretch"
          justify="center"
        >
          <v-col
            cols="6"
            md="4"
          >
            <div
              class="px-md-4"
              style="height: 100%"
            >
              <div
                class="program-info pa-2 py-6 d-flex flex-column align-center justify-center item-background"
                style="height: 100%"
              >
                <div class="text-h6 text-xl-h5 text-center pb-2 subtitle-color">
                  Вступительные испытания
                  и минимальные баллы ЕГЭ
                </div>
                <div
                  class="subtitle-color"
                  style="width: fit-content"
                >
                  Математика - 60<br>
                  Информатика - 60<br>
                  Русский язык - 60
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="6"
            md="4"
          >
            <div
              class="px-md-4"
              style="height: 100%"
            >
              <div
                class="program-info px-4 py-6 d-flex flex-column justify-center item-background"
                style="height: 100%"
              >
                <div class="subtitle-color pb-3">
                  Количество мест - <b>30</b>
                </div>
                <div class="subtitle-color pb-3">
                  Проходной балл прошлого года - <b>300</b>
                </div>
                <div class="subtitle-color pb-3">
                  Язык обучения - <b>русский</b>
                </div>
                <div class="subtitle-color pb-3">
                  Форма обучения - <b>очная</b>
                </div>
              </div>
            </div>
          </v-col>
          <v-col
            cols="8"
            md="4"
          >
            <div
              class="px-md-4"
              style="height: 100%"
            >
              <div
                class="subtitle-color program-info px-6 py-4 d-flex flex-column justify-center item-background"
                style="height: 100%"
              >
                <div class="text-h6 text-xl-h5 text-center pb-3">
                  Полезные ссылки
                </div>
                <a
                  class="link-arrow pb-3"
                  href="#"
                >Страница программы </a>
                <a
                  class="link-arrow pb-3"
                  href="#"
                >Правила приема 2022 </a>
                <a
                  class="link-arrow"
                  href="#"
                >Стипендии </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <!--  directions  -->
    <v-container class="directions">
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
            <li>телекоммуникационные системы;</li>
            <li>сети связи и системы коммутации;</li>
            <li>интеллектуальные сети и системы связи;</li>
            <li>системы централизованной обработки данных в инфокоммуникационных сетях;</li>
            <li>
              мультимедийные технологии;
            </li>
          </ul>
        </v-col>
      </div>
    </v-container>
    <!-- Дисциплины -->
    <div class="hex-section">
      <v-container>
        <div
          class=" text-center mx-auto text-h5 text-sm-h4 text-xl-h3"
          :style="{width: $vuetify.breakpoint.smAndDown?'275px':'450px'}"
        >
          Дисциплины
        </div>
        <BaseHexagonContainer
          :link="'/disciplines/'+1"
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
          v-for="(person,i) in contactPersons"
          :key="i"
          cols="12"
          sm="6"
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
      <v-container class="py-6 py-md-12">
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
                  <BaseUlBlock :item="item" background="app-background"/>
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
        <CarouselLeadersComponent :slider="persons" />
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProgramView',
  components: {
    BasePerson: () => import('@/components/BasePerson'),
    LineComponent: () => import('@/components/LineComponent'),
    BaseUlBlock: () => import('@/components/BaseUlBlock'),
    BaseButton: () => import('@/components/BaseButton'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent'),
    BaseHeaderAnimation: () => import('@/components/BaseHeaderAnimation'),
    BaseHexagonContainer: () => import('@/components/BaseHexagonContainer')
  },
  data: () => ({
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
    persons: [
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position2: 'Инфокоммуникационые системы и технологии, Проектная документация'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position2: 'Заместитель декана факультета'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position2: 'Заместитель декана факультета'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position2: 'Заместитель декана факультета'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position2: 'Заместитель декана факультета'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position2: 'Заместитель декана факультета'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position2: 'Заместитель декана факультета'
      }
    ],
    usefulLinks: [
      {
        name: 'Инвестиционный и банковский сектор', img: require('../assets/images/students/building.svg'),
        links: [
          { name: 'Студенческий офис' },
          { name: 'Интернет-портал ИСУ' },
          { name: 'Личный кабинет my.itmo' }]
      },
      {
        name: 'Информационные', img: require('../assets/images/students/news.svg'),
        links: [
          { name: 'Telegram-канал ИКТ' },
          { name: 'Telegram-канал ITMOLNIA' },
          { name: 'Сайт ИТМО' }]
      },
      {
        name: 'Другое', img: require('../assets/images/students/calendar.svg'),
        links: [
          { name: 'Центр Карьеры' },
          { name: 'ITMO.Students' },
          { name: 'Telegram-канал ППА' }]
      },
      {
        name: 'Административные', img: require('../assets/images/students/building.svg'),
        links: [
          { name: 'Студенческий офис' },
          { name: 'Интернет-портал ИСУ' },
          { name: 'Личный кабинет my.itmo' }]
      },
      {
        name: 'Информационные', img: require('../assets/images/students/news.svg'),
        links: [
          { name: 'Telegram-канал ИКТ' },
          { name: 'Telegram-канал ITMOLNIA' },
          { name: 'Сайт ИТМО' }]
      }
    ],
    contactPersons: [
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        position: 'Дергунская Светлана Александровна',
        name: 'Контактное лицо',
        email: 'sderkunskaia@itmo.ru',
        tel: '+7 920-457-85-96'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        position: 'Ватьян Александра Сергеевна',
        name: 'Руководитель программы',
        email: 'asvatian@itmo.ru',
        tel: '+7 920-457-85-96'
      }
    ]
  }),
  computed: {
    ...mapState('app', ['theme']),
    programAreasImg() {
      return this.theme === 'dark' ? require('../assets/images/program/Vector.svg') : require('../assets/images/program/VectorLight.svg')
    }
  }
}
</script>

<style scoped lang="scss">
.hex-section {
  width: 100%;
  background-size: cover;
  background-position: top left;
  margin-top: -4em;
  padding-top: 11em;
  @media (max-width: 600px) {
    background-position: 25% 0;
    margin-top: -4em;
    padding-top: 7em;
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
    font-size: 20px;
    @media (max-width: 1904px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
}

.directions .text-h6, .program-info .text-h6 {
  @media (max-width: 600px) {
    font-size: 16px !important;
    line-height: normal;
  }
}
</style>