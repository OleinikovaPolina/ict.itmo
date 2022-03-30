<template>
  <button
    v-if="clickBtn"
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
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
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
  font-size: 20px;
  line-height: 24px;
  color: white !important;
  background-color: #0071B2;
  padding: 0.4em 1em;
  transition: all .4s ease-in-out;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0.2em 0.5em;
  }
}

.ict-button:hover {
  background-color: #004268;
}

.ict-button:disabled {
  opacity: 0.5;
}
</style>