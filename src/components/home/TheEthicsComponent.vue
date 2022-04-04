<template>
  <v-container class="pt-8 pb-6 pt-md-16 pb-md-10">
    <div class="text-center mx-auto pb-8 text-h6 text-sm-h4 text-xl-h3">
      Этика факультета
    </div>
    <div class="ethics-container">
      <!--  road  -->
      <div class="ethics-road">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1084 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 153L78.7061 99.0167C132.922 56.4181 210.007 56.8981 264.393 99.2804V99.2804C314.54 138.36 387.247 132.155 429.163 84.3537L439.493 72.5735C473.925 33.307 532.774 27.1484 574.589 58.4357L587.963 68.4422C620.366 92.6872 664.188 95.0117 698.974 74.3308L741.939 48.788C779.024 26.7405 826.467 33.5644 855.835 65.17L869.846 80.2485C915.061 128.909 994.906 117.717 1025 58.5V58.5C1037.5 33 1058 8.5 1073.5 10.5"
            stroke="#CFCFCF"
            stroke-width="20"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 153L78.7061 99.0167C132.922 56.4181 210.007 56.8981 264.393 99.2804V99.2804C314.54 138.36 387.247 132.155 429.163 84.3537L439.493 72.5735C473.925 33.307 532.774 27.1484 574.589 58.4357L587.963 68.4422C620.366 92.6872 664.188 95.0117 698.974 74.3308L741.939 48.788C779.024 26.7405 826.467 33.5644 855.835 65.17L869.846 80.2485C915.061 128.909 994.906 117.717 1025 58.5V58.5C1027 54 1040.5 26.5 1056.5 16.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="10 10"
          />
          <circle
            cx="10"
            cy="153"
            r="9"
            fill="white"
            stroke="#B0AFAF"
            stroke-width="2"
          />
        </svg>
      </div>
      <!--  book  -->
      <div class="ethics-book text-center">
        <v-img
          width="100%"
          height="100%"
          contain
          src="../../assets/images/ethics/book.svg"
        />
        <div class="ethics-book-text ethics-book-text-1">
          Путеводитель<br>ИКТ
        </div>
        <div class="ethics-book-text ethics-book-text-2">
          Руководство<br>факультета
        </div>
        <div class="ethics-book-text ethics-book-text-3">
          ОТКРЫТЬ
        </div>
      </div>
      <!--  arrow  -->
      <svg
        class="ethics-arrow"
        viewBox="0 0 44 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.29744 11.8578L40.7167 2.22361L26.5725 37.1396L22.2847 24.3987C21.2994 21.4707 19.1774 19.0624 16.3969 17.7161L4.29744 11.8578Z"
          fill="white"
          stroke="#2DC0C5"
          stroke-width="3"
        />
      </svg>
      <!--  markers  -->
      <div
        v-for="n in 6"
        :key="'f'+n"
        class="ethics-marker"
        :class="'ethics-marker-'+n"
      >
        <svg
          viewBox="0 0 30 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="71"
            r="13"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M18 71C18 72.6569 16.6569 74 15 74C13.3431 74 12 72.6569 12 71C12 69.3431 13.3431 68 15 68C16.6569 68 18 69.3431 18 71Z"
            fill="#2DC0C5"
          />
          <path
            d="M16.8229 44.5854C16.2948 45.4261 16 46.388 16 47.3808V69.0049C16 69.5572 15.5523 70.0049 15 70.0049C14.4477 70.0049 14 69.5572 14 69.0049V47.3808C14 46.388 13.7052 45.4261 13.1771 44.5854C9.15794 38.1882 0 21.4096 0 14.8395C0 6.64387 6.71573 0 15 0C23.2843 0 30 6.64387 30 14.8395C30 21.4096 20.8421 38.1882 16.8229 44.5854ZM15 34C21.6274 34 27 21.2294 27 15.0994C27 8.96935 21.6274 4 15 4C8.37258 4 3 8.96935 3 15.0994C3 21.2294 8.37258 34 15 34Z"
            fill="#2DC0C5"
          />
        </svg>
      </div>
      <!--  items  -->
      <div
        v-for="(item,i) in items"
        :key="i"
        class="ethics-item  text-center d-flex flex-column"
        :class="'ethics-item-'+i"
        :style="{transform: `translateY(${i%2===0?'-':''}20px)`}"
      >
        <div :class="'order-'+(i%2+1)">
          {{ item.text }}
        </div>
        <v-img
          class="order-1"
          :height="$vuetify.breakpoint.xl?70:$vuetify.breakpoint.mdAndUp?50:35"
          :src="item.img"
          contain
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TheEthicsComponent',
  data: () => ({
    items: [
      { img: require('../../assets/images/ethics/Vector (7).svg'), text: 'Кооперация' },
      { img: require('../../assets/images/ethics/Vector (8).svg'), text: 'Open Source' },
      { img: require('../../assets/images/ethics/Vector (9).svg'), text: 'Прозрачность' },
      { img: require('../../assets/images/ethics/Vector (10).svg'), text: 'Рациональность' },
      { img: require('../../assets/images/ethics/Vector (11).svg'), text: 'Свобода и ответственность' },
      { img: require('../../assets/images/ethics/Union.svg'), text: 'Самообразование' }
    ],
    scrolled: false
  }),
  watch: {
    scrolled(val) {
      if (val) {
        document.querySelector('.ethics-container').classList.add('ethics-active')
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
      let obj = document.querySelector('.ethics-container')
      let { bottom } = obj.getBoundingClientRect()
      let height = document.documentElement.clientHeight
      if (!this.scrolled) {
        this.scrolled = bottom < height && bottom > 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes ArrowAnimation {
  0% {
    bottom: 27%;
    left: -1%;
    transform: rotate(0);
  }
  7.1% {
    bottom: 43%;
    left: 5%;
    transform: rotate(10deg);
  }
  14.3% {
    bottom: 51%;
    left: 11.5%;
    transform: rotate(40deg);
  }
  21.4% {
    bottom: 43%;
    left: 18%;
    transform: rotate(80deg);
  }
  28.5% {
    bottom: 34%;
    left: 25%;
    transform: rotate(40deg);
  }
  35.7% {
    bottom: 47%;
    left: 32.5%;
    transform: rotate(0deg);
  }
  42.85% {
    bottom: 59%;
    left: 38%;
    transform: rotate(40deg);
  }
  50% {
    bottom: 52%;
    left: 43.5%;
    transform: rotate(85deg);
  }
  57.1% {
    bottom: 45%;
    left: 49.5%;
    transform: rotate(35deg);
  }
  64.3% {
    bottom: 50%;
    left: 54%;
    transform: rotate(10deg);
  }
  71.4% {
    bottom: 60%;
    left: 59%;
    transform: rotate(40deg);
  }
  78.5% {
    bottom: 48%;
    left: 66%;
    transform: rotate(80deg);
  }
  85.7% {
    bottom: 38%;
    left: 72%;
    transform: rotate(40deg);
  }
  92.9% {
    bottom: 49%;
    left: 78%;
    transform: rotate(-10deg);
  }
  100% {
    bottom: 63%;
    left: 80%;
    transform: rotate(0);
  }
}

@keyframes BookAnimation {
  100% {
    transform: rotate(0);
  }
}

@keyframes BookText12Animation {
  100% {
    opacity: 0;
  }
}

@keyframes BookText3Animation {
  100% {
    opacity: 1;
  }
}

@keyframes ItemAnimation {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes MarkerCircleAnimation {
  100% {
    stroke: #00A1FF;
  }
}

@keyframes MarkerPathAnimation {
  100% {
    fill: #00A1FF;
  }
}

.ethics-container {
  position: relative;
  padding: 5em 0;
}

.ethics-road {
  width: 85%;
}

.ethics-book {
  position: absolute;
  right: 1%;
  top: -15%;
  transform: rotate(-29deg);
  width: 380px;
  @media (max-width: 1904px) {
    width: 262px;
    right: 0;
  }
  @media (max-width: 1264px) {
    width: 222px;
    right: -2%;
  }
  @media (max-width: 960px) {
    width: 192px;
    right: 1%;
  }

  .ethics-book-text {
    position: absolute;
    font-size: 14px;
    line-height: normal;
    color: #FFFFFF;
    background: #0071B2;
    border-radius: 6px;
    padding: 3px;
    @media (max-width: 1904px) {
      font-size: 10px;
    }
    @media (max-width: 1264px) {
      font-size: 9px;
    }
    @media (max-width: 960px) {
      font-size: 7px;
    }
  }

  .ethics-book-text-1 {
    left: 38%;
    top: 30%;
  }

  .ethics-book-text-2 {
    left: 39%;
    top: 45%;
  }

  .ethics-book-text-3 {
    opacity: 0;
    font-size: 22px;
    left: 36%;
    top: 40%;
    padding: 10px 5px;
    @media (max-width: 1904px) {
      font-size: 16px;
    }
    @media (max-width: 1264px) {
      font-size: 14px;
    }
    @media (max-width: 960px) {
      font-size: 12px;
    }
  }
}

.ethics-arrow {
  position: absolute;
  bottom: 27%;
  left: -1%;
  z-index: 2;
  transform: translateY(9px);
  width: 48px;
  height: 46px;
  @media (max-width: 1904px) {
    transform: translateY(0);
    width: 35px;
    height: 32px;
  }
  @media (max-width: 1264px) {
    transform: translateY(-14px);
    width: 30px;
    height: 28px;
  }
}

.ethics-item {
  position: absolute;
  width: fit-content;
  max-height: 140px;
  max-width: 190px;
  font-size: 19px;
  line-height: 23px;
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 10px;
  padding: 1em;
  opacity: 0;
  @media (max-width: 1904px) {
    max-height: 110px;
    max-width: 150px;
    font-size: 14px;
    line-height: 19px;
  }
  @media (max-width: 1264px) {
    max-height: 100px;
    max-width: 120px;
    font-size: 11px;
    line-height: 15px;
  }
}

.ethics-item-0 {
  bottom: 15%;
  left: 9%;
}

.ethics-item-1 {
  top: 0;
  left: 22.5%;
}

.ethics-item-2 {
  bottom: 20%;
  left: 35%;
}

.ethics-item-3 {
  top: -5%;
  left: 45.5%;
}

.ethics-item-4 {
  bottom: 15%;
  left: 55%;
}

.ethics-item-5 {
  top: 0;
  left: 68%;
}

.ethics-marker {
  position: absolute;

  svg {
    width: 46px;
    height: 106px;
    @media (max-width: 1904px) {
      width: 25px;
      height: 86px;
    }
    @media (max-width: 1264px) {
      width: 25px;
      height: 68px;
    }
  }
}

.ethics-marker-1 {
  top: 21.5%;
  left: 12%;
}

.ethics-marker-2 {
  top: 37.5%;
  left: 26%;
}

.ethics-marker-3 {
  top: 14%;
  left: 39%;
}

.ethics-marker-4 {
  top: 27.5%;
  left: 50%;
}

.ethics-marker-5 {
  top: 13%;
  left: 60%;
}

.ethics-marker-6 {
  top: 33.5%;
  left: 73%;
}

.ethics-active {
  .ethics-arrow {
    animation: ArrowAnimation 7s forwards linear;
  }

  .ethics-book {
    animation: BookAnimation 1s 7s forwards linear;
  }

  .ethics-book-text-1, .ethics-book-text-2 {
    animation: BookText12Animation .5s 8s forwards linear;
  }

  .ethics-book-text-3 {
    animation: BookText3Animation .5s 8.5s forwards linear;
  }

  .ethics-marker-1 {
    circle {
      animation: MarkerCircleAnimation .2s 1s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 1s forwards linear;
    }
  }

  .ethics-marker-2 {
    circle {
      animation: MarkerCircleAnimation .2s 2s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 2s forwards linear;
    }
  }

  .ethics-marker-3 {
    circle {
      animation: MarkerCircleAnimation .2s 3s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 3s forwards linear;
    }
  }

  .ethics-marker-4 {
    circle {
      animation: MarkerCircleAnimation .2s 4s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 4s forwards linear;
    }
  }

  .ethics-marker-5 {
    circle {
      animation: MarkerCircleAnimation .2s 5s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 5s forwards linear;
    }
  }

  .ethics-marker-6 {
    circle {
      animation: MarkerCircleAnimation .2s 6s forwards linear;
    }

    path {
      animation: MarkerPathAnimation .2s 6s forwards linear;
    }
  }

  .ethics-item-0 {
    animation: ItemAnimation .5s 1s forwards linear;
  }

  .ethics-item-1 {
    animation: ItemAnimation .5s 2s forwards linear;
  }

  .ethics-item-2 {
    animation: ItemAnimation .5s 3s forwards linear;
  }

  .ethics-item-3 {
    animation: ItemAnimation .5s 4s forwards linear;
  }

  .ethics-item-4 {
    animation: ItemAnimation .5s 5s forwards linear;
  }

  .ethics-item-5 {
    animation: ItemAnimation .5s 6s forwards linear;
  }
}
</style>