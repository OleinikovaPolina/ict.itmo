<template>
  <div class="admin-block pa-4">
    <div class="text-h6 mr-7">
      {{ info.title }}
    </div>
    <div v-if=" info.position">
      Расположение: {{ info.position }}
    </div>
    <div v-if=" info.tags">
      Теги: {{ info.tags.map(tag => tag.name).join(', ') }}
    </div>
    <div v-if=" info.date||info.dateStart">
      Дата: {{ $moment(info.date || info.dateStart).format('DD.MM.YYYY') }}
    </div>
    <div v-if=" info.time">
      Время: {{ info.time }}
    </div>
    <div v-if=" info.page">
      Страница: {{ info.page }}
    </div>
    <div
      v-if=" info.datePublish"
      class="pb-2"
    >
      Дата публикации: {{ info.datePublish }}
    </div>
    <div
      v-if=" info.updatedAt"
      class="pb-2"
    >
      Дата изменения: {{ $moment(info.updatedAt).format('DD.MM.YYYY') }}
    </div>
    <div
      class="pa-3"
      style="position: absolute;right: 0;bottom: 0"
    >
      <BaseButtonOutlined
        text="Редактировать"
        class="rounded-0"
        :link="link"
      />
    </div>
    <div
      class="pa-3"
      style="position: absolute;right: 0;top: 0"
    >
      <v-btn
        icon
        @click="$emit('deleteEntry')"
      >
        <v-icon color="#00A1FF">
          mdi-close
        </v-icon>
      </v-btn>
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
  },
  emits: ['deleteEntry']
}
</script>

<style scoped lang="scss">
.admin-block {
  height: 100%;
  border: 2px solid #00A1FF;
  border-radius: 5px;
  position: relative;
}
</style>