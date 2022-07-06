<template>
  <div v-if="isLoad">
    <!-- Carousel  -->
    <v-container class="pb-8 pb-xl-10">
      <CarouselComponent
        :slider="slider"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col cols="12">
            <router-link :to="slotProps.item.contentType+'/'+slotProps.item.id">
              <v-img
                width="100%"
                :src="slotProps.item.slideImage.url"
              />
            </router-link>
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
      top="10px"
    />
    <LineComponent
      id="2"
      color="#FF0281"
      width="70%"
      position="right"
      top="17.5px"
    />
    <div class="section-background py-4 py-md-8 py-xl-14">
      <v-container>
        <div class="pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Анонсы
        </div>
        <v-row>
          <v-col
            v-for="(item,i) in announcements.results"
            :key="i"
            cols="6"
            md="4"
          >
            <EventsAnnouncements :announcement="item" />
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
    <NewsComponent
      v-if="news"
      class="pb-2 pb-md-8 pb-xl-12"
      :news="news.results"
    />
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
    <div
      v-if="events.length"
      class="section-background py-4 py-md-8 py-xl-14"
    >
      <v-container>
        <div class="text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3">
          Мероприятия
        </div>
        <div class="d-flex align-stretch justify-center flex-wrap">
          <div
            :style="{width:$vuetify.breakpoint.mdAndUp?'36%':'100%'}"
            class="px-8 pr-md-0 pl-md-3 pb-4 pb-md-0"
            style="z-index: 1"
          >
            <EventsGalleryComponent
              :item="events[0]"
            />
          </div>
          <div
            :style="{width:$vuetify.breakpoint.mdAndUp?'64%':'100%'}"
            class="pl-md-0"
            style="z-index: 0"
          >
            <div
              v-if="$vuetify.breakpoint.mdAndUp"
              class="d-flex flex-wrap align-content-space-between fill-height"
            >
              <div
                v-for="n in 6"
                :key="n"
                :style="{width:n===1||n===6?'43%':'28%'}"
                style="padding-left: 20px"
              >
                <EventsGalleryComponent
                  :item="events[n]"
                  :type-item="n===1||n===6"
                />
              </div>
            </div>
            <div
              v-else
              class="d-flex flex-wrap justify-space-between align-stretch"
            >
              <div
                v-for="n in 4"
                :key="n"
                class="pt-2 pt-sm-6"
                :style="{width:n===1||n===4?'48%':'45%'}"
                :class="n===2?'pb-5':n===3?'pt-5 pt-sm-11':''"
              >
                <EventsGalleryComponent
                  :item="events[n+1]"
                  :type-item="n===1||n===4"
                />
              </div>
            </div>
          </div>
        </div>
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
  <div
    v-else
    class="d-flex justify-center fill-height align-center"
    style="min-height: 75vh"
  >
    <v-progress-circular indeterminate />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
    isLoad: false
  }),
  computed: mapState('news', ['news', 'announcements', 'events', 'slider']),
  async mounted() {
    await this.getNews()
    await this.getAnnouncements()
    await this.getEvents()
    await this.getSlider()
    this.isLoad = true
  },
  methods: mapActions('news', ['getNews', 'getAnnouncements', 'getEvents', 'getSlider'])
}
</script>
