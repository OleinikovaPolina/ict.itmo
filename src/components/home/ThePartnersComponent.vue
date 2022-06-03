<template>
  <v-container>
    <div class="d-flex justify-space-between align-center pb-2 pt-md-10 pb-md-6">
      <div class="text-center mx-auto text-h6 text-sm-h4 text-xl-h3">
        Партнеры
      </div>
    </div>
    <CarouselComponent
      :slider="slider"
      :columns="columns"
    >
      <template #item="slotProps">
        <v-col
          cols="6"
          sm="4"
          :class="slotProps.index<=columns/2?'partner-col-1':''"
        >
          <div
            class="pa-2 pa-md-4 partner-container"
            :class="'rounded-'+($vuetify.breakpoint.mdAndUp?'xl':'lg')+' partner-container-'+(slotProps.index<=columns/2?1:2)"
          >
            <v-img
              width="100%"
              height="100%"
              contain
              :src="slotProps.item"
            />
          </div>
        </v-col>
      </template>
    </CarouselComponent>
  </v-container>
</template>

<script>
export default {
  name: 'PartnersComponent',
  components: { CarouselComponent: () => import('@/components/CarouselComponent') },
  data: () => ({
    slider: [
      require('../../assets/images/partners/vk.svg'),
      require('../../assets/images/partners/blue_horizontal_logo_sbertech 1.svg'),
      require('../../assets/images/partners/napoleon.svg'),
      require('../../assets/images/partners/Yandex_official_logo 1.svg'),
      require('../../assets/images/partners/Sirius_educational_centre_horizontal_rus 1.svg'),
      require('../../assets/images/partners/кщы.svg'),
      require('../../assets/images/partners/6.svg'),
      require('../../assets/images/partners/orale.svg'),
      require('../../assets/images/partners/main-logo 1.svg'),
      require('../../assets/images/partners/emc.svg'),
      require('../../assets/images/partners/Vector (7).svg'),
      require('../../assets/images/partners/Luxoft.svg'),
      require('../../assets/images/partners/1280px-OZON_2019 1.svg'),
      require('../../assets/images/partners/Group.svg'),
      require('../../assets/images/partners/huawei.svg'),
      require('../../assets/images/partners/10.svg')
    ]
  }),
  computed: {
    columns() {
      return this.$vuetify.breakpoint.smAndUp ? 6 : 4
    }
  }
}
</script>
<style scoped lang="scss">
.partner-container {
  background-color: white;
}

.partner-container-1 {
  height: 120px;
  @media (max-width: 1904px) {
    height: 90px;
  }
  @media (max-width: 600px) {
    height: 50px;
  }
}

.partner-container-2 {
  height: 180px;
  @media (max-width: 1904px) {
    height: 124px;
  }
  @media (max-width: 600px) {
    height: 80px;
  }
}

.partner-col-1 {
  @media (max-width: 600px) {
    padding-bottom: 0;
  }
}
</style>