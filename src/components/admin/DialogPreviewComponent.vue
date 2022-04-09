<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      width="75%"
    >
      <v-card class="py-6">
        <v-btn
          class="btn-close mr-1 mt-1"
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

        <v-card-text>
          <v-row
            v-if="dialogContent.type===1"
            no-gutters
          >
            <v-col
              v-for="(block2,i) in dialogContent.content.blocks"
              :key="i"
              cols="12"
              md="6"
            >
              <BaseNewsBlocks :block="block2" />
            </v-col>
          </v-row>
          <div v-if="dialogContent.type===3">
            <CarouselComponent
              :slider="dialogContent.content.imagesName"
              :columns="1"
            >
              <template #item="slotProps">
                <v-col cols="12">
                  <div class="pa-2">
                    <v-img
                      width="100%"
                      height="400"
                      cover
                      :src="slotProps.item"
                    />
                  </div>
                </v-col>
              </template>
              <template #subtitle>
                <div
                  class="text-body-1 pt-2 pl-2"
                  style="position: absolute; opacity: 0.7"
                >
                  {{ dialogContent.content.text }}
                </div>
              </template>
            </CarouselComponent>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <BaseButton
            text="Сохранить"
            :click-btn="true"
            @clickBtnCallback="$emit('changeDialog',false)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BaseNewsBlocks from '@/components/events/BaseNewsBlocks'
import CarouselComponent from '@/components/CarouselComponent'

export default {
  name: 'DialogPreviewComponent',
  components: { CarouselComponent, BaseNewsBlocks, BaseButton: () => import('@/components/admin/BaseButton') },
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
  emits: ['changeDialog']
}
</script>

<style scoped>
.btn-close {
  position: absolute;
  right: 0;
  top:0;
}
</style>