<template>
  <router-link :to="'/new/'+item.id">
    <div
      class="events-item"
    >
      <v-img
        width="100%"
        :height="heightItem"
        :src="item.img"
      />
      <div class="events-item-footer px-2 py-2">
        <div
          class="events-item-footer-title"
          :class="'events-item-footer-text-'+(typeItem?'1':'2')"
        >
          {{ item.name }}
        </div>
        <div
          v-if="typeItem"
          class="events-item-footer-text-2"
        >
          {{ item.month }}
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
    },
    heightItem: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style scoped lang="scss">
.events-item {
  position: relative;
  transition: all .5s;
  height: 100%;
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
  font-size: 18px;
  line-height: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.events-item-footer-text-2 {
  font-size: 14px;
  line-height: 19px;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>