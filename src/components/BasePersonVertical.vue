<template>
  <v-sheet
    ref="person"
    class="person rounded-pill mx-auto"
    :class="{'animation--active':scrolled}"
    :max-width="$vuetify.breakpoint.sm?250:280"
  >
    <div class="person-img-container rounded-circle">
      <v-img
        width="100%"
        height="100%"
        :src="person.img"
      />
    </div>
    <div class="person-text px-2 px-md-5 pb-12 pb-md-12 text-center">
      <div class="text-h6 pb-1 pt-1 pt-md-3">
        {{ person.name }}
      </div>
      <div>{{ person.position }}</div>
      <div class="d-flex align-center justify-center person-link px-1 pb-md-2">
        <v-icon
          right
          class="mr-1 person-link-icon"
          :small="$vuetify.breakpoint.smAndDown"
        >
          mdi-email-outline
        </v-icon>
        <a
          :title="person.email"
          :href="'mailto: '+person.email"
          class="person-email subtitle-color"
        >
          {{ person.email }}
        </a>
      </div>
    </div>
    <div class="person-pill rounded-b-pill section-background" />
  </v-sheet>
</template>

<script>
export default {
  name: 'BasePersonVertical',
  props: {
    person: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    scrolled: false
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
        let { bottom } = this.$refs.person.$el.getBoundingClientRect()
        this.scrolled = bottom < height && bottom > 0
      }else{
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes personPill {
  0%{
    height: 0;
  }
  100% {
    height: 70%;
  }
}

@keyframes personText {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.person {
  width: 100%;
  position: relative;
  background: rgba(0,0,0,0);

  .text-h6 {
    line-height: normal;
    font-size: 26px !important;
    @media (max-width: 1904px) {
      font-size: 18px !important;
    }
    @media (max-width: 1264px) {
      font-size: 16px !important;
    }
    @media (max-width: 955.5px) {
      font-size: 22px !important;
    }
    @media (max-width: 600px) {
      font-size: 12px !important;
    }
  }

  * {
    line-height: normal;
    font-size: 17px;
    @media (max-width: 1904px) {
      font-size: 14px;
    }
    @media (max-width: 1264px) {
      font-size: 10px;
    }
    @media (max-width: 955.5px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 9.5px;
    }
  }

  .person-img-container {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .person-pill {
    position: absolute;
    width: 100%;
    top:30%;
  }

  .person-text {
    opacity: 0;
    transform: translateY(15px);
  }

  .person-link a div {
    opacity: 0.8;
    transition: all .4s;
  }

  .person-link-icon {
    color: #2DC0C5
  }

  .person-link a div:hover {
    opacity: 1;
  }

  .person-email {
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  &.animation--active{
    .person-pill {
      animation: personPill 1s forwards;
    }

    .person-text {
      animation: personText 1s .7s forwards;
    }
  }
}
</style>