<template>
  <div
    :id="'ict-line-'+id"
    class="ict-line"
    :style="{
      border: '1px solid '+color,
      backgroundColor: color,
      left:position==='left'?0:'auto',
      right:position==='right'?0:'auto',
      marginTop:top
    }"
  />
</template>

<script>
export default {
  name: 'LineComponent',
  props: {
    id: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '0'
    },
    leftAfter: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    scrolled: false
  }),
  watch: {
    scrolled(val) {
      if (val) {
        document.querySelector('#ict-line-' + this.id).animate({
            width: this.width,
            left: this.leftAfter
          },
          { duration: 1000, fill: 'forwards' }
        )
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
      let height = document.documentElement.clientHeight
      let { bottom } = document.querySelector('#ict-line-' + this.id).getBoundingClientRect()
      if (!this.scrolledClub) {
        this.scrolled = bottom < height && bottom > 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ict-line {
  position: absolute;
  width: 0;
}
</style>