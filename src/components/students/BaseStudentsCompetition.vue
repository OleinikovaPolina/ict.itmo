<template>
  <div>
    <div class=" text-center mx-auto text-h5 text-sm-h4 text-xl-h3">
      {{ block.title }}
    </div>
    <v-col
      cols="12"
      md="8"
      class="text-center mx-auto py-2 py-md-6 hex-subtitle"
    >
      <div v-html="block.description" />
    </v-col>
    <div class=" text-center mx-auto text-h6 text-sm-h5 text-xl-h4">
      {{ block.subtitle }}
    </div>
    <BaseHexagonContainer
      :hex-array="block.winnersHex"
      :link="'article/3'"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseStudentsCompetition',
  components: { BaseHexagonContainer: () => import('@/components/BaseHexagonContainer') },
  props: {
    block:{
      type:Object,
      default:null
    }
  }
}
</script>

<style scoped lang="scss">
.hex-subtitle {
  font-size: 24px;
  line-height: normal;
  @media (max-width: 1904px) {
    font-size: 20px;
  }
  @media (max-width: 1264px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
</style>