<template>
  <div class="admin-block pa-4">
    <div class="text-h6">
      {{ info.name }}
    </div>
    <div v-if=" info.position">
      Расположение: {{ info.position }}
    </div>
    <div v-if=" info.tags">
      Теги: {{ info.tags.join(', ') }}
    </div>
    <div v-if=" info.date">
      Дата: {{ info.date }}
    </div>
    <div v-if=" info.time">
      Время: {{ info.time }}
    </div>
    <div v-if=" info.page">
      Страница: {{ info.page }}
    </div>
    <div class="d-flex justify-space-between flex-wrap">
      <div
        v-if=" info.datePublish"
        class="pb-2"
      >
        Дата публикации: {{ info.datePublish }}
      </div>
      <div
        v-if=" info.dateChange"
        class="pb-2"
      >
        Дата изменения: {{ info.dateChange }}
      </div>
      <BaseButtonOutlined
        text="Редактировать"
        class="rounded-0"
        :link="link"
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
    },
    link: {
      type: String,
      default: ''
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
</style>