<template>
  <div class="anim-container">
    <div class="anim-circle-1 rounded-circle" />
    <div class="anim-circle-2 rounded-circle" />
    <div class="anim-circle-3 rounded-circle" />
    <div class="anim-blue" />
    <div class="anim-circle-4 rounded-circle" />
    <div class="anim-green rounded-pill" />
    <div class="anim-orange rounded-pill" />
    <div
      class="anim-img-1 rounded-circle"
      @mouseover="mouseOver(1)"
      @mouseout="mouseOut(1)"
    />
    <div class="anim-pink rounded-pill" />
    <div class="anim-purple rounded-pill" />
    <div
      v-for="i in 4"
      :key="i"
      class=" rounded-circle"
      :class="'anim-img-'+(i+1)"
      @mouseover="mouseOver(i+1)"
      @mouseout="mouseOut(i+1)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseHeaderAnimation',
  props: { animationHeader: { type: Boolean, default: false } },
  data: () => ({ times: [4, 3, 2, 2, 2] }),
  watch: {
    animationHeader: function(val) {
      if (!val && localStorage.getItem('theme')) {
        setTimeout(() => {
          if (document.querySelector('.anim-container')) {
            document.querySelector('.anim-container').classList.add('active-animation-header--finished')
          }
        }, 4000)
      }
    }
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      setTimeout(() => {
        document.querySelector('.anim-container').classList.add('active-animation-header--finished')
      }, 4000)
    }
  },
  methods: {
    mouseOver(i) {
      const block = document.querySelector('.active-animation-header--finished .anim-img-' + i)
      if (block) {
        if (!block.classList.contains('active-animation')) {
          switch (i) {
            case 1:
              block.style.top = '8%'
              break
            case 2:
              block.style.bottom = '8%'
              break
            case 3:
              block.style.top = '0'
              break
            case 4:
              block.style.bottom = '0'
              break
            case 5:
              block.style.top = '17.5%'
              break
          }
          block.classList.add('active-animation')
          block.style.animationName = 'anim' + i + '2-data-v-6fde9df7'
          block.style.animationDirection = 'alternate'
          block.style.animationIterationCount = 'infinite'
          block.style.animationTimingFunction = 'ease-in-out'
          block.style.animationDuration = this.times[i - 1] + 's'
        } else {
          block.style.animationPlayState = 'running'
        }
      }
    },
    mouseOut(i) {
      const block = document.querySelector('.active-animation-header--finished .anim-img-' + i)
      if (block) {
        if (block.classList.contains('active-animation')) {
          setTimeout(() => {
            block.style.animationPlayState = 'paused'
          }, 4000)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes anim1 {
  0% {
    top: 0;
  }
  50% {
    top: 17.5%;
  }
  100% {
    top: 8%;
  }
}

@keyframes anim2 {
  0% {
    bottom: 25.5%;
  }
  100% {
    bottom: 8%;
  }
}

@keyframes anim3 {
  0% {
    top: 17.5%;
  }
  100% {
    top: 0;
  }
}

@keyframes anim4 {
  0% {
    bottom: 10%;
  }
  100% {
    bottom: 0;
  }
}

@keyframes anim5 {
  0% {
    top: 0;
  }
  100% {
    top: 17.5%;
  }
}

@keyframes anim12 {
  0% {
    top: 8%;
  }
  50% {
    top: 17.5%;
  }
  100% {
    top: 0;
  }
}

@keyframes anim22 {
  0% {
    bottom: 8%;
  }
  100% {
    bottom: 25.5%;
  }
}

@keyframes anim32 {
  0% {
    top: 0;
  }
  100% {
    top: 17.5%;
  }
}

@keyframes anim42 {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 10%;
  }
}

@keyframes anim52 {
  0% {
    top: 17.5%;
  }
  100% {
    top: 0;
  }
}

.anim-container {
  width: 300px;
  height: 272.5px;
  position: relative;

  div {
    position: absolute;
  }

  @media (min-width: 960px) {
    width: 380px;
    height: 345px;
  }
  @media (min-width: 1110px) {
    width: 420px;
    height: 381.5px;
  }
  @media (min-width: 1264px) {
    width: 505px;
    height: 458.7px;
  }
  @media (min-width: 1514px) {
    width: 570px;
    height: 517.5px;
  }
  @media (min-width: 1904px) {
    width: 760px;
    height: 690px;
  }
  @media (min-width: 2204px) {
    width: 860px;
    height: 781px;
  }
}

.active-animation-header {
  .anim-img-1 {
    animation: anim1 4s ease-in-out forwards;
  }

  .anim-img-2 {
    animation: anim2 3s ease-in-out forwards;
  }

  .anim-img-3 {
    animation: anim3 2s 0.5s ease-in-out forwards;
  }

  .anim-img-4 {
    animation: anim4 2s 1s ease-in-out forwards;
  }

  .anim-img-5 {
    animation: anim5 2s ease-in-out forwards;
  }
}

.anim-green {
  top: 0;
  left: 0;
  width: 31.5%;
  height: 52%;
  background-color: #18FFBA;
}

.anim-pink {
  bottom: 8%;
  left: 15%;
  width: 31.5%;
  height: 52%;
  background-color: #FF0281;
}

.anim-orange {
  top: 0;
  right: 31.5%;
  width: 31.5%;
  height: 52%;
  background-color: #FF776E;
}

.anim-blue {
  bottom: 0;
  right: 12%;
  width: 39.4%;
  height: 100%;
  background-color: #7BDBFA;
  border-radius: 1999px 1999px 9999px 9999px;
}

.anim-purple {
  top: 0;
  right: 0;
  width: 31.5%;
  height: 52%;
  background-color: #6A30F4;
}

.anim-img-1 {
  top: 0;
  left: 0;
  width: 31.5%;
  height: 34.72%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png");
  background-size: cover;
}

.anim-img-2 {
  bottom: 8%;
  left: 15%;
  width: 31.5%;
  height: 34.72%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_vdXMSiX-n6M.png");
  background-size: cover;
}

.anim-img-3 {
  top: 17.5%;
  right: 31.5%;
  width: 31.5%;
  height: 34.72%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_XkKCui44iM0.png");
  background-size: cover;
}

.anim-img-4 {
  bottom: 10%;
  right: 12%;
  width: 39.4%;
  height: 43.4%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_98Elr-LIvD8.png");
  background-size: cover;
}

.anim-img-5 {
  top: 0;
  right: 0;
  width: 31.5%;
  height: 34.72%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_8nHQx4zi9Wk.png");
  background-size: cover;
}

.anim-circle-1 {
  top: 50%;
  left: 3%;
  width: 15.77%;
  height: 17.36%;
  background-color: #00A1FF;
}

.anim-circle-2 {
  top: 10%;
  left: 29%;
  width: 12.6%;
  height: 13.88%;
  background-color: #6A30F4;
}

.anim-circle-3 {
  bottom: 8%;
  left: 42.5%;
  width: 7.88%;
  height: 8.7%;
  background-color: #00DEA9;
}

.anim-circle-4 {
  top: 44.5%;
  left: 63%;
  width: 11%;
  height: 12.1%;
  background-color: #835FFE;
}
</style>