<template>
  <div
    class="hex text-center d-flex flex-column align-center justify-center"
  >
    <v-img
      width="100%"
      contain
      class="mx-auto hex-img"
      :src="imgHex"
    />
    <div class="hex-text subtitle-color">
      {{ textHex }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHexagon',
  props: {
    textHex: { type: String, default: '' },
    imgHex: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.hex {
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  padding: 2em;
  @media (max-width: 600px) {
    padding: 1.2em;
  }
}

.hex-text {
  padding-top: 0.5em;
  font-size: 14px;
  line-height: 15px;
  font-family: "OpenSans-Bold", sans-serif !important;
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 12px;
  }
}

.hex-img {
  max-height: 50%;
}
</style>