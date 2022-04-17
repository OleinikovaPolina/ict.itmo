<template>
  <v-container class="pt-8 pb-8 pt-md-16 pb-md-12">
    <div class="text-center mx-auto  text-h6 text-sm-h4 text-xl-h3">
      Этика факультета
    </div>
    <div
      class="ethics-container"
      :class="{'ethics-active':scrolled}"
    >
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
      <!--  road, arrow, markers    -->
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1242 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 333L78.7061 279.017C132.922 236.418 210.007 236.898 264.393 279.28V279.28C314.54 318.36 387.247 312.155 429.163 264.354L439.493 252.573C473.925 213.307 532.774 207.148 574.589 238.436L587.963 248.442C620.366 272.687 664.188 275.012 698.974 254.331L741.939 228.788C779.024 206.741 826.467 213.564 855.835 245.17L869.846 260.249C915.061 308.909 994.906 297.717 1025 238.5V238.5C1037.5 213 1058 188.5 1073.5 190.5"
          stroke="#CFCFCF"
          stroke-width="20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="theMotionPath"
          d="M10 333L78.7061 279.017C132.922 236.418 210.007 236.898 264.393 279.28V279.28C314.54 318.36 387.247 312.155 429.163 264.354L439.493 252.573C473.925 213.307 532.774 207.148 574.589 238.436L587.963 248.442C620.366 272.687 664.188 275.012 698.974 254.331L741.939 228.788C779.024 206.741 826.467 213.564 855.835 245.17L869.846 260.249C915.061 308.909 994.906 297.717 1025 238.5V238.5C1027 234 1040.5 206.5 1056.5 196.5"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10 10"
        />
        <circle
          cx="10"
          cy="333"
          r="9"
          fill="white"
          stroke="#B0AFAF"
          stroke-width="2"
        />
        <g class="ethics-marker-1">
          <circle
            cx="170"
            cy="247"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M173 247C173 248.657 171.657 250 170 250C168.343 250 167 248.657 167 247C167 245.343 168.343 244 170 244C171.657 244 173 245.343 173 247Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M171.823 220.585C171.295 221.426 171 222.388 171 223.381V245.005C171 245.557 170.552 246.005 170 246.005C169.448 246.005 169 245.557 169 245.005V223.381C169 222.388 168.705 221.426 168.177 220.585C164.158 214.188 155 197.41 155 190.839C155 182.644 161.716 176 170 176C178.284 176 185 182.644 185 190.839C185 197.41 175.842 214.188 171.823 220.585ZM170 210C176.627 210 182 197.229 182 191.099C182 184.969 176.627 180 170 180C163.373 180 158 184.969 158 191.099C158 197.229 163.373 210 170 210Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-2">
          <circle
            cx="333"
            cy="304"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M336 304C336 305.657 334.657 307 333 307C331.343 307 330 305.657 330 304C330 302.343 331.343 301 333 301C334.657 301 336 302.343 336 304Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M334.823 277.585C334.295 278.426 334 279.388 334 280.381V302.005C334 302.557 333.552 303.005 333 303.005C332.448 303.005 332 302.557 332 302.005V280.381C332 279.388 331.705 278.426 331.177 277.585C327.158 271.188 318 254.41 318 247.839C318 239.644 324.716 233 333 233C341.284 233 348 239.644 348 247.839C348 254.41 338.842 271.188 334.823 277.585ZM333 267C339.627 267 345 254.229 345 248.099C345 241.969 339.627 237 333 237C326.373 237 321 241.969 321 248.099C321 254.229 326.373 267 333 267Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-3">
          <circle
            cx="512"
            cy="218"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M515 218C515 219.657 513.657 221 512 221C510.343 221 509 219.657 509 218C509 216.343 510.343 215 512 215C513.657 215 515 216.343 515 218Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M513.823 191.585C513.295 192.426 513 193.388 513 194.381V216.005C513 216.557 512.552 217.005 512 217.005C511.448 217.005 511 216.557 511 216.005V194.381C511 193.388 510.705 192.426 510.177 191.585C506.158 185.188 497 168.41 497 161.839C497 153.644 503.716 147 512 147C520.284 147 527 153.644 527 161.839C527 168.41 517.842 185.188 513.823 191.585ZM512 181C518.627 181 524 168.229 524 162.099C524 155.969 518.627 151 512 151C505.373 151 500 155.969 500 162.099C500 168.229 505.373 181 512 181Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-4">
          <circle
            cx="642"
            cy="268"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M645 268C645 269.657 643.657 271 642 271C640.343 271 639 269.657 639 268C639 266.343 640.343 265 642 265C643.657 265 645 266.343 645 268Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M643.823 241.585C643.295 242.426 643 243.388 643 244.381V266.005C643 266.557 642.552 267.005 642 267.005C641.448 267.005 641 266.557 641 266.005V244.381C641 243.388 640.705 242.426 640.177 241.585C636.158 235.188 627 218.41 627 211.839C627 203.644 633.716 197 642 197C650.284 197 657 203.644 657 211.839C657 218.41 647.842 235.188 643.823 241.585ZM642 231C648.627 231 654 218.229 654 212.099C654 205.969 648.627 201 642 201C635.373 201 630 205.969 630 212.099C630 218.229 635.373 231 642 231Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-5">
          <circle
            cx="788"
            cy="217"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M791 217C791 218.657 789.657 220 788 220C786.343 220 785 218.657 785 217C785 215.343 786.343 214 788 214C789.657 214 791 215.343 791 217Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M789.823 190.585C789.295 191.426 789 192.388 789 193.381V215.005C789 215.557 788.552 216.005 788 216.005C787.448 216.005 787 215.557 787 215.005V193.381C787 192.388 786.705 191.426 786.177 190.585C782.158 184.188 773 167.41 773 160.839C773 152.644 779.716 146 788 146C796.284 146 803 152.644 803 160.839C803 167.41 793.842 184.188 789.823 190.585ZM788 180C794.627 180 800 167.229 800 161.099C800 154.969 794.627 150 788 150C781.373 150 776 154.969 776 161.099C776 167.229 781.373 180 788 180Z"
            fill="#2DC0C5"
          />
        </g>
        <g class="ethics-marker-6">
          <circle
            cx="933"
            cy="290"
            r="13"
            fill="white"
            stroke="#2DC0C5"
            stroke-width="4"
          />
          <path
            d="M936 290C936 291.657 934.657 293 933 293C931.343 293 930 291.657 930 290C930 288.343 931.343 287 933 287C934.657 287 936 288.343 936 290Z"
            fill="#2DC0C5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M934.823 263.585C934.295 264.426 934 265.388 934 266.381V288.005C934 288.557 933.552 289.005 933 289.005C932.448 289.005 932 288.557 932 288.005V266.381C932 265.388 931.705 264.426 931.177 263.585C927.158 257.188 918 240.41 918 233.839C918 225.644 924.716 219 933 219C941.284 219 948 225.644 948 233.839C948 240.41 938.842 257.188 934.823 263.585ZM933 253C939.627 253 945 240.229 945 234.099C945 227.969 939.627 223 933 223C926.373 223 921 227.969 921 234.099C921 240.229 926.373 253 933 253Z"
            fill="#2DC0C5"
          />
        </g>
        <path
          class="ethics-arrow"
          d="M4.29744 11.8578L40.7167 2.22361L26.5725 37.1396L22.2847 24.3987C21.2994 21.4707 19.1774 19.0624 16.3969 17.7161L4.29744 11.8578Z"
          fill="white"
          stroke="#2DC0C5"
          stroke-width="3"
        />
      </svg>
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
          :height="$vuetify.breakpoint.xl?70:$vuetify.breakpoint.mdAndUp?40:35"
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

