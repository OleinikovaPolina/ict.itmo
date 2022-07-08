<template>
  <label
    class="switch"
    :class="themeBoolean?'dark':''"
  >
    <input
      v-model="themeBoolean"
      type="checkbox"
      aria-label="switch"
    >
    <span class="slider">
      <span class="d-flex justify-center align-center">
        <v-icon
          :dark="!themeBoolean"
          size="20"
        >
          mdi-{{ themeBoolean ? 'moon-waning-crescent' : 'white-balance-sunny' }}
        </v-icon>
      </span>
    </span>
  </label>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SwitchComponent',
  data: () => ({
    themeBoolean: false
  }),
  computed: mapState('app', ['theme']),
  watch: {
    themeBoolean: function(val) {
      this.changeTheme(val ? 'dark' : 'light')
    },
    theme: function(val) {
      if ((val === 'dark') !== this.themeBoolean) {
        this.themeBoolean = val === 'dark'
      }
    }
  },
  mounted() {
    this.themeBoolean = this.theme === 'dark'
  },
  methods: mapActions('app', ['changeTheme'])
}
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  border: 2px solid #00A1FF;
  border-radius: 50px;
}

.switch.dark {
  border: 2px solid #fff;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 32px;
}

.slider span {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 1px;
  bottom: 1px;
  background-color: #00A1FF;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

.dark .slider span {
  background-color: #fff;
}

input:checked + .slider span {
  transform: translateX(28px);
}
</style>