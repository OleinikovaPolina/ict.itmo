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
          :info="Object.assign(info,{position: eventsPosition[i]})"
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
        name: 'Хакатоны ICT.Hack & Info Lab',
        dateChange: '12.01.2021',
        page: 'Студентам'
      },
      {
        name: 'Конкурс Горизонт',
        dateChange: '12.01.2021',
        page: 'Студентам'
      }
    ],
    eventsPosition: ['большой слева', 'средний, 1 строка, 1 картинка',
      'маленький, 1 строка, 2 картинка', 'маленький, 1 строка, 3 картинка',
      'маленький, 2 строка, 1 картинка', 'маленький, 2 строка, 2 картинка',
      'средний, 2 строка, 3 картинка'],
    events: [
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      },
      {
        name: 'Название ',
        date: '12.01.2021',
        time: '17:00',
        dateChange: '12.01.2021'
      }
    ]
  })
}
</script>