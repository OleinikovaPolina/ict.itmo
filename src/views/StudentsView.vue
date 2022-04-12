<template>
  <div>
    <!-- header -->
    <v-container>
      <BaseStudentsHackathon
        :text="''"
        :slider-images-names="slider"
        :name="'Хакатоны ICT & Info Lab'"
        :description="`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam
              luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies
              neque proin ac ante suspendisse.`"
      />
    </v-container>
    <!-- competition -->
    <div class="hex-section">
      <v-container>
        <BaseStudentsHackathon
          :hex-array="hexArray"
          title="Конкурс “Горизонт”"
          subtitle="Победители 2021 года"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin."
        />
      </v-container>
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
    <v-container class="pb-4 pb-md-12">
      <v-row class="d-flex align-center justify-center">
        <v-col class="text-center d-md-none">
          <div class="text-h6 text-sm-h5">
            MicroTik - курс по сетевым
            технологиям
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
              MicroTik - курс по сетевым
              технологиям
            </div>
            <div class="text-subtitle-1 pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis
              natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin. Vitae
              blandit tristique aliquam volutpat proin maecenas elit leo. Viverra mi, platea velit facilisis.
            </div>
          </div>
          <div :class="$vuetify.breakpoint.smAndDown?'mx-auto':''">
            <BaseButton link="/" />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center"
        >
          <TheStudentsTwoPhotoComponent />
        </v-col>
      </v-row>
    </v-container>
    <!--  podcast  -->
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
    <div class="section-background pt-4 pt-md-8 pb-4 pb-md-8 ">
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col class="text-center d-md-none">
            <div class="text-h6 text-sm-h5">
              Подкаст ИКТ
              “Вопросы от декана”
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
                Подкаст ИКТ
                “Вопросы от декана”
              </div>
              <div class="text-subtitle-1 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam
                luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in.
                Ultricies
                neque proin ac ante suspendisse.
              </div>
            </div>
            <div :class="$vuetify.breakpoint.smAndDown?'mx-auto':''">
              <BaseButton
                href="https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A"
                text="Открыть YouTube"
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
    <!--  Leaders  -->
    <div class="pt-8 pt-md-12">
      <v-container>
        <div class="text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Сотрудники факультета
        </div>
        <CarouselLeadersComponent :slider="persons" />
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsView',
  components: {
    BaseStudentsHackathon: () => import('@/components/students/BaseStudentsHackathon'),
    LineComponent: () => import('@/components/LineComponent'),
    TheStudentsTwoPhotoComponent: () => import('@/components/students/TheStudentsTwoPhotoComponent'),
    TheStudentsVideoComponent: () => import('@/components/students/TheStudentsVideoComponent'),
    BaseUlBlock: () => import('@/components/BaseUlBlock'),
    BaseButton: () => import('@/components/BaseButton'),
    CarouselLeadersComponent: () => import('@/components/CarouselLeadersComponent')
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
      require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
      require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
      require('../assets/images/delete/unsplash_JjjSPPzzpkU.png')
    ],
    persons: [
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Александрова А.А.',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      }
    ],
    usefulLinks: [
      {
        name: 'Административные', img: require('../assets/images/students/building.svg'),
        links: [
          { name: 'Студенческий офис', href: '#' },
          { name: 'Интернет-портал ИСУ', href: '#' },
          { name: 'Личный кабинет my.itmo', href: '#' }]
      },
      {
        name: 'Информационные', img: require('../assets/images/students/news.svg'),
        links: [
          { name: 'Telegram-канал ИКТ', href: '#' },
          { name: 'Telegram-канал ITMOLNIA', href: '#' },
          { name: 'Сайт ИТМО', href: '#' }]
      },
      {
        name: 'Другое', img: require('../assets/images/students/calendar.svg'),
        links: [
          { name: 'Центр Карьеры', href: '#' },
          { name: 'ITMO.Students', href: '#' },
          { name: 'Telegram-канал ППА', href: '#' }]
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.hex-section {
  width: 100%;
  background-size: cover;
  background-position: top left;
  margin-top: -14em;
  padding-top: 22em;
  @media (max-width: 1904px) {
    margin-top: -11em;
    padding-top: 16em;
  }
  @media (max-width: 1280px) {
    margin-top: -7em;
    padding-top: 14em;
  }
  @media (max-width: 960px) {
    background-position: 25% 0;
    margin-top: -9em;
    padding-top: 12em;
  }
  @media (max-width: 600px) {
    background-position: 25% 0;
    margin-top: -6em;
    padding-top: 8em;
  }
}
</style>
