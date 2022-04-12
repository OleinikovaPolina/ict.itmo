<template>
  <div class="link-arrow">
    <div
      v-if="block.type===0"
      style="min-height: 0"
      class="ql-editor pa-0"
      v-html="block.content.text"
    />
    <v-row v-if="block.type===1">
      <v-col
        v-for="(block2,i) in block.content.blocks"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseNewsBlocks :block="block2" />
      </v-col>
    </v-row>
    <div
      v-if="block.type===2"
      style="position: relative"
    >
      <v-img
        width="100%"
        :src="block.content.imgName.croppie"
      />
      <div
        class="text-body-1 pt-2"
        style="opacity: 0.7"
      >
        {{ block.content.text }}
      </div>
      <v-btn
        v-if="edit"
        icon
        color="white"
        class="rounded-0 rounded-bl-circle btn-edit"
        @click="$emit('beforeCropInsert')"
      >
        <v-icon color="#0071B2">
          mdi-pencil
        </v-icon>
      </v-btn>
    </div>
    <div v-if="block.type===3">
      <CarouselComponent
        :slider="block.content.imagesName"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col cols="12">
            <div class="pa-2">
              <v-img
                width="100%"
                height="400"
                cover
                :src="slotProps.item.croppie"
              />
            </div>
          </v-col>
        </template>
        <template #subtitle>
          <div
            class="text-body-1 pt-2 pl-2"
            style="position: absolute; opacity: 0.7"
          >
            {{ block.content.text }}
          </div>
        </template>
      </CarouselComponent>
    </div>
    <div v-if="block.type===4">
      <div class="d-flex align-start">
        <div>
          <v-img
            width="50"
            height="50"
            src="../../assets/images/news/bxs_quote-alt-left.svg"
          />
        </div>
        <div class="pl-4">
          {{ block.content.text }}
        </div>
      </div>
      <div
        class="text-end font-weight-bold"
        style="color:#2DC0C5"
      >
        {{ block.content.author }}
      </div>
    </div>
    <div v-if="block.type===5">
      <div class="text-h6 text-sm-h5 default-color">
        {{ block.content.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNewsBlocks',
  components: {
    CarouselComponent: () => import('@/components/CarouselComponent')
  },
  props: {
    block: {
      type: Object,
      default: null
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['beforeCropInsert']
}
</script>

<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

.btn-edit {
  position: absolute;
  top: 0;
  right: 0;
  border: 3px solid #0071B2;
  background-color: white
}
</style>