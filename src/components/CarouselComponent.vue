<template>
  <div
    class="carousel-container"
    :class="columns===1?'ma-0':''"
  >
    <v-carousel
      ref="carousel"
      :show-arrows="false"
      :hide-delimiters="true"
      height="auto"
    >
      <template v-for="index in slider.length">
        <v-carousel-item
          v-if="index % columns === 1 || columns === 1"
          :key="index"
          eager
        >
          <v-row
            class="align-stretch carousel-component"
            justify="center"
          >
            <template v-for="i in columns">
              <template v-if="(index + i-2) < slider.length">
                <slot
                  :item="slider[index+i-2]"
                  :index="i"
                  :index2="index+i-2"
                  name="item"
                />
                <slot
                  :index="index+i-2"
                  name="index"
                />
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
    <slot name="subtitle" />
    <div
      v-if="slider.length"
      class="d-flex justify-center align-center pt-6 pt-lg-3"
    >
      <button
        class="btn-nav mr-3 d-flex justify-center align-center"
        aria-label="prev"
        @click="prev"
      >
        <span style="width: 50%;height: 50%;padding-right: 2.5px;">
          <v-img
            style="transform: rotate(180deg)"
            height="100%"
            width="100%"
            contain
            position="center"
            src="../assets/images/arrow.svg"
          />
        </span>
      </button>
      <v-btn
        v-for="n in Math.ceil(slider.length/columns)"
        :key="n"
        x-small
        icon
        class="btn-nav-circle"
        :class="(n-1)===activeIndex?'is-active':''"
        aria-label="delimiter"
        @click="clickDelimiters(n-1)"
      >
        <v-icon x-small>
          mdi-circle
        </v-icon>
      </v-btn>
      <button
        class="btn-nav ml-3 d-flex justify-center align-center"
        aria-label="next"
        @click="next"
      >
        <span style="width: 50%;height: 50%;padding-left: 2.5px;">
          <v-img
            height="100%"
            width="100%"
            contain
            position="center"
            src="../assets/images/arrow.svg"
          />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    columns: {
      type: Number,
      default: 0
    },
    slider: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    activeIndex: 0
  }),
  mounted() {
    this.$watch(
      () => {
        return this.$refs.carousel.internalIndex
      },
      (val) => {
        this.activeIndex = val
      }
    )
  },
  methods: {
    next() {
      this.$refs['carousel'].next()
    },
    prev() {
      this.$refs['carousel'].prev()
    },
    clickDelimiters(i) {
      const c = i - this.$refs['carousel'].internalIndex
      if (c > 0) {
        for (let j = 0; j < c; j++) {
          this.$refs['carousel'].next()
        }
      }
      if (c < 0) {
        for (let j = 0; j < Math.abs(c); j++) {
          this.$refs['carousel'].prev()
        }
      }
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

.btn-nav.is-active {
  background-color: #1E7F83;
}

.btn-nav-circle {
  color: $ict-blue-green !important;
}

.btn-nav-circle.is-active {
  color: #1E7F83 !important;
}

.carousel-container {
  margin: -0.5em;
  @media (max-width: 960px) {
    margin: -1em;
  }
  @media (max-width: 600px) {
    margin: -0.5em;
  }
}
</style>