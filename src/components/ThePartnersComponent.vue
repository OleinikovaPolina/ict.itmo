<template>
  <v-container>
    <div class="d-flex justify-space-between align-center pb-2 pt-md-10 pb-md-6">
      <div class="text-center mx-auto text-h6 text-sm-h4">
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
          <a
            :href="slotProps.item.link"
            target="_blank"
          >
            <div
              class="pa-2 pa-md-4 partner-container"
              :class="'rounded-'+($vuetify.breakpoint.mdAndUp?'xl':'lg')+' partner-container-'+(slotProps.index<=columns/2?1:2)"
            >
              <v-img
                width="100%"
                height="100%"
                contain
                :src="slotProps.item.img"
              />
            </div>
          </a>
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
      { link: '', img: require('../assets/images/partners/vk.svg') },
      { link: '', img: require('../assets/images/partners/red.svg') },
      { link: '', img: require('../assets/images/partners/napoleon.svg') },
      { link: '', img: require('../assets/images/partners/Layer1.svg') },
      { link: '', img: require('../assets/images/partners/cisco.svg') },
      { link: '', img: require('../assets/images/partners/ascaeen.svg') },
      { link: '', img: require('../assets/images/partners/raidix.svg') },
      { link: '', img: require('../assets/images/partners/rardio.svg') },
      { link: '', img: require('../assets/images/partners/Transas_logo 1.svg') },
      { link: '', img: require('../assets/images/partners/emc.svg') },
      { link: '', img: require('../assets/images/partners/Vector (7).svg') },
      { link: '', img: require('../assets/images/partners/Luxoft.svg') },
      { link: '', img: require('../assets/images/partners/micro 1.svg') },
      { link: '', img: require('../assets/images/partners/Group.svg') },
      { link: '', img: require('../assets/images/partners/huawei.svg') },
      { link: '', img: require('../assets/images/partners/кщы.svg') }
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
  height: 90px;
  @media (max-width: 600px) {
    height: 50px;
  }
}

.partner-container-2 {
  height: 124px;
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