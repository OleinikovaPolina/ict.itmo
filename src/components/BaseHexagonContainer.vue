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
      <div class="hex">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 208 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g :filter="'url(#filter0_dd_1_5122'+i+')'">
            <path
              d="M91.6282 17.3119C99.2839 12.896 108.716 12.896 116.372 17.3119L181.628 54.9518C189.284 59.3676 194 67.5284 194 76.36V191.64C194 200.472 189.284 208.632 181.628 213.048L116.372 250.688C108.716 255.104 99.2839 255.104 91.6282 250.688L26.3718 213.048C18.7161 208.632 14 200.472 14 191.64V76.36C14 67.5284 18.7161 59.3676 26.3718 54.9518L91.6282 17.3119Z"
              :fill="theme==='dark'?'#070C2D':'white'"
            />
            <path
              d="M92.3777 18.6112C99.5695 14.4629 108.43 14.4629 115.622 18.6112L180.879 56.2512C188.07 60.3994 192.5 68.065 192.5 76.36V191.64C192.5 199.935 188.07 207.601 180.879 211.749L115.622 249.389C108.43 253.537 99.5695 253.537 92.3777 249.389L27.1213 211.749C19.9296 207.601 15.5 199.935 15.5 191.64V76.36C15.5 68.065 19.9296 60.3994 27.1213 56.2512L92.3777 18.6112Z"
              :stroke="theme==='dark'?'#070C2D':'white'"
              stroke-width="3"
            />
          </g>
          <defs>
            <filter
              :id="'filter0_dd_1_5122'+i"
              x="0"
              y="0"
              width="208"
              height="268"
              filterUnits="userSpaceOnUse"
              :color-interpolation-filters="theme==='dark'?'white':'sRGB'"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0119097 0 0 0 0 0.263132 0 0 0 0 0.408333 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_5122"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur
                :id="'ict-feGaussianBlur-' + i"
                stdDeviation="2.5"
              />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.67451 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1_5122"
                result=""
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1_5122"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div
        class="hex-content text-center d-flex flex-column align-center justify-center"
        @mouseout="hexHoverNot(i)"
        @mouseover="hexHover(i)"
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
import { mapState } from 'vuex'

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
  computed: mapState('app', ['theme']),
  watch: {
    scrolled(val) {
      if (val) {
        document.querySelectorAll('.hex-container').forEach(function(one) {
          one.classList.add('active-animation')
          setTimeout(() => {
            one.classList.add('active-animation--finished')
          }, 3000)
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
    },
    hexHover(i) {
      const block = document.querySelector('.active-animation--finished #ict-feGaussianBlur-' + i)
      if (block) {
        block.setAttribute('stdDeviation', '10')
      }
    },
    hexHoverNot(i) {
      const block = document.querySelector('.active-animation--finished #ict-feGaussianBlur-' + i)
      if (block) {
        block.setAttribute('stdDeviation', '2.5')
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
  height: 600px;
  @media (max-width: 1904px) {
    height: 450px;
  }
  @media (max-width: 1280px) {
    height: 400px;
  }
  @media (max-width: 960px) {
    height: 320px;
  }
  @media (max-width: 600px) {
    height: 260px;
  }
  @media (max-width: 480px) {
    height: 220px;
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
  @media (max-width: 1280px) {
    height: 200px;
    width: 150px;
  }
  @media (max-width: 960px) {
    height: 150px;
    width: 120px;
  }
  @media (max-width: 600px) {
    height: 130px;
    width: 100px;
  }
  @media (max-width: 480px) {
    height: 100px;
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
    font-size: 15px;
    line-height: 18px;
  }
  @media (max-width: 1264px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 12px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
    line-height: 10px;
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

.hex-container.active-animation {
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

.active-animation--finished {
  .hex-block {
    transition: all .5s;
  }

  .hex-block:hover {
    transform: scale(1.1);
  }
}
</style>