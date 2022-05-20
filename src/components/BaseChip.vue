<template>
  <div
    v-if="item.category"
    class="mr-1 rounded px-2 px-md-3 chip-text"
    :style="{backgroundColor: item.category.color}"
  >
    {{ item.name }}
    <slot name="chip-btns" />
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
  }
}
</script>
<style scoped lang="scss">
.chip-text {
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 1904px) {
    font-size: 15px;
    line-height: 22px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 19px;
  }
}
</style>