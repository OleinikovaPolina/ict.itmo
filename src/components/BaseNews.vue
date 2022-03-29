<template>
  <router-link
    :to="'/new/'+news.id"
    class="text-decoration-none"
  >
    <v-img
      class="mb-4"
      :height="$vuetify.breakpoint.smAndUp?'200':'160'"
      width="100%"
      :src="news.img"
    />
    <div class="news-subtitle mb-1">
      {{ news.date }}
    </div>
    <div class="news-name subtitle-color">
      {{ news.name }}
    </div>
    <div class="d-flex flex-wrap pt-md-2">
      <BaseChip
        v-for="(item,i) in news.items"
        :key="i"
        :item="item"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BaseNews',
  components: { BaseChip: () => import('./BaseChip') },
  props: {
    news: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.news-name {
  font-size: 20px;
  line-height: 22px;
  font-family: "OpenSans-Bold", sans-serif !important;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.news-subtitle {
  font-size: 16px;
  line-height: 19px;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 17px;
  }
}
</style>