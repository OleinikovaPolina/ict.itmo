<template>
  <div
    style="width: fit-content"
    :class="{'smallBtn':smallBtn}"
  >
    <a
      v-if="href"
      :href="href"
      class="ict-button text-decoration-none d-flex align-center"
      target="_blank"
    >
      {{ text }}
    </a>
    <button
      v-else-if="clickBtn"
      class="ict-button text-decoration-none d-flex align-center"
      @click="$emit('clickBtnCallback')"
    >
      {{ text }}
    </button>
    <router-link
      v-else
      :to="link"
      class="ict-button text-decoration-none d-flex align-center"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    link: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Узнать больше'
    },
    smallBtn: {
      type: Boolean,
      default: false
    },
    clickBtn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['clickBtnCallback']
}
</script>

<style scoped lang="scss">
.ict-button {
  border-radius: 20px;
  font-size: 24px;
  line-height: 33px;
  padding: 15px 30px;
  color: white !important;
  height: auto;
  text-transform: none;
  background-size: 300% 100%;
  transition: all .3s ease-in-out;
  background-position: 100% 0;
  background-image: linear-gradient(101.62deg, #0071B2, #0071B2, #0071B2, #2E9CEF 50%, #2E9CEF 70%, #2DC0C5 100%);
  letter-spacing: normal;
  @media (max-width: 600px) {
    border-radius: 14px;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 25px;
  }
}

.ict-button:hover {
  background-position: 75% 0;
  transition: all .3s ease-in-out;
}

.ict-button:active {
  background-position: 0 0;
  transition: all .3s ease-in-out;
}

.smallBtn .ict-button {
  @media (max-width: 960px) {
    border-radius: 14px;
    font-size: 18px;
    line-height: 20px;
    padding: 12px 25px;
  }
  @media (max-width: 600px) {
    border-radius: 12px;
    font-size: 12px;
    line-height: 16px;
    padding: 10px 20px;
  }
}
</style>