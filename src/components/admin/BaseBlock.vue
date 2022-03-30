<template>
  <div class="admin-block pa-4">
    <div class="text-h6">
      {{ info.name }}
    </div>
    <div>Теги: {{ info.tags.join(', ') }}</div>
    <div>Дата: {{ info.date }}</div>
    <div>Время: {{ info.time }}</div>
    <div>Дата публикации: {{ info.datePublish }}</div>
    <div class="admin-block-btn-container pa-4">
      <BaseButtonOutlined
        text="Редактировать"
        class="rounded-0"
      />
    </div>
  </div>
</template>

<script>
import BaseButtonOutlined from '@/components/BaseButtonOutlined'

export default {
  name: 'BaseBlock',
  components: { BaseButtonOutlined },
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.admin-block {
  border: 2px solid #00A1FF;
  border-radius: 5px;
  position: relative;
}

.admin-block-btn-container {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>