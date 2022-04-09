<template>
  <div>
    <div class="d-flex justify-space-between align-center pb-md-2">
      <div class="text-h6 text-sm-h4 text-xl-h3">
        {{ data.name }}
      </div>
      <div class="d-flex">
        <div v-if="data.datePublish">
          {{ $moment(data.datePublish).format('DD.MM.YYYY') + ', ' + data.timePublish }}
        </div>
        <div class="pl-6">
          <v-icon color="#00A1FF">
            mdi-eye
          </v-icon>
          0
        </div>
      </div>
    </div>
    <div
      v-if="data.tags"
      class="d-flex flex-wrap pb-md-2"
    >
      <BaseChip
        v-for="(item,i) in data.tags"
        :key="i"
        class="mt-2"
        :item="item"
      />
    </div>
    <div v-if="data.place">
      <b>Место проведения: </b>{{ data.place }}
    </div>
    <div>
      <b>Дата проведения: </b>
      <span v-if="data.timeStart">{{ data.timeStart }} </span>
      <span v-if="data.dateStart">{{ $moment(data.dateStart).format('DD MMMM YYYY года') }}</span>
    </div>

    <div
      v-for="(block,i) in data.blocks"
      :key="i"
      class="pt-6"
    >
      <BaseNewsBlocks :block="block" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNews',
  components: {
    BaseNewsBlocks: () => import('@/components/events/BaseNewsBlocks'),
    BaseChip: () => import('@/components/BaseChip')
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>