<template>
  <div class="anim-container">
    <div class="anim-pink rounded-pill" />
    <div class="anim-green rounded-pill" />
    <div class="anim-img-1 rounded-pill" />
    <div class="anim-img-2 rounded-circle" />
    <div class="anim-img-subtitle text-center">
      <p>Лектор</p>
      <p>Филянин Иван</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStudentsTwoPhotoComponent'
}
</script>

<style scoped lang="scss">
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
    width: 420px;
    height: 273px;
  }
  @media (min-width: 1264px) {
    width: 565px;
    height: 368px;
  }
  @media (min-width: 1904px) {
    width: 872px;
    height: 567px;
  }
}

.anim-pink {
  top: 0;
  left: 0;
  width: 87%;
  height: 66.67%;
  background-color: #FF0281;
}

.anim-green {
  top: 22%;
  right: 0;
  width: 65%;
  height: 66.67%;
  background-color: #18FFBA;
}

.anim-img-1 {
  top: 0;
  left: 0;
  width: 58%;
  height: 66.67%;
  background-image: url("../assets/images/delete/unsplash_JjjSPPzzpkU.png");
  background-size: cover;
  background-position: center;
}

.anim-img-2 {
  top: 22%;
  right: 21.5%;
  width: 43.5%;
  height: 66.67%;
  background-image: url("../assets/images/homeHeader/unsplash_FcLyt7lW5wg.png");
  background-size: cover;
  background-position: center;
}

.anim-img-subtitle {
  bottom: 0;
  right: 35%;

  p {
    font-size: 14px;
    line-height: normal;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 10px;
      line-height: 10px;

    }
  }
}

</style>