<template>
  <div class="useful-block item-background pa-3">
    <div class="text-center pb-2">
      {{ item.name }}
    </div>
    <v-row>
      <v-col
        cols="3"
        class="pr-0"
      >
        <v-img
          width="100%"
          height="100%"
          max-height="100"
          contain
          :src="item.img"
        />
      </v-col>
      <v-col
        cols="9"
        class="pl-2"
      >
        <ul>
          <li
            v-for="(link,i) in item.links"
            :key="i"
          >
            <a
              :class="link.href?'link-arrow':''"
              :href="link.href"
            >{{ link.name }} </a>
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
    }
  }
}
</script>

<style scoped>
.useful-block {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 20px;
  height: 100%;
}
</style>