@keyframes arrowAnimation {
  0% {
    offset-distance: 0;
  }
  100% {
    offset-distance: 98%;
  }
}

.ethics-container {
  position: relative;
  width: 100%;
}

.ethics-book {
  position: absolute;
  transform: rotate(-29deg);
  right: -1%;
  bottom: 10%;
  width: 192px;
  @media (min-width: 960px) {
    bottom: 16%;
    width: 170px;
  }
  @media (min-width: 1280px) {
    bottom: 14%;
    width: 220px;
  }
  @media (min-width: 1514px) {
    right: -4%;
    bottom: 12%;
    width: 300px;
  }
  @media (min-width: 1904px) {
    right: -3%;
    bottom: 14%;
    width: 400px;
  }

  .ethics-book-text {
    position: absolute;
    line-height: normal;
    color: #FFFFFF;
    background: #0071B2;
    border-radius: 6px;
    padding: 3px;
    font-size: 7px;
    @media (min-width: 960px) {
      font-size: 7px;
    }
    @media (min-width: 1280px) {
      font-size: 9px;
    }
    @media (min-width: 1514px) {
      font-size: 13px;
    }
    @media (min-width: 1904px) {
      font-size: 17px;
    }
  }

  .ethics-book-text-1 {
    left: 36%;
    top: 30%;
  }

  .ethics-book-text-2 {
    left: 38%;
    top: 47%;
  }

  .ethics-book-text-3 {
    opacity: 0;
    left: 35%;
    top: 40%;
    padding: 10px 5px;
    font-size: 10px;
    @media (min-width: 1280px) {
      font-size: 14px;
    }
    @media (min-width: 1514px) {
      font-size: 20px;
    }
    @media (min-width: 1904px) {
      font-size: 26px;
    }
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
    max-width: 100px;
    font-size: 10px;
    line-height: 15px;
  }
}

.ethics-item-0 {
  bottom: 0;
  left: 8.5%;
}

.ethics-item-1 {
  top: 28%;
  left: 21%;
}

.ethics-item-2 {
  bottom: 3%;
  left: 36%;
}

.ethics-item-3 {
  top: 20%;
  left: 45.5%;
}

.ethics-item-4 {
  bottom: -3%;
  left: 55%;
}

.ethics-item-5 {
  top: 25%;
  left: 68%;
}

.ethics-arrow {
  transform: translateY(80%);
}

.ethics-active {
  .ethics-arrow {
    transform: translate(10px, -30px) rotate(45deg);
    offset-path: path("M10 333L78.7061 279.017C132.922 236.418 210.007 236.898 264.393 279.28V279.28C314.54 318.36 387.247 312.155 429.163 264.354L439.493 252.573C473.925 213.307 532.774 207.148 574.589 238.436L587.963 248.442C620.366 272.687 664.188 275.012 698.974 254.331L741.939 228.788C779.024 206.741 826.467 213.564 855.835 245.17L869.846 260.249C915.061 308.909 994.906 297.717 1025 238.5V238.5C1027 234 1040.5 206.5 1056.5 196.5");
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