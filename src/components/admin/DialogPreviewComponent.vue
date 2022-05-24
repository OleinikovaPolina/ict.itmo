<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      width="85%"
      persistent
    >
      <v-card class="py-6">
        <v-btn
          class="btn-dialog-close mr-1 mt-1"
          icon
          large
          @click="$emit('changeDialog',false)"
        >
          <v-icon
            large
            color="#0071B2"
          >
            mdi-close
          </v-icon>
        </v-btn>

        <v-card-title>
          <div class="text-h5 text-center mx-auto pb-3">
            {{ dialogContent.type === 3 ? 'Просмотр слайдера' : 'Просмотр двойного блока' }}
          </div>
        </v-card-title>

        <v-card-text v-if="dialog">
          <v-row v-if="dialogContent.type===1">
            <v-col
              v-for="(block2,i) in dialogContent.content.blocks"
              :key="i"
              cols="12"
              md="6"
            >
              <BaseNewsBlocks
                :block="block2"
                :edit="true"
                @beforeCropMultipleInsertOne="(el,index)=>{$emit('beforeCropMultipleInsertOne',el,index)}"
                @beforeCropInsert="$emit('beforeCropInsert',block2)"
              />
            </v-col>
          </v-row>
          <div
            v-if="dialogContent.type===3"
            style="position: relative"
          >
            <CarouselComponent
              :slider="dialogContent.content.imagesName.map(x=>x.croppie)"
              :columns="1"
            >
              <template #item="slotProps">
                <v-col cols="12">
                  <div>
                    <img
                      alt=""
                      class="carousel-img"
                      :src="slotProps.item"
                      style="object-fit: contain;  width: 100%"
                      @load="getHeight(slotProps.item)"
                    >
                  </div>
                </v-col>
              </template>
              <template #subtitle>
                <div
                  class="text-body-1"
                  style="position: absolute; opacity: 0.7"
                >
                  {{ dialogContent.content.text }}
                </div>
              </template>
              <template #index="slotProps">
                <v-btn
                  icon
                  color="white"
                  class="rounded-0 rounded-bl-circle btn-edit"
                  @click="$emit('beforeCropMultipleInsertOne',dialogContent,slotProps.index)"
                >
                  <v-icon color="#0071B2">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
            </CarouselComponent>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogPreviewComponent',
  components: {
    CarouselComponent: () => import('@/components/CarouselComponent'),
    BaseNewsBlocks: () => import('@/components/events/BaseNewsBlocks')
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    dialogContent: {
      type: Object,
      default: null
    }
  },
  emits: ['changeDialog', 'beforeCropInsert', 'beforeCropMultipleInsertOne'],
  watch: {
    dialog: {
      handler(newVal) {
        if (newVal && this.dialogContent.content.imagesName) {
          if (this.dialogContent.content.imagesName[0].croppie) {
            this.getHeight(this.dialogContent.content.imagesName[0].croppie)
          }
        }
      },
      deep: true
    }
  },
  methods: {
    getHeight(src) {
      if (src) {
        let img = new Image()
        img.onload = () => {
          let height = img.height
          if (document.querySelectorAll('.carousel-img').length) {
            height = Math.min(height,document.querySelectorAll('.carousel-img')[0].height)
            document.querySelectorAll('.carousel-img').forEach(x => x.height = height)
          }
        }
        img.src = src
      }
    }
  }
}
</script>
<style scoped>
.btn-edit {
  position: absolute;
  top: 8px;
  right: 8px;
  border: 3px solid #0071B2;
  background-color: white
}
</style>