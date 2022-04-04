<template>
  <div
    class="hex-container"
  >
    <div
      v-for="(hex,i) in hexArray"
      :key="i"
      class="hex-block"
      :class="'hex-'+i"
    >
      <div
        class="hex"
      />
      <div
        class="hex-content text-center d-flex flex-column align-center justify-center"
      >
        <v-img
          width="100%"
          contain
          class="mx-auto hex-img"
          :src="hex.img"
        />
        <div class="hex-text subtitle-color">
          {{ hex.text }}
        </div>
      </div>
    </div>
    <div class="hex-btn">
      <base-button
        :link="link"
        :small-btn="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHexagonContainer',
  components: { BaseButton: () => import('@/components/BaseButton') },
  props: {
    hexArray: {
      type: Array,
      default: null
    },
    link: {
      type: String,
      default: '/'
    }
  },
  data: () => ({
    scrolled: false
  }),
  watch: {
    scrolled(val) {
      if (val) {
        document.querySelectorAll('.hex-container').forEach(function(one) {
          one.classList.add('activeAnim')
        })
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
      let obj = document.querySelector('.hex-container')
      let { bottom } = obj.getBoundingClientRect()
      let height = document.documentElement.clientHeight
      if (!this.scrolled) {
        this.scrolled = bottom < height && bottom > 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes hexScale {
  0% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes hexText {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 36px;
  }
}

.hex-container {
  position: relative;
  height:600px;
  @media (max-width: 1904px) {
    height: 450px;
  }
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 260px;
  }
}

.hex-block {
  position: absolute;
  height: 280px;
  width: 220px;
  @media (max-width: 1904px) {
    height: 240px;
    width: 180px;
  }
  @media (max-width: 1024px) {
    height: 200px;
    width: 150px;
  }
  @media (max-width: 600px) {
    height: 160px;
    width: 120px;
  }
  @media (max-width: 480px) {
    height: 110px;
    width: 80px;
  }
}

.hex {
  position: relative;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  transform: scale(1, .8);
}

.hex-content {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2em;
  @media (max-width: 600px) {
    padding: 1.2em;
  }
}

.hex-text {
  padding-top: 0.5em;
  font-size: 20px;
  line-height: 22px;
  font-family: "OpenSans-Bold", sans-serif !important;
  @media (max-width: 1904px) {
    font-size: 14px;
    line-height: 15px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 12px;
  }
  opacity: 0;
  height: 0;
}

.hex-img {
  max-height: 50%;
}

.hex-btn {
  width: fit-content;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 60%
}

@keyframes hex0Move {
  0% {
    top: 40%;
    left: 15%;
  }
  25% {
    top: 40%;
    left: 7.5%;
  }
  50% {
    top: 30%;
    left: 3%;
  }
  65% {
    top: 20%;
    left: 2%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

@keyframes hex0MoveSm {
  0% {
    top: 38%;
    left: 7%;
  }
  25% {
    top: 38%;
    left: 3.5%;
  }
  50% {
    top: 28%;
    left: 2%;
  }
  65% {
    top: 18%;
    left: 1%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

.hex-0 {
  top: 40%;
  left: 15%;
  @media (max-width: 600px) {
    top: 38%;
    left: 7%;
  }
}

@keyframes hex1Move {
  0% {
    top: 5%;
    left: 24%;
  }
  25% {
    top: 8%;
    left: 26%;
  }
  50% {
    top: 20%;
    left: 24%;
  }
  75% {
    top: 30%;
    left: 20%;
  }
  100% {
    top: 40%;
    left: 15%;
  }
}

@keyframes hex1MoveSm {
  0% {
    top: 12%;
    left: 25%;
  }
  25% {
    top: 14%;
    left: 27%;
  }
  50% {
    top: 24%;
    left: 25%;
  }
  75% {
    top: 32%;
    left: 13%;
  }
  100% {
    top: 40%;
    left: 7%;
  }
}

.hex-1 {
  top: 5%;
  left: 24%;
  @media (max-width: 600px) {
    top: 12%;
    left: 25%;
  }
}

@keyframes hex2Move {
  0% {
    top: 5%;
    left: 6%;
  }
  25% {
    top: 2%;
    left: 11%;
  }
  50% {
    top: 0;
    left: 19%;
  }
  75% {
    top: 2%;
    left: 25%;
  }
  100% {
    top: 5%;
    left: 31%;
  }
}

@keyframes hex2MoveSm {
  0% {
    top: 5%;
    left: 0;
  }
  25% {
    top: 2%;
    left: 7%;
  }
  50% {
    top: 0;
    left: 13%;
  }
  75% {
    top: 2%;
    left: 19%;
  }
  100% {
    top: 5%;
    left: 25%;
  }
}

.hex-2 {
  top: 5%;
  left: 6%;
  @media (max-width: 600px) {
    left: 0;
  }
}

//right
@keyframes hex5Move {
  0% {
    top: 40%;
    right: 15%;
  }
  25% {
    top: 40%;
    right: 7.5%;
  }
  50% {
    top: 30%;
    right: 3%;
  }
  65% {
    top: 20%;
    right: 2%;
  }
  100% {
    top: 0;
    right: 0;
  }
}

@keyframes hex5MoveSm {
  0% {
    top: 38%;
    right: 7%;
  }
  25% {
    top: 38%;
    right: 3.5%;
  }
  50% {
    top: 28%;
    right: 2%;
  }
  65% {
    top: 18%;
    right: 1%;
  }
  100% {
    top: 0;
    right: 0;
  }
}

.hex-5 {
  top: 40%;
  right: 15%;
  @media (max-width: 600px) {
    top: 38%;
    right: 7%;
  }
}

@keyframes hex4Move {
  0% {
    top: 5%;
    right: 24%;
  }
  25% {
    top: 8%;
    right: 26%;
  }
  50% {
    top: 20%;
    right: 24%;
  }
  75% {
    top: 30%;
    right: 20%;
  }
  100% {
    top: 40%;
    right: 15%;
  }
}

@keyframes hex4MoveSm {
  0% {
    top: 12%;
    right: 25%;
  }
  25% {
    top: 14%;
    right: 27%;
  }
  50% {
    top: 24%;
    right: 25%;
  }
  75% {
    top: 32%;
    right: 13%;
  }
  100% {
    top: 40%;
    right: 7%;
  }
}

.hex-4 {
  top: 5%;
  right: 24%;
  @media (max-width: 600px) {
    top: 12%;
    right: 25%;
  }
}

@keyframes hex3Move {
  0% {
    top: 5%;
    right: 6%;
  }
  25% {
    top: 2%;
    right: 11%;
  }
  50% {
    top: 0;
    right: 19%;
  }
  75% {
    top: 2%;
    right: 25%;
  }
  100% {
    top: 5%;
    right: 31%;
  }
}

@keyframes hex3MoveSm {
  0% {
    top: 5%;
    right: 0;
  }
  25% {
    top: 2%;
    right: 7%;
  }
  50% {
    top: 0;
    right: 13%;
  }
  75% {
    top: 2%;
    right: 19%;
  }
  100% {
    top: 5%;
    right: 25%;
  }
}

.hex-3 {
  top: 5%;
  right: 6%;
  @media (max-width: 600px) {
    top: 5%;
    right: 0;
  }
}

.hex-container.activeAnim {
  .hex {
    animation: hexScale 1s 1.5s forwards;
  }

  .hex-text {
    animation: hexText 1s 2s forwards;
  }

  .hex-0 {
    animation: 1.5s hex0Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex0MoveSm linear forwards;
    }
  }

  .hex-1 {
    animation: 1.5s hex1Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex1MoveSm linear forwards;
    }
  }

  .hex-2 {
    animation: 1.5s hex2Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex2MoveSm linear forwards;
    }
  }

  .hex-3 {
    animation: 1.5s hex3Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex3MoveSm linear forwards;
    }
  }

  .hex-4 {
    animation: 1.5s hex4Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex4MoveSm linear forwards;
    }
  }

  .hex-5 {
    animation: 1.5s hex5Move linear forwards;
    @media (max-width: 600px) {
      animation: 1.5s hex5MoveSm linear forwards;
    }
  }
}
</style>