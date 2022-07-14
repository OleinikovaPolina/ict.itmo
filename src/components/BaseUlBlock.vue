<template>
  <div
    class="useful-block pa-3"
    :class="background"
  >
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="text-center pb-2 useful-block-title"
      v-html="item.name"
    />
    <!--eslint-enable-->
    <v-row>
      <v-col
        cols="3"
        class="pr-0"
      >
        <img
          alt="..."
          rel="preload"
          style="max-height: 100px"
          width="100%"
          height="100%"
          :src="item.img"
        >
      </v-col>
      <v-col
        cols="9"
        class="pl-2"
      >
        <ul class="ict-ul">
          <li
            v-for="(link,i) in item.links"
            :key="i"
          >
            <a
              v-if="link.href"
              :class="link.href?'link-arrow mr-0':''"
              :href="link.href"
            >{{ link.name }} </a>
            <span
              v-if="!link.href"
              class="subtitle-color"
            >
              {{ link.name }}
            </span>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BaseUlBlock',
  props: {
    item: {
      type: Object,
      default: null
    },
    background: {
      type: String,
      default: 'item-background'
    }
  }
}
</script>

<style scoped lang="scss">
.useful-block {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 20px;
  height: 100%;

  .useful-block-title {
    @media (min-width: 1904px) {
      font-size: 22px;
    }
  }
}
</style>