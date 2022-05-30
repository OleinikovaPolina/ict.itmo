<template>
  <div
    class="anim-container students-two-photo"
    :class="{'animation--active':scrolled}"
  >
    <div class="anim-pink rounded-pill" />
    <div class="anim-green rounded-pill" />
    <div
      class="anim-img-1 rounded-pill"
      :style="{backgroundImage:`url(${img1})`}"
    />
    <div
      class="anim-img-2 rounded-circle"
      :style="{backgroundImage:`url(${img2})`}"
    />
    <div class="anim-img-subtitle text-center">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="caption" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStudentsTwoPhotoComponent',
  props: {
    img1: {
      type: String,
      default: ''
    },
    img2: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
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
        let clientHeight = document.documentElement.clientHeight
        let { bottom, height } = document.querySelector('.students-two-photo').getBoundingClientRect()
        this.scrolled = (bottom - height / 2) < clientHeight && bottom > 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes anim-pink {
  0% {
    width: 58%;
  }
  100% {
    width: 87%;
  }
}

@keyframes anim-green {
  0% {
    width: 43.5%
  }
  100% {
    width: 65%;
  }
}

.anim-container {
  width: 300px;
  height: 195px;
  position: relative;

  div {
    position: absolute;
  }

  @media (min-width: 600px) {
    width: 565px;
    height: 368px;
  }
  @media (min-width: 960px) {
    width: 380px;
    height: 247px;
  }
  @media (min-width: 1110px) {
    width: 420px;
    height: 273px;
  }
  @media (min-width: 1264px) {
    width: 505px;
    height: 328px;
  }
  @media (min-width: 1514px) {
    width: 565px;
    height: 368px;
  }
  @media (min-width: 1904px) {
    width: 760px;
    height: 494px;
  }
  @media (min-width: 2204px) {
    width: 860px;
    height: 559px;
  }
}

.anim-pink {
  top: 0;
  left: 0;
  width: 58%;
  height: 66.67%;
  background-color: #FF0281;
}

.anim-green {
  top: 22%;
  left: 35%;
  width: 43.5%;
  height: 66.67%;
  background-color: #18FFBA;
}

.students-two-photo.animation--active {
  .anim-pink {
    animation: anim-pink .7s forwards;
  }

  .anim-green {
    animation: anim-green .7s .25s forwards;
  }
}

.anim-img-1 {
  top: 0;
  left: 0;
  width: 58%;
  height: 66.67%;
  background-size: cover;
}

.anim-img-2 {
  top: 22%;
  right: 21.5%;
  width: 43.5%;
  height: 66.67%;
  background-size: cover;
}

.anim-img-subtitle {
  bottom: 0;
  width: 100%;
  padding-left: 15%;

  p {
    margin: 0 auto;
    font-size: 10px;
    line-height: 10px;
    @media (min-width: 600px) {
      font-size: 16px;
      line-height: 18px;
    }
    @media (min-width: 960px) {
      font-size: 10px;
      line-height: 10px;
    }
    @media (min-width: 1264px) {
      font-size: 14px;
      line-height: 16px;
    }
    @media (min-width: 1904px) {
      font-size: 22px;
      line-height: 24px;
    }
  }
}

</style>