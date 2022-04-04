<template>
  <v-container class="pt-8 pb-6 pt-md-16 pb-md-10">
    <div class="text-center mx-auto pb-8 text-h6 text-sm-h4">
      Этика факультета
    </div>
    <div class="ethics-mobile-container">
      <!--  road  -->
      <div class="ethics-road">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 407 812"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146.417 10.9746L241.064 58.134C292.992 84.0079 290.328 158.979 236.695 181.102L222.117 187.115C168.156 209.374 172.062 287.072 227.984 303.806L247.722 309.713C298.252 324.834 300.649 395.497 251.259 414.008V414.008C210.652 429.227 209.258 486.154 249.072 503.342L263.01 509.359C310.332 529.789 305.218 598.484 255.393 611.682L240.773 615.555C173.828 633.289 173.1 728.043 239.765 746.802L247.5 748.979C297.166 763.071 278.5 787.979 261.5 801.479"
            stroke="#CFCFCF"
            stroke-width="20"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M146.165 10.9746L240.902 58.1684C292.875 84.0586 290.209 159.093 236.53 181.23L221.941 187.246C167.935 209.518 171.843 287.281 227.81 304.025L247.569 309.937C298.14 325.067 300.539 395.787 251.109 414.309V414.309C210.468 429.537 209.073 486.511 248.92 503.71L262.542 509.59C309.852 530.01 304.633 598.718 254.781 611.758L240.38 615.524C174.204 632.834 172.411 726.132 237.874 745.971L244.5 747.979C250.311 749.389 311.5 768.979 261.5 802.979"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="10 10"
          />
          <circle
            cx="146"
            cy="10.9746"
            r="9"
            transform="rotate(90 146 10.9746)"
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
          class="order-1 ethics-item-img"
          :src="item.img"
          contain
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TheEthicsMobileComponent',
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
        document.querySelector('.ethics-mobile-container').classList.add('ethics-active')
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
      let obj = document.querySelector('.ethics-mobile-container')
      let { bottom } = obj.getBoundingClientRect()
      let height = document.documentElement.clientHeight
      if (!this.scrolled) {
        this.scrolled = bottom / 2 < height && bottom / 2 > 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes ArrowAnimation {
  0% {
    top: -1%;
    left: 24%;
    transform: rotate(70deg);
  }
  7.1% {
    top: 3%;
    left: 39%;
    transform: rotate(65deg);
  }
  14.3% {
    top: 9%;
    left: 50%;
    transform: rotate(130deg);
  }
  21.4% {
    top: 15%;
    left: 45%;
    transform: rotate(190deg);
  }
  28.5% {
    top: 21%;
    left: 32%;
    transform: rotate(130deg);
  }
  35.7% {
    top: 28%;
    left: 40%;
    transform: rotate(70deg);
  }
  42.85% {
    top: 33%;
    left: 52%;
    transform: rotate(130deg);
  }
  50% {
    top: 38.5%;
    left: 47%;
    transform: rotate(190deg);
  }
  57.1% {
    top: 43%;
    left: 39%;
    transform: rotate(130deg);
  }
  64.3% {
    top: 49%;
    left: 47%;
    transform: rotate(65deg);
  }
  71.4% {
    top: 53%;
    left: 53.5%;
    transform: rotate(130deg);
  }
  78.5% {
    top: 58.5%;
    left: 44%;
    transform: rotate(190deg);
  }
  85.7% {
    top: 65%;
    left: 33%;
    transform: rotate(130deg);
  }
  92.9% {
    top: 71.5%;
    left: 40%;
    transform: rotate(65deg);
  }
  100% {
    top: 73%;
    left: 46%;
    transform: rotate(80deg);
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

.ethics-mobile-container {
  position: relative;
  padding-bottom: 8em;
  @media (min-width: 480px) {
    padding-bottom: 12em;
  }
  @media (min-width: 600px) {
    padding-bottom: 18em;
  }
}

.ethics-road {
  width: 80%;
}

.ethics-book {
  position: absolute;
  margin: 0 auto;
  bottom: -1%;
  left: 25%;
  transform: rotate(-29deg);
  width: 202px;
  @media (min-width: 480px) {
    width: 280px;
  }
  @media (min-width: 600px) {
    width: 400px;
    bottom: 2%;
  }

  .ethics-book-text {
    position: absolute;
    line-height: normal;
    color: #FFFFFF;
    background: #0071B2;
    border-radius: 6px;
    padding: 3px;
    font-size: 7px;
    @media (min-width: 480px) {
      font-size: 11px;
    }
    @media (min-width: 600px) {
      font-size: 16px;
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
    left: 36%;
    top: 40%;
    padding: 10px 5px;
    font-size: 12px;
    @media (min-width: 480px) {
      font-size: 17px;
    }
    @media (min-width: 600px) {
      font-size: 24px;
    }
  }
}

.ethics-arrow {
  position: absolute;
  top: -1%;
  left: 24%;
  z-index: 2;
  transform: rotate(70deg);
  width:35px;
  height:33px;
  @media (min-width: 600px) {
    width:45px;
    height:43px;
  }
}

.ethics-item {
  position: absolute;
  width: fit-content;
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 10px;
  opacity: 0;
  max-height: 100px;
  max-width: 115px;
  font-size: 11px;
  line-height: 15px;
  padding: 1em;
  @media (min-width: 480px) {
    max-height: 140px;
    max-width: 160px;
    font-size: 14px;
  }
  @media (min-width: 600px) {
    max-height: 180px;
    max-width: 220px;
    font-size: 18px;
  }
  .ethics-item-img{
    height: 35px;
    @media (min-width: 480px) {
      height: 50px;
    }
    @media (min-width: 600px) {
      height: 70px;
    }
  }
}

.ethics-item-0 {
  top: 4%;
  right: 5%;
}

.ethics-item-1 {
  top: 18%;
  left: 1%;
}

.ethics-item-2 {
  top: 29%;
  right: 5%;
}

.ethics-item-3 {
  top: 39%;
  left: 3%;
}

.ethics-item-4 {
  top: 48%;
  right: 1%;
}

.ethics-item-5 {
  top: 59%;
  left: 0;
}

.ethics-marker {
  position: absolute;
  width:20px;
  height:60px;
  @media (min-width: 480px) {
    width:30px;
    height:70px;
  }
  @media (min-width: 600px) {
    width:45px;
    height:80px;
  }
}

.ethics-marker-1 {
  top: 4%;
  right: 42%;
}

.ethics-marker-2 {
  top: 17%;
  left: 33.5%;
}

.ethics-marker-3 {
  top: 29%;
  right: 41%;
}

.ethics-marker-4 {
  top: 39%;
  left: 41%;
}

.ethics-marker-5 {
  top: 49%;
  right: 39%;
}

.ethics-marker-6 {
  top: 60%;
  left: 35%;
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