<template>
  <div
    ref="persons"
    :class="{'animation--active':scrolled}"
  >
    <VueSlickCarousel
      ref="carousel"
      v-bind="settings"
      :style="{height: $vuetify.breakpoint.xl?'570px':$vuetify.breakpoint.lg?'410px':$vuetify.breakpoint.md?'310px':$vuetify.breakpoint.sm?'460px':'240px'}"
      :slides-to-show="$vuetify.breakpoint.mdAndUp?5:3"
      @beforeChange="(oldSlideIndex, newSlideIndex)=>changeActiveIndex(newSlideIndex)"
      @afterChange="canChange=true"
    >
      <div
        v-for="(person,i) in slider"
        :key="i"
        class="person-container mx-auto"
        :style="{maxWidth: $vuetify.breakpoint.mdAndUp?'auto':$vuetify.breakpoint.xs?'150px':'250px'}"
      >
        <div class="person">
          <div class="person-img mx-auto">
            <v-img
              width="100%"
              height="100%"
              class="rounded-circle"
              :src="person.img||require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png')"
            />
          </div>
          <div class="person-text pt-1 pt-md-2 px-1 px-sm-4 text-center">
            <div class="text-h6 pb-1">
              {{ person.name }}
            </div>
            <div>{{ person.position }}</div>
            <div class="person-position-2">
              {{ person.position2 }}
            </div>
            <a
              :title="person.email"
              :href="'mailto: '+person.email"
              class="person-email px-1 px-md-2"
            >
              {{ person.email }}
            </a>
          </div>
          <div class="person-pill rounded-b-pill" />
        </div>
      </div>
    </VueSlickCarousel>
    <div
      class="d-flex justify-center align-center mt-2 mt-lg-4 mt-xl-8"
    >
      <button
        class="btn-nav mr-3 d-flex justify-center align-center"
        :disabled="!canChange"
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
        v-for="n in slider.length"
        :key="n"
        x-small
        icon
        class="btn-nav-circle"
        :class="((n-1)===activeIndex?'is-active':'')+($vuetify.breakpoint.xl?' mx-1':' ')"
        :disabled="!canChange"
        @click="clickDelimiters(n-1)"
      >
        <v-icon :x-small="$vuetify.breakpoint.lgAndDown">
          mdi-circle
        </v-icon>
      </v-btn>
      <button
        class="btn-nav ml-3"
        :disabled="!canChange"
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
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'CarouselLeadersComponent',
  components: { VueSlickCarousel },
  props: {
    slider: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    settings: {
      'centerMode': true,
      'focusOnSelect': true,
      'infinite': true,
      'centerPadding': '0px',
      'speed': 500,
      'arrows': false
    },
    activeIndex: 0,
    scrolled: false,
    canChange: true
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.scrolled) {
        let height = document.documentElement.clientHeight
        let { bottom } = this.$refs.persons.getBoundingClientRect()
        this.scrolled = bottom - 100 < height && bottom > 0
      } else {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    next() {
      this.$refs.carousel.next()
      this.activeIndex = this.activeIndex < this.slider.length - 1 ? this.activeIndex + 1 : 0
    },
    prev() {
      this.$refs.carousel.prev()
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.slider.length - 1
    },
    clickDelimiters(i) {
      this.$refs.carousel.goTo(i)
      this.activeIndex = i
    },
    changeActiveIndex(i) {
      this.activeIndex = i
      this.canChange = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

@keyframes personPill {
  0% {
    height: 0;
  }
  100% {
    height: 72%;
  }
}

@keyframes personText {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-application {
  .btn-nav {
    background-color: $ict-blue-green;
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

  .btn-nav-circle .v-icon {
    color: $ict-blue-green !important;
  }

  .btn-nav-circle.is-active .v-icon {
    color: #1E7F83 !important;
  }
}

.person-container {
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;

  .text-h6 {
    line-height: normal;
    font-size: 30px !important;
    @media (max-width: 1904px) {
      font-size: 20px !important;
    }
    @media (max-width: 1264px) {
      font-size: 18px !important;
    }
    @media (max-width: 955.5px) {
      font-size: 24px !important;
    }
    @media (max-width: 600px) {
      font-size: 12px !important;
    }
  }

  a {
    opacity: 0.8;
    color: white !important;
    transition: all .4s;
    text-decoration: none;
  }

  a:hover {
    opacity: 1;
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  * {
    line-height: normal;
    font-size: 19px;
    @media (max-width: 1904px) {
      font-size: 13px;
    }
    @media (max-width: 1264px) {
      font-size: 10px;
    }
    @media (max-width: 955.5px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 8px;
    }
  }

  .person-email, .person-position-2 {
    display: none;
  }

  .person-img {
    width: 50%;
  }
}

.slick-slide.slick-center {
  justify-content: start;

  .person {
    height: 100%;
    transition: background-color .3s;
    position: relative;

    * {
      color: white;
      line-height: normal;
      font-size: 21px;
      @media (max-width: 1904px) {
        font-size: 15px;
      }
      @media (max-width: 1264px) {
        font-size: 12px;
      }
      @media (max-width: 955.5px) {
        font-size: 18px;
      }
      @media (max-width: 600px) {
        font-size: 10px;
      }
    }

    .person-pill {
      background-color: #00A1FF;
      position: absolute;
      z-index: 0;
      width: 100%;
      top: 28%;
    }

    .person-text {
      position: relative;
      z-index: 1;
      opacity: 0;
      transform: translateY(15px);
    }

    .person-email {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .person-position-2 {
      display: block;
    }

    .person-img {
      width: 100%;
      position: relative;
      z-index: 1;
    }
  }
}

.animation--active .slick-slide.slick-center {
  .person-pill {
    animation: personPill 1s forwards;
  }

  .person-text {
    animation: personText .6s .6s forwards;
  }
}
</style>