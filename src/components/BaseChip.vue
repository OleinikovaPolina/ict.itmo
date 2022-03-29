<template>
  <div
    class="mr-1 mt-2 rounded px-2 chip-text"
    :style="{backgroundColor: colors[item.type]}"
  >
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'BaseChip',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    colors: ['#00A1FF', '#FF776E', '#6A30F4', '#00DEA9']
  })
}
</script>
<style scoped lang="scss">
.chip-text {
  font-size: 15px;
  line-height: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 17px;
  }
}
</style>