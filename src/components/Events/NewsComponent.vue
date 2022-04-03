<template>
  <v-container class="pb-4">
    <div class="d-flex justify-space-between align-center pt-6 pb-4 pt-md-10 ">
      <div class="text-h6 text-sm-h4">
        Новости
      </div>
      <BaseButtonOutlined
        :link="'/news'"
        :text="'Все новости'"
      />
    </div>
    <CarouselComponent
      :slider="slider"
      :columns="columns"
    >
      <template #item="slotProps">
        <v-col
          cols="6"
          md="3"
          class="pa-1 news-hover"
        >
          <BaseNews :news="slotProps.item" />
        </v-col>
      </template>
    </CarouselComponent>
  </v-container>
</template>

<script>
import img from '../../assets/images/delete/home-1.png'

export default {
  name: 'NewsComponent',
  components: {
    CarouselComponent: () => import('@/components/CarouselComponent'),
    BaseButtonOutlined: () => import('@/components/BaseButtonOutlined'),
    BaseNews: () => import('@/components/Events/BaseNewsSmall')
  },
  data: () => ({
    activeIndex: 0,
    slider: [
      {
        id: 1,
        img: img,
        date: '12 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '13 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '14 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '15 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '16 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '17 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '18 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        id: 1,
        img: img,
        date: '19 января 2022',
        name: 'Название мероприятия или новости',
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      }
    ]
  }),
  computed: {
    columns() {
      return this.$vuetify.breakpoint.mdAndUp ? 4 : 2
    }
  }
}
</script>
<style scoped lang="scss">
.news-hover {
  transition: all .5s;
  transform: scale(.85);
}

.carousel-component:hover {
  .news-hover {
    opacity: 0.7;
  }
}

.carousel-component .news-hover:hover {
  transition: all .5s;
  transform: scale(.9);
  border: 2px solid #2DC0C5;
  opacity: 1;
}
</style>