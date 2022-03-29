<template>
  <div>
    <vueper-slides
      ref="vueperslides"
      class="no-shadow"
      :infinite="true"
      :touchable="false"
      :arrows="false"
      :bullets="false"
      :duration="300"
      :gap="1"
      :fixed-height="$vuetify.breakpoint.xl?'500px':$vuetify.breakpoint.lg?'400px':$vuetify.breakpoint.md?'320px':$vuetify.breakpoint.sm?'420px':'220px'"
      :visible-slides="$vuetify.breakpoint.mdAndUp?5:3"
    >
      <vueper-slide
        v-for="(person,i) in slider"
        :key="i"
        style="max-width: 300px; cursor: pointer"
        @click.native="clickDelimiters(i)"
      >
        <template #content>
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
            <div class="person-text pt-1 pt-md-2 text-center">
              <div class="text-h6">
                {{ person.name }}
              </div>
              <div>{{ person.position }}</div>
              <a
                :href="'mailto: '+person.email"
                class="person-email"
              >
                {{ person.email }}
              </a>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <div
      class="d-flex justify-center align-center"
      style="margin-top: -2.5em;"
    >
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
        v-for="n in slider.length"
        :key="n"
        x-small
        icon
        class="btn-nav-circle"
        :class="(n-1)===activeIndex?'is-active':''"
        @click="clickDelimiters(n-1)"
      >
        <v-icon x-small>
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'CarouselLeadersComponent',
  components: { VueperSlides, VueperSlide },
  props: {
    slider: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    activeIndex: 0
  }),
  methods: {
    next() {
      this.$refs.vueperslides.next()
      this.activeIndex = this.activeIndex < this.slider.length - 1 ? this.activeIndex + 1 : 0
    },
    prev() {
      this.$refs.vueperslides.previous()
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.slider.length - 1
    },
    clickDelimiters(i) {
      this.$refs.vueperslides.goToSlide(i)
      this.activeIndex = i
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

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

.vueperslide {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  .text-h6 {
    line-height: normal;
    font-size: 20px !important;
    @media (max-width: 1264px) {
      font-size: 18px !important;
    }
    @media (max-width: 960px) {
      font-size: 20px !important;
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
    font-size: 16px;
    @media (max-width: 1264px) {
      font-size: 14px !important;
    }
    @media (max-width: 960px) {
      font-size: 16px !important;
    }
    @media (max-width: 600px) {
      font-size: 10px !important;
    }
  }

  .person-email {
    display: none;
  }

  .person-img {
    width: 50%;
  }
}

.vueperslide--active {
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
  }

  .person-img {
    width: 100%;
  }

  .person-text {
    padding: 0 0.5em;
  }
}
</style>