<template>
  <div>
    <VueSlickCarousel
      ref="carousel"
      v-bind="settings"
      :style="{height: $vuetify.breakpoint.xl?'570px':$vuetify.breakpoint.lg?'410px':$vuetify.breakpoint.md?'310px':$vuetify.breakpoint.sm?'460px':'240px'}"
      :slides-to-show="$vuetify.breakpoint.mdAndUp?5:3"
      @beforeChange="(oldSlideIndex, newSlideIndex)=>{changeActiveIndex(newSlideIndex)}"
    >
      <div
        v-for="(person,i) in slider"
        :key="i"
        class="person-container mx-auto"
        :style="{maxWidth: $vuetify.breakpoint.mdAndUp?'auto':$vuetify.breakpoint.xs?'150px':'250px'}"
      >
        <div
          class="person"
        >
          <div class="person-img mx-auto">
            <v-img
              width="100%"
              height="100%"
              class="rounded-circle"
              :src="person.img"
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
              :href="'mailto: '+person.email"
              class="person-email px-1 px-md-2"
            >
              {{ person.email }}
            </a>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div
      class="d-flex justify-center align-center mt-2 mt-lg-4 mt-xl-8"
    >
      <button
        class="btn-nav mr-3 d-flex justify-center align-center"
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
        @click="clickDelimiters(n-1)"
      >
        <v-icon :x-small="$vuetify.breakpoint.lgAndDown">
          mdi-circle
        </v-icon>
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
    activeIndex: 0
  }),
  methods: {
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

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

.btn-nav-circle {
  color: $ict-blue-green !important;
}

.btn-nav-circle.is-active {
  color: #1E7F83 !important;
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
    font-size: 21px;
    @media (max-width: 1904px) {
      font-size: 15px ;
    }
    @media (max-width: 1264px) {
      font-size: 12px ;
    }
    @media (max-width: 955.5px) {
      font-size: 18px ;
    }
    @media (max-width: 600px) {
      font-size: 10px ;
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
    background-color: #00A1FF;
    border-radius: 9999px;
  }

  * {
    color: white;
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
  }
}
</style>