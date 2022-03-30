<template>
  <button
    v-if="clickBtn"
    class="ict-button text-decoration-none d-flex align-center"
    :class="{'is-active':active}"
    @click="$emit('clickBtnCallback')"
  >
    {{ text }}
  </button>
  <router-link
    v-else
    :to="link"
    class="ict-button text-decoration-none d-flex align-center"
    :class="{'is-active':active}"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'BaseButtonOutlined',
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
    },
    active: {
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
  color: #0071B2 !important;
  border: 2px solid #0071B2;
  padding: 0.2em 1em;
  transition: all .4s ease-in-out;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0.1em 0.5em;
  }
}

.ict-button:hover, .ict-button.is-active {
  background-color: #0071B2;
  color: white !important;
}

.ict-button:disabled {
  opacity: 0.5;
}
</style>