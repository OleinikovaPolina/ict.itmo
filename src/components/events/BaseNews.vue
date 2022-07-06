<template>
  <div>
    <div class="d-flex justify-space-between align-center pb-1 pb-md-2">
      <div
        class="text-h6 text-sm-h4 text-xl-h3"
        style="line-height: normal"
      >
        {{ data.title }}
      </div>
      <div class="d-flex">
        <div
          v-if="data.datePublish"
          class="d-none d-md-block"
        >
          {{ $moment(data.datePublish).format('DD.MM.YYYY') + ',&nbsp;' + data.timePublish }}
        </div>
        <div
          v-if="data.datePublished"
          class="d-none d-md-block"
        >
          {{ $moment(data.datePublished).format('DD.MM.YYYY,&nbsp;HH:mm') }}
        </div>
        <div
          v-if="data.views"
          class="pl-2 pl-md-6 d-flex align-center"
        >
          <v-icon
            color="#00A1FF"
            class="mr-1"
          >
            mdi-eye
          </v-icon>
          {{ data.views }}
        </div>
      </div>
    </div>
    <div
      v-if="data.datePublish"
      class="d-md-none"
    >
      {{ $moment(data.datePublish).format('DD.MM.YYYY') + ', ' + data.timePublish }}
    </div>
    <div
      v-if="data.datePublished"
      class="d-md-none"
    >
      {{ $moment(data.datePublished).format('DD.MM.YYYY, HH:mm') }}
    </div>
    <div
      v-if="data.tags"
      class="d-flex flex-wrap pb-2"
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
    <div v-if="(data.dateStart||data.date)&&isDate">
      <b>Дата проведения: </b>
      <span v-if="data.timeStart">{{ data.timeStart }} </span>
      <span v-if="$moment(data.dateStart || data.date).format('HH')!=='00'">
        {{ $moment(data.dateStart || data.date).format('HH:mm') }} </span>
      <span>
        {{ $moment(data.dateStart || data.date).format('D MMMM YYYY года') }}
      </span>
      <span
        v-if="data.dateEnd && $moment(data.dateStart).format('D MMMM YYYY года')!==$moment(data.dateEnd).format('D MMMM YYYY года')"
      >
        -
        {{ $moment(data.dateEnd).format('D MMMM YYYY года') }}
      </span>
    </div>

    <div
      v-for="(block,i) in data.blocks"
      :key="i"
      class="pt-6"
    >
      <BaseNewsBlocks
        :block="block"
        :index="i"
      />
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
    },
    isDate: {
      type: Boolean,
      default: true
    }
  }
}
</script>