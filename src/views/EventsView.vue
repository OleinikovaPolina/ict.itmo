<template>
  <div>
    <!-- Carousel  -->
    <v-container class="pb-2 pb-md-4 pb-xl-8">
      <CarouselComponent
        :slider="slider"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col cols="12">
            <div>
              <v-img
                width="100%"
                height="400"
                cover
                :src="slotProps.item.img"
              />
            </div>
          </v-col>
        </template>
      </CarouselComponent>
    </v-container>
    <!--  Announcements  -->
    <LineComponent
      id="1"
      color="#18FFBA"
      width="40%"
      position="left"
      top="15px"
    />
    <LineComponent
      id="2"
      color="#FF0281"
      width="70%"
      position="right"
      top="20px"
    />
    <div class="section-background py-4 py-md-8 py-xl-14">
      <v-container>
        <div class="pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Анонсы
        </div>
        <v-row>
          <v-col
            v-for="(item,i) in items.slice(0,6)"
            :key="i"
            cols="6"
            md="4"
          >
            <EventsAnnouncements :announ="item" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="3"
      color="#FF776E"
      width="30%"
      position="left"
    />
    <LineComponent
      id="4"
      color="#6A30F4"
      width="60%"
      position="left"
      top="10px"
    />
    <!--  News  -->
    <NewsComponent class="pb-2 pb-md-8 pb-xl-12"/>
    <!-- events   -->
    <LineComponent
      id="5"
      color="#FF776E"
      width="60%"
      position="left"
    />
    <LineComponent
      id="6"
      color="#FF0281"
      width="60%"
      position="right"
      top="20px"
    />
    <div class="section-background py-4 py-md-8 py-xl-14">
      <v-container>
        <div class="text-center mx-auto pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Мероприятия
        </div>
        <v-row class="d-flex align-stretch justify-center">
          <v-col
            cols="12"
            md="5"
            class="px-8  pr-md-0 pl-md-3"
            style="z-index: 1"
          >
            <EventsGalleryComponent
              :item="items[0]"
              :height-item="$vuetify.breakpoint.mdAndUp?'400':'250'"
            />
          </v-col>
          <v-col
            cols="12"
            md="7"
            class="pl-md-0"
            style="z-index: 0"
          >
            <div
              v-if="$vuetify.breakpoint.mdAndUp"
              style="height: 400px"
              class="d-flex flex-wrap align-content-space-between"
            >
              <div
                v-for="n in 6"
                :key="n"
                :style="{width:n===1||n===6?'44%':'28%'}"
                style="padding-left: 20px"
              >
                <EventsGalleryComponent
                  :item="items[n]"
                  :type-item="n===1||n===6"
                  :height-item="'190'"
                />
              </div>
            </div>
            <div
              v-else
              class="d-flex flex-wrap justify-space-between"
            >
              <div
                v-for="n in 4"
                :key="n"
                :style="{width:n===1||n===4?'47%':'45%',height:'200px'}"
                :class="n===1?'events-item-1':n===4?'events-item-2':''"
              >
                <EventsGalleryComponent
                  :item="items[n]"
                  :type-item="n===1||n===4"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="7"
      color="#18FFBA"
      width="35%"
      position="left"
      top="-10px"
    />
    <LineComponent
      id="8"
      color="#6A30F4"
      width="75%"
      position="right"
      top="-5px"
    />
  </div>
</template>

<script>
export default {
  name: 'EventsView',
  components: {
    LineComponent: () => import('@/components/LineComponent'),
    EventsGalleryComponent: () => import('@/components/events/EventsGalleryComponent'),
    EventsAnnouncements: () => import('@/components/events/EventsAnnouncementsComponent'),
    CarouselComponent: () => import('@/components/CarouselComponent'),
    NewsComponent: () => import('@/components/events/NewsComponent')
  },
  data: () => ({
    slider: [
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') },
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') },
      { img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png') }
    ],
    items: [
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        id: 1, img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      },
      {
        date: new Date(), name: 'Название мероприятия', place: 'Место', month: 'января',
        img: require('../assets/images/delete/unsplash_JjjSPPzzpkU.png'),
        items: [{ type: 0, name: 'Образование' }, { type: 0, name: 'Blockchain' }]
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.events-item-1 {
  padding-bottom: 30px;
}

.events-item-2 {
  padding-top: 30px;
}
</style>