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
      @mouseover="mouseOver('.anim-img-1')"
      @mouseleave="mouseLeave('.anim-img-1')"
    />
    <div class="anim-pink rounded-pill" />
    <div class="anim-purple rounded-pill" />
    <div
      class="anim-img-2 rounded-circle"
      @mouseover="mouseOver('.anim-img-2')"
      @mouseleave="mouseLeave('.anim-img-2')"
    />
    <div
      class="anim-img-3 rounded-circle"
      @mouseover="mouseOver('.anim-img-3')"
      @mouseleave="mouseLeave('.anim-img-3')"
    />
    <div
      class="anim-img-4 rounded-circle"
      @mouseover="mouseOver('.anim-img-4')"
      @mouseleave="mouseLeave('.anim-img-4')"
    />
    <div
      class="anim-img-5 rounded-circle"
      @mouseover="mouseOver('.anim-img-5')"
      @mouseleave="mouseLeave('.anim-img-5')"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseHeaderAnimation',
  methods: {
    mouseOver(name) {
      if (!document.querySelector(name).classList.contains('active-animation')) {
        document.querySelector(name).classList.add('active-animation')
      } else {
        document.querySelector(name).style.animationPlayState = 'running'
      }
    },
    mouseLeave(name) {
      if (document.querySelector(name).classList.contains('active-animation')) {
        setTimeout(() => {
          document.querySelector(name).style.animationPlayState = 'paused'
        }, 2500)
      }
    }
  }
}
</script>

<style scoped lang="scss">
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

.anim-container .active-animation {
  animation-name: anim1;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
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

.anim-img-1 {
  top: 0;
  left: 0;
  width: 31.5%;
  height: 34.72%;
  background-color: #020202;
  background-image: url("../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png");
  background-size: cover;
}

@keyframes anim2 {
  0% {
    bottom: 25.5%;
  }
  100% {
    bottom: 8%;
  }
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

@keyframes anim3 {
  0% {
    top: 17.5%;
  }
  100% {
    top: 0;
  }
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

@keyframes anim4 {
  0% {
    bottom: 10%;
  }
  100% {
    bottom: 0;
  }
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

@keyframes anim5 {
  0% {
    top: 0;
  }
  100% {
    top: 17.5%;
  }
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