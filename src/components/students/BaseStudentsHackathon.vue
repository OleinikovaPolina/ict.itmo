<template>
  <v-row
    v-if="block.title&&block.description&&block.sliderImagesNames.length"
    class="d-flex align-center justify-center pt-xl-8"
  >
    <v-col class="text-center d-md-none">
      <div class="text-h5 text-sm-h4">
        {{ block.title }}
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
          {{ block.title }}
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="text-subtitle-1 pb-6 default-color"
          v-html="block.description"
        />
      </div>
      <div class="mx-auto mx-md-0">
        <BaseButton :link="'/article/2'" />
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="7"
    >
      <CarouselComponent
        :slider="block.sliderImagesNames.map(x=>x.croppie)"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col
            cols="12"
          >
            <div>
              <img
                alt="..."
                class="carousel-img"
                :src="slotProps.item"
                style="object-fit: contain;  width: 100%"
                @load="getHeight()"
              >
            </div>
          </v-col>
        </template>
        <template #subtitle>
          <div
            class="text-body-1"
            style="position: absolute; opacity: 0.7"
          >
            {{ block.sliderText }}
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
    block: {
      type: Object,
      default: null
    }
  },
  methods: {
    getHeight() {
      if (this.block.sliderImagesNames[0]) {
        let img = new Image()
        img.onload = () => {
          let height = img.height
          if (document.querySelectorAll('.carousel-img').length) {
            height = Math.min(height, document.querySelectorAll('.carousel-img')[0].height)
            document.querySelectorAll('.carousel-img').forEach(x => x.height = height)
          }
        }
        img.src = this.block.sliderImagesNames[0].croppie
      }
    }
  }
}
</script>
