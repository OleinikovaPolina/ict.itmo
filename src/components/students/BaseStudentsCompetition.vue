<template>
  <div>
    <div class=" text-center mx-auto text-h5 text-sm-h4 text-xl-h3">
      {{ title }}
    </div>
    <v-col
      cols="12"
      md="8"
      class="text-center mx-auto py-2 py-md-6 hex-subtitle"
    >
      <div v-html="description" />
    </v-col>
    <div class=" text-center mx-auto text-h6 text-sm-h5 text-xl-h4">
      {{ subtitle }}
    </div>
    <BaseHexagonContainer
      :hex-array="hexArray"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseStudentsCompetition',
  components: { BaseHexagonContainer: () => import('@/components/BaseHexagonContainer') },
  props: {
    hexArray: { type: Array, default: null },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
  }
}
</script>

<style scoped lang="scss">
.hex-subtitle {
  font-size: 24px;
  line-height: 33px;
  @media (max-width: 1264px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>