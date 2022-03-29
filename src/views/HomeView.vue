<template>
  <div>
    <!-- header -->
    <v-container>
      <v-row class="d-flex align-center justify-center">
        <v-col
          cols="12"
          sm="6"
          :class="$vuetify.breakpoint.xs?'text-center':''"
        >
          <div class="pb-6 pb-md-10 text-h4 text-sm-h3 text-md-h2">
            Факультет ИКТ
          </div>
          <div class="text-subtitle-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam
            luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies
            neque proin ac ante suspendisse.
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-center"
        >
          <BaseHeaderAnimation />
        </v-col>
      </v-row>
    </v-container>
    <!-- What can you learn at the Faculty of ICT -->
    <div class="hex-section">
      <v-container>
        <div
          class=" text-center mx-auto text-h6 text-sm-h4"
          :style="{width:$vuetify.breakpoint.xs?'275px':'450px'}"
        >
          Что вы сможете изучить на факультете ИКТ
        </div>
        <BaseHexagonContainer
          :hex-array="hexArray"
          header="Что вы сможете изучить на факультете ИКТ "
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
    <NewsComponent />
    <!--  Leaders  -->
    <div class="section-background pt-4 pb-4 pb-md-8 mt-4 mt-md-4">
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
      <v-container>
        <div class="text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4">
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
    <!--  Ethics  -->
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
    <div class="section-background pt-4 pb-10">
      <v-container>
        <div class="text-center mx-auto pb-6 text-h6 text-sm-h4">
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
            <v-img
              :src="club.img"
              class="club-img"
              contain
            />
            <div class="club-text">
              <div class="text-h6 club-name">
                {{ club.name }}
              </div>
              <div class="club-description px-sm-6">
                {{ club.description }}
              </div>
              <div class="d-flex justify-center club-description pt-2">
                <div>
                  <v-img
                    :src="club.iconLink"
                    :width="$vuetify.breakpoint.xs?20:30"
                    contain
                    class="mr-2"
                  />
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
    <div class="pt-2 pt-sm-6 pb-sm-10">
      <v-container class="animation-numbers">
        <div class="text-center mx-auto pb-sm-6 text-h6 text-sm-h4">
          Факультет в цифрах
        </div>
        <v-row>
          <v-col
            v-for="(num,i) in numbers"
            :key="i"
            cols="3"
            class="text-center"
          >
            <div class="numbers-name">
              {{ num.name }}
            </div>
            <div class="numbers-description subtitle-color">
              {{ num.description }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--  Partners  -->
    <PartnersComponent />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    LineComponent: () => import('@/components/LineComponent'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent'),
    BaseHeaderAnimation: () => import('@/components/BaseHeaderAnimation'),
    TheEthicsComponent: () => import('@/components/TheEthicsComponent'),
    TheEthicsMobileComponent: () => import('@/components/TheEthicsMobileComponent'),
    NewsComponent: () => import('@/components/NewsComponent'),
    PartnersComponent: () => import('@/components/ThePartnersComponent'),
    BaseHexagonContainer: () => import('@/components/BaseHexagonContainer')
  },
  data: () => ({
    hexArray: [
      { img: require('../assets/images/Vector.svg'), text: 'Архитектура баз данных' },
      { img: require('../assets/images/Vector1.svg'), text: 'Облачные технологии' },
      { img: require('../assets/images/Vector3.svg'), text: 'Backend разработка' },
      { img: require('../assets/images/Vector2.svg'), text: 'Frontend разработка' },
      { img: require('../assets/images/Vector4.svg'), text: 'Управление проектами' },
      { img: require('../assets/images/Vector5.svg'), text: 'Геймификация' }
    ],
    clubs: [
      {
        img: require('../assets/images/aires.png'),
        name: 'AIRes',
        description: 'Сообщество разработчиков искусственного интеллекта',
        link: 'https://vk.com/airesclub',
        iconLink: require('../assets/images/vkMini.svg')
      },
      {
        img: require('../assets/images/ftml.png'),
        name: 'FTML',
        description: 'Клуб frontend-разработчиков',
        link: 'https://vk.com/ftmlclub',
        iconLink: require('../assets/images/vkMini.svg')
      },
      {
        img: require('../assets/images/pm.png'),
        name: 'PM\'s',
        description: 'Объединение специалистов в сфере менеджемента',
        link: 'https://vk.com/pms_itmo',
        iconLink: require('../assets/images/vkMini.svg')
      },
      {
        img: require('../assets/images/infolab.png'),
        name: 'Info Lab',
        description: 'Проектный клуб разработчиков',
        link: 'https://vk.com/infolab_club',
        iconLink: require('../assets/images/vkMini.svg')
      }
    ],
    numbers: [
      { name: '150', description: 'преподавателей и сотрудников' },
      { name: '80', description: 'кандидатов и докторов наук' },
      { name: '450', description: 'обучающихся в бакалавриате' },
      { name: '250', description: 'обучающихся в магистратуре' }
    ],
    persons: [
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      }
    ],
    scrolledClub: [{ type: false }, { type: false }, { type: false }, { type: false }],
    scrolledNumbers: false
  }),
  watch: {
    scrolledClub: {
      handler: function(vals) {
        vals.forEach((val, i) => {
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
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let height = document.documentElement.clientHeight
      document.querySelectorAll('.animation-club').forEach((obj, i) => {
        if (!this.scrolledClub[i].type) {
          let bottomClub = obj.getBoundingClientRect().bottom
          this.scrolledClub[i].type = bottomClub < height && bottomClub > 0
        }
      })
      if (!this.scrolledNumbers) {
        let bottomNumbers = document.querySelector('.animation-numbers').getBoundingClientRect().bottom
        this.scrolledNumbers = bottomNumbers < height && bottomNumbers > 0
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
  width: 160px;
  height: 178px;
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
  padding-top: 1em;
  @media (max-width: 600px) {
    padding-top: 0.5em
  }
}

.club-description {
  font-size: 16px;
  line-height: 19px;
  padding-top: 0.1em;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 17px;
  }
}

.numbers-name {
  font-size: 144px;
  line-height: 150px;
  letter-spacing: -0.02em;
  color: $ict-blue-green;
  font-family: "Rubik-SemiBold", sans-serif !important;
  @media (max-width: 1264px) {
    font-size: 92px;
    line-height: 100px;
  }
  @media (max-width: 960px) {
    font-size: 70px;
    line-height: 80px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 50px;
  }
}

.numbers-description {
  font-size: 24px;
  line-height: 26px;
  opacity: 0;
  transform: translateY(20px);
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
  margin-top: -7.5em;
  padding-top: 11em;
  @media (max-width: 768px) {
    background-position: 25% 0;
    margin-top: -7em;
    padding-top: 7em;
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