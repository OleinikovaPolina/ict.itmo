<template>
  <v-container class="pt-8 pb-6 pt-md-16 pb-md-10">
    <div class="text-center mx-auto pb-8 text-h6 text-sm-h4">
      Этика факультета
    </div>
    <div
      class="ethics-mobile-container mx-auto"
      :class="{'ethics-active':scrolled}"
    >
      <svg
        width="85%"
        height="100%"
        viewBox="0 0 407 813"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M146.417 11.9961L241.064 59.1555C292.992 85.0294 290.328 160.001 236.695 182.124L222.117 188.137C168.156 210.395 172.062 288.094 227.984 304.828L247.722 310.735C298.252 325.856 300.649 396.519 251.259 415.029V415.029C210.652 430.248 209.258 487.175 249.072 504.363L263.01 510.381C310.332 530.811 305.218 599.506 255.393 612.704L240.773 616.577C173.828 634.31 173.1 729.065 239.765 747.824L247.5 750C297.166 764.093 278.5 789 261.5 802.5"
          :stroke="theme==='dark'?'#97CDF7':'#CFCFCF'"
          stroke-width="20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M146.165 11.9961L240.902 59.1899C292.875 85.0801 290.209 160.114 236.53 182.251L221.941 188.268C167.935 210.539 171.843 288.302 227.81 305.047L247.569 310.958C298.14 326.088 300.539 396.809 251.109 415.33V415.33C210.468 430.559 209.073 487.533 248.92 504.732L262.542 510.611C309.852 531.032 304.633 599.739 254.781 612.779L240.38 616.546C174.204 633.856 172.411 727.154 237.874 746.992L244.5 749C250.311 750.41 311.5 770 261.5 804"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10 10"
        />
        <circle
          cx="146"
          cy="11.9961"
          r="9"
          transform="rotate(90 146 11.9961)"
          :fill="theme==='dark'?'#97CDF7':'white'"
          stroke="#B0AFAF"
          stroke-width="2"
        />
        <g class="ethics-marker-1">
          <circle
            cx="282"
            cy="118"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M285 118C285 119.657 283.657 121 282 121C280.343 121 279 119.657 279 118C279 116.343 280.343 115 282 115C283.657 115 285 116.343 285 118Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M283.823 91.5854C283.295 92.4261 283 93.388 283 94.3808V116.005C283 116.557 282.552 117.005 282 117.005C281.448 117.005 281 116.557 281 116.005V94.3808C281 93.388 280.705 92.4261 280.177 91.5854C276.158 85.1882 267 68.4096 267 61.8395C267 53.6439 273.716 47 282 47C290.284 47 297 53.6439 297 61.8395C297 68.4096 287.842 85.1882 283.823 91.5854ZM282 81C288.627 81 294 68.2294 294 62.0994C294 55.9694 288.627 51 282 51C275.373 51 270 55.9694 270 62.0994C270 68.2294 275.373 81 282 81Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-2">
          <circle
            cx="181"
            cy="245"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M184 245C184 246.657 182.657 248 181 248C179.343 248 178 246.657 178 245C178 243.343 179.343 242 181 242C182.657 242 184 243.343 184 245Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M182.823 218.585C182.295 219.426 182 220.388 182 221.381V243.005C182 243.557 181.552 244.005 181 244.005C180.448 244.005 180 243.557 180 243.005V221.381C180 220.388 179.705 219.426 179.177 218.585C175.158 212.188 166 195.41 166 188.839C166 180.644 172.716 174 181 174C189.284 174 196 180.644 196 188.839C196 195.41 186.842 212.188 182.823 218.585ZM181 208C187.627 208 193 195.229 193 189.099C193 182.969 187.627 178 181 178C174.373 178 169 182.969 169 189.099C169 195.229 174.373 208 181 208Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-3">
          <circle
            cx="288"
            cy="362"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M291 362C291 363.657 289.657 365 288 365C286.343 365 285 363.657 285 362C285 360.343 286.343 359 288 359C289.657 359 291 360.343 291 362Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M289.823 335.585C289.295 336.426 289 337.388 289 338.381V360.005C289 360.557 288.552 361.005 288 361.005C287.448 361.005 287 360.557 287 360.005V338.381C287 337.388 286.705 336.426 286.177 335.585C282.158 329.188 273 312.41 273 305.839C273 297.644 279.716 291 288 291C296.284 291 303 297.644 303 305.839C303 312.41 293.842 329.188 289.823 335.585ZM288 325C294.627 325 300 312.229 300 306.099C300 299.969 294.627 295 288 295C281.373 295 276 299.969 276 306.099C276 312.229 281.373 325 288 325Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-4">
          <circle
            cx="219"
            cy="457"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M222 457C222 458.657 220.657 460 219 460C217.343 460 216 458.657 216 457C216 455.343 217.343 454 219 454C220.657 454 222 455.343 222 457Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M220.823 430.585C220.295 431.426 220 432.388 220 433.381V455.005C220 455.557 219.552 456.005 219 456.005C218.448 456.005 218 455.557 218 455.005V433.381C218 432.388 217.705 431.426 217.177 430.585C213.158 424.188 204 407.41 204 400.839C204 392.644 210.716 386 219 386C227.284 386 234 392.644 234 400.839C234 407.41 224.842 424.188 220.823 430.585ZM219 420C225.627 420 231 407.229 231 401.099C231 394.969 225.627 390 219 390C212.373 390 207 394.969 207 401.099C207 407.229 212.373 420 219 420Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-5">
          <circle
            cx="297"
            cy="561"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M300 561C300 562.657 298.657 564 297 564C295.343 564 294 562.657 294 561C294 559.343 295.343 558 297 558C298.657 558 300 559.343 300 561Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M298.823 534.585C298.295 535.426 298 536.388 298 537.381V559.005C298 559.557 297.552 560.005 297 560.005C296.448 560.005 296 559.557 296 559.005V537.381C296 536.388 295.705 535.426 295.177 534.585C291.158 528.188 282 511.41 282 504.839C282 496.644 288.716 490 297 490C305.284 490 312 496.644 312 504.839C312 511.41 302.842 528.188 298.823 534.585ZM297 524C303.627 524 309 511.229 309 505.099C309 498.969 303.627 494 297 494C290.373 494 285 498.969 285 505.099C285 511.229 290.373 524 297 524Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-6">
          <circle
            cx="196"
            cy="670"
            r="13"
            :fill="theme==='dark'?'#97CDF7':'white'"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M199 670C199 671.657 197.657 673 196 673C194.343 673 193 671.657 193 670C193 668.343 194.343 667 196 667C197.657 667 199 668.343 199 670Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M197.823 643.585C197.295 644.426 197 645.388 197 646.381V668.005C197 668.557 196.552 669.005 196 669.005C195.448 669.005 195 668.557 195 668.005V646.381C195 645.388 194.705 644.426 194.177 643.585C190.158 637.188 181 620.41 181 613.839C181 605.644 187.716 599 196 599C204.284 599 211 605.644 211 613.839C211 620.41 201.842 637.188 197.823 643.585ZM196 633C202.627 633 208 620.229 208 614.099C208 607.969 202.627 603 196 603C189.373 603 184 607.969 184 614.099C184 620.229 189.373 633 196 633Z"
            fill="#2DC0C5"
          />
        </g>
        <path
          class="ethics-arrow"
          d="M4.29744 11.8578L40.7167 2.22361L26.5725 37.1396L22.2847 24.3987C21.2994 21.4707 19.1774 19.0624 16.3969 17.7161L4.29744 11.8578Z"
          :fill="theme==='dark'?'#261967':'white'"
          stroke="#2DC0C5"
          stroke-width="3"
        />
      </svg>
      <!--  book  -->
      <div class="ethics-book text-center">
        <img
          alt="..."
          rel="preload"
          width="100%"
          height="100%"
          src="../../assets/images/ethics/book.svg"
        >
        <div class="ethics-book-text ethics-book-text-1">
          Путеводитель<br>ИКТ
        </div>
        <div class="ethics-book-text ethics-book-text-2">
          Руководство<br>факультета
        </div>
        <a
          class="ethics-book-text ethics-book-text-3"
          target="_blank"
          href="https://github.com/itmo-ict-faculty/ict-guidebook"
        >
          ОТКРЫТЬ
        </a>
      </div>
      <!--  items  -->
      <div
        v-for="(item,i) in items"
        :key="i"
        class="ethics-item  text-center d-flex flex-column"
        :class="'ethics-item-'+i"
        :style="{transform: `translateY(${i%2===0?'-':''}20px)`}"
      >
        <div :class="`order-${i%2+1} p${i%2===0?'b':'t'}-1`">
          {{ item.text }}
        </div>
        <div class="text-center order-1">
          <component
            :is="item.img"
            class="ethics-item-img"
            :height="$vuetify.breakpoint.xl?70:$vuetify.breakpoint.lgAndUp?40:35"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheEthicsMobileComponent',
  components: {
    EthicsItem1: () => import('@/assets/images/ethics/item1'),
    EthicsItem2: () => import('@/assets/images/ethics/item2'),
    EthicsItem3: () => import('@/assets/images/ethics/item3'),
    EthicsItem4: () => import('@/assets/images/ethics/item4'),
    EthicsItem5: () => import('@/assets/images/ethics/item5'),
    EthicsItem6: () => import('@/assets/images/ethics/item6')
  },
  data: () => ({
    items: [
      { img: 'EthicsItem1', text: 'Кооперация' },
      { img: 'EthicsItem2', text: 'Open Source' },
      { img: 'EthicsItem3', text: 'Прозрачность' },
      { img: 'EthicsItem4', text: 'Рациональность' },
      { img: 'EthicsItem5', text: 'Свобода и ответственность' },
      { img: 'EthicsItem6', text: 'Самообразование' }
    ],
    scrolled: false
  }),
  computed: mapState('app', ['theme']),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let obj = document.querySelector('.ethics-mobile-container')
      if (obj) {
        let { bottom, height } = obj.getBoundingClientRect()
        let clientHeight = document.documentElement.clientHeight
        if (!this.scrolled) {
          this.scrolled = bottom - height * 2 / 3 < clientHeight && bottom > 0
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes BookAnimation {
  100% {
    transform: rotate(0);
  }
}

@keyframes BookText12Animation {
  99% {
    transform: scaleY(1);
    opacity: 0;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
}

@keyframes BookText3Animation {
  0% {
    transform: scaleY(1)
  }
  100% {
    transform: scaleY(1);
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

@keyframes arrowAnimation {
  0% {
    offset-distance: 0;
  }
  100% {
    offset-distance: 94%;
  }
}

.ethics-mobile-container {
  position: relative;
  padding-bottom: 8em;
  width: 300px;
  @media (min-width: 480px) {
    padding-bottom: 12em;
    width: 440px;
  }
  @media (min-width: 600px) {
    padding-bottom: 18em;
    width: 550px;
  }
}

.ethics-book {
  position: absolute;
  margin: 0 auto;
  bottom: -1%;
  left: 30%;
  transform: rotate(-29deg);
  width: 202px;
  @media (min-width: 480px) {
    width: 280px;
    bottom: 1%;
  }
  @media (min-width: 600px) {
    width: 400px;
    left: 25%;
    bottom: 1.5%;
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
    transform: scaleY(0);
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

  .ethics-book-text-3:focus {
    text-decoration: none;
  }
}

.ethics-item {
  position: absolute;
  width: fit-content;
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 10px;
  opacity: 0;
  max-width: 100px;
  font-size: 10px;
  line-height: 15px;
  padding: 0.5em;
  @media (min-width: 480px) {
    max-width: 140px;
    font-size: 14px;
  }
  @media (min-width: 600px) {
    max-width: 180px;
    font-size: 18px;
  }

  .ethics-item-img {
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
  top: 5%;
  right: 5%;
  @media (min-width: 480px) {
    top: 6%;
  }
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
  @media (min-width: 600px) {
    top: 38.5%;
  }
}

.ethics-item-4 {
  top: 48%;
  right: 1%;
  @media (min-width: 600px) {
    top: 47%;
    right: -1%;
  }
}

.ethics-item-5 {
  top: 59%;
  left: 0;
  @media (min-width: 600px) {
    top: 58%;
  }
}

.ethics-arrow {
  transform: translate(42%, -1%) rotate(70deg);
}

.ethics-active {
  .ethics-arrow {
    transform: translate(10px, -30px) rotate(45deg);
    offset-path: path("M146.165 11.9961L240.902 59.1899C292.875 85.0801 290.209 160.114 236.53 182.251L221.941 188.268C167.935 210.539 171.843 288.302 227.81 305.047L247.569 310.958C298.14 326.088 300.539 396.809 251.109 415.33V415.33C210.468 430.559 209.073 487.533 248.92 504.732L262.542 510.611C309.852 531.032 304.633 599.739 254.781 612.779L240.38 616.546C174.204 633.856 172.411 727.154 237.874 746.992L244.5 749C250.311 750.41 311.5 770 261.5 804");
    animation: arrowAnimation 7s forwards linear;
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