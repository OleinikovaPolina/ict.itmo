<template>
  <v-container>
    <div class="pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4">
      Статьи
    </div>
    <v-row class="flex-wrap pb-4 pb-md-6">
      <v-col
        v-for="(info,i) in infos"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseBlock
          :info="info"
          :link="'favorites/'+(i+7)"
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
          :info="info"
          :link="'favorites/'+i"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdminFavoritesView',
  components: { BaseBlock: () => import('@/components/admin/BaseBlock') },
  data: () => ({
    infos: [
      {
        id: 1,
        name: 'Хакатоны ICT.Hack & Info Lab',
        dateChange: '12.01.2021',
        page: 'Студентам'
      },
      {
        id: 2,
        name: 'Конкурс Горизонт',
        dateChange: '12.01.2021',
        page: 'Студентам'
      }
    ],
    events: [
      {
        id: 1,
        position: 'средний, 1 строка, 1 картинка',
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        id: 2,
        position: 'средний, 1 строка, 1 картинка',
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      }
    ]
  })
}
</script>

<style scoped>

</style>