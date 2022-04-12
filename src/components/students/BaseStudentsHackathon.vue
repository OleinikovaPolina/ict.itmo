<template>
  <v-row
    v-if="name&&description&&sliderImagesNames"
    class="d-flex align-stretch justify-center pt-xl-8"
  >
    <v-col class="text-center d-md-none">
      <div class="text-h5 text-sm-h4">
        {{ name }}
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="5"
      :class="$vuetify.breakpoint.smAndDown?'text-center':''"
      class="d-flex flex-column justify-space-around order-2 order-md-0 "
    >
      <div>
        <div class="pb-8 text-h4 text-xl-h3 d-none d-md-block">
          {{ name }}
        </div>
        <div
          class="text-subtitle-1 pb-6"
          v-html="description"
        />
      </div>
      <div class="mx-auto mx-md-0">
        <BaseButton link="/" />
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="7"
    >
      <CarouselComponent
        :slider="sliderImagesNames"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col cols="12">
            <div>
              <v-img
                width="100%"
                :height="$vuetify.breakpoint.xs?200:$vuetify.breakpoint.xl?600:400"
                cover
                :src="slotProps.item"
              />
            </div>
          </v-col>
        </template>
        <template #subtitle>
          <div
            class="text-body-1 pt-2"
            style="position: absolute; opacity: 0.7"
          >
            {{ text }}
          </div>
        </template>
      </CarouselComponent>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BaseStudentsHackathon',
  components: {
    CarouselComponent: () => import('@/components/CarouselComponent'),
    BaseButton: () => import('@/components/BaseButton')
  },
  props: {
    name: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    sliderImagesNames: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>

</style>