<template>
  <router-link
    :to="'/news/'+news.id"
    class="text-decoration-none"
    style="height: 100%"
  >
    <v-img
      v-if="isLoad"
      class="mb-2 mb-md-4"
      :style="{width: '100%'}"
      :src="news.image['url']"
      :min-height="$vuetify.breakpoint.xsOnly?'65px':'100px'"
    >
      <template #placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate />
        </v-row>
      </template>
    </v-img>
    <div class="news-subtitle mb-md-1">
      {{ $moment(news.date).format('D MMMM YYYY') }}
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
  },
  data: () => ({ isLoad: true }),
  watch: {
    news: function() {
      this.isLoad = false
      setTimeout(() => {
        this.isLoad = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.news-name {
  font-size: 30px;
  line-height: 34px;
  font-family: "OpenSans-Bold", sans-serif !important;
  word-wrap: break-word;
  @media (max-width: 1904px) {
    font-size: 20px;
    line-height: 22px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
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