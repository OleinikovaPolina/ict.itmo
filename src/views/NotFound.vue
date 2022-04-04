<template>
  <div
    class="d-flex justify-center align-center"
    style="height: 90%;"
  >
    <div class="notfound-container animation--active">
      <div class="circle-purple rounded-circle" />
      <div class="circle-purple-dark rounded-circle" />
      <div class="circle-blue-dark rounded-circle" />
      <div class="circle-blue-1 rounded-circle" />
      <div class="circle-blue-2 rounded-circle" />
      <div class="circle-green rounded-circle" />
      <div class="pill-purple rounded-pill" />
      <div class="pill-orange rounded-pill" />
      <div class="pill-pink rounded-pill" />
      <div class="admission-title text-center text-h6 text-md-h4 notfound-text">
        Страница не найдена
      </div>
      <div class="notfound-nums notfound-4-1">
        4
      </div>
      <div class="notfound-nums notfound-0-1">
        0
      </div>
      <div class="notfound-nums notfound-4-2">
        4
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
@keyframes pill-animation {
  0% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes text-animation {
  0% {
    opacity: 0;
    transform: translateY(25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes circle-animation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.notfound-container.animation--active {
  .pill-pink {
    animation: pill-animation 1s forwards;
  }

  .pill-orange {
    animation: pill-animation 1s .2s forwards;
  }

  .pill-purple {
    animation: pill-animation 1s .3s forwards;
  }

  .notfound-text {
    animation: text-animation 1s 1s forwards;
  }

  .circle-purple {
    animation: circle-animation 5s 3.5s infinite ease-in-out;
  }

  .circle-green {
    animation: circle-animation 3s 2.5s infinite linear;
  }

  .circle-blue-dark {
    animation: circle-animation 3.5s 3s infinite linear;
  }

  .circle-blue-2 {
    animation: circle-animation 4s 2s infinite linear;
  }
}

.notfound-container {
  width: 300px;
  height: 207px;
  position: relative;

  div {
    position: absolute;
  }

  @media (min-width: 600px) {
    width: 565px;
    height: 391px;
  }
  @media (min-width: 960px) {
    width: 420px;
    height: 290px;
  }
  @media (min-width: 1264px) {
    width: 565px;
    height: 391px;
  }
  @media (min-width: 1904px) {
    width: 872px;
    height: 604px;
  }
}

.rounded-pill {
  transform: translateY(25%);
}

.pill-pink {
  top: 20%;
  left: 8%;
  width: 31%;
  height: 74%;
  background-color: #FF0281;
}

.pill-orange {
  top: 0;
  left: 35%;
  width: 31%;
  height: 74%;
  background-color: #FF776E;
}

.pill-purple {
  top: 30%;
  right: 10%;
  width: 31%;
  height: 74%;
  background-color: #6A30F4;
}

.circle-purple {
  top: 30%;
  left: 0;
  width: 11%;
  height: 15.7%;
  background-color: #835FFE;
}

.circle-blue-dark {
  left: 35%;
  bottom: 12%;
  width: 15.6%;
  height: 22.5%;
  background-color: #00A1FF;
}

.circle-blue-1 {
  left: 51%;
  bottom: 16%;
  width: 8%;
  height: 11%;
  background-color: #7BDBFA;
}

.circle-blue-2 {
  bottom: 10%;
  right: 0;
  width: 11%;
  height: 15.7%;
  background-color: #7BDBFA;
}

.circle-green {
  top: 10%;
  right: 26.7%;
  width: 8%;
  height: 11%;
  background-color: #00DEA9;
}

.circle-purple-dark {
  top: 10.5%;
  left: 25.5%;
  width: 12.5%;
  height: 18%;
  background-color: #6A30F4;
}

.notfound-img {
  top: 0;
  left: 0;
}

.notfound-text {
  bottom: -15%;
  width: 100%;
  opacity: 0;
  transform: translateY(-25%);
}

.notfound-nums {
  font-size: 320px;
  line-height: 320px;
  font-family: "OpenSans-Bold", sans-serif !important;
  @media (max-width: 1904px) {
    font-size: 240px;
    line-height: 240px;
  }
  @media (max-width: 600px) {
    font-size: 120px;
    line-height: 120px;
  }
}

.notfound-4-1 {
  top: 25%;
  left: 11%;
}

.notfound-0-1 {
  top: 5%;
  left: 39%;
}

.notfound-4-2 {
  top: 35%;
  right: 13%;
}
</style>