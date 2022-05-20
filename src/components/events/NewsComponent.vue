<template>
  <v-container class="pb-4">
    <div class="d-flex justify-space-between align-center pt-6 pb-4 pt-md-10 ">
      <div class="text-h6 text-sm-h4 text-xl-h3">
        Новости
      </div>
      <BaseButtonOutlined
        :link="'/news'"
        :text="'Все новости'"
      />
    </div>
    <CarouselComponent
      v-if="news"
      :slider="news"
      :columns="columns"
    >
      <template #item="slotProps">
        <v-col
          cols="6"
          md="3"
          class="pa-1 news-hover"
        >
          <BaseNewsSmall :news="slotProps.item" />
        </v-col>
      </template>
    </CarouselComponent>
  </v-container>
</template>

<script>
export default {
  name: 'NewsComponent',
  components: {
    CarouselComponent: () => import('@/components/CarouselComponent'),
    BaseButtonOutlined: () => import('@/components/BaseButtonOutlined'),
    BaseNewsSmall: () => import('@/components/events/BaseNewsSmall')
  },
  props: {
    news: {
      type: Array,
      default: null
    }
  },
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
  border: 2px solid transparent;
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