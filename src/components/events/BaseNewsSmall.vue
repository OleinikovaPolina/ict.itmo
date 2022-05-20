<template>
  <router-link
    :to="'/new/'+news.id"
    class="text-decoration-none"
    style="height: 100%"
  >
    <v-img
      class="mb-4"
      width="100%"
      :min-height="$vuetify.breakpoint.xsOnly?100:100"
      :src="news.image['url']"
    />
    <div class="news-subtitle mb-1">
      {{ $moment(news.date).format('DD.MM.YYYY') }}
    </div>
    <div class="news-name subtitle-color">
      {{ news.title }}
    </div>
    <div class="d-flex flex-wrap pt-md-2">
      <BaseChip
        v-for="(tag,i) in news.tags"
        :key="i"
        class="mt-2"
        :item="tag"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BaseNews',
  components: { BaseChip: () => import('../BaseChip') },
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
  font-size: 30px;
  line-height: 34px;
  font-family: "OpenSans-Bold", sans-serif !important;
  @media (max-width: 1904px) {
    font-size: 20px;
    line-height: 22px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.news-subtitle {
  font-size: 20px;
  line-height: 25px;
  @media (max-width: 1904px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 17px;
  }
}
</style>