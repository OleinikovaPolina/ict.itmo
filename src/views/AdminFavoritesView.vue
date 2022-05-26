<template>
  <v-container v-if="isLoad">
    <div class="pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4">
      Статьи
    </div>
    <v-row class="flex-wrap pb-4 pb-md-6">
      <v-col
        v-for="(info,i) in articles"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseBlock
          :info="info"
          :link="'updateArticle/'+info.id"
        />
      </v-col>
    </v-row>
    <div class="pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4">
      Мероприятия
    </div>
    <v-row class="flex-wrap">
      <v-col
        v-for="(info,i) in events"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseBlock
          :info="Object.assign(info,{position: eventsPosition[i]})"
          :link="'updateEvent/'+info.id"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-container
    v-else
    class="d-flex justify-center align-center"
    style="min-height: 75vh"
  >
    <v-progress-circular indeterminate />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminFavoritesView',
  components: { BaseBlock: () => import('@/components/admin/BaseBlock') },
  data: () => ({
    eventsPosition: ['большой слева', 'средний, 1 строка, 1 картинка',
      'маленький, 1 строка, 2 картинка', 'маленький, 1 строка, 3 картинка',
      'маленький, 2 строка, 1 картинка', 'маленький, 2 строка, 2 картинка',
      'средний, 2 строка, 3 картинка'],
    isLoad: false
  }),
  computed: mapState('news', ['events','articles']),
  async mounted() {
    this.isLoad = false
    await this.getEvents()
    await this.getArticles()
    this.isLoad = true
  },
  methods: mapActions('news', ['getEvents','getArticles'])
}
</script>