<template>
  <router-link :to="'/event/'+item.id">
    <div
      class="events-item"
    >
      <v-img
        min-height="100"
        width="100%"
        :src="item.image['url']"
      />
      <div class="events-item-footer px-2 py-2">
        <div
          class="events-item-footer-title"
          :class="'events-item-footer-text-'+(typeItem?'1':'2')"
        >
          {{ item.title }}
        </div>
        <div
          v-if="typeItem"
          class="events-item-footer-text-2"
        >
          {{ $moment(item.dateStart).format('DD MMMM') }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventsGalleryComponent',
  props: {
    item: {
      type: Object,
      default: null
    },
    typeItem: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.events-item {
  position: relative;
  transition: all .5s;
  //height: 100%;
}

.events-item:hover {
  transform: scale(1.05);
}

.events-item-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(46, 156, 239, 0) 0.01%, #2E9CEF 122%);
  backdrop-filter: blur(4px);
}

.events-item-footer-title {
  font-family: "OpenSans-Bold", sans-serif !important;
}

.events-item-footer-text-1 {
  font-size: 24px;
  line-height: 26px;
  @media (max-width: 1904px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.events-item-footer-text-2 {
  font-size: 20px;
  line-height: 22px;
  @media (max-width: 1904px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>