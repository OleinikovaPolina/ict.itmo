<template>
  <div class="link-arrow">
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-if="block.type===0"
      style="min-height: 0"
      class="ql-editor pa-0"
      v-html="block.content.text"
    />
    <v-row
      v-if="block.type===1"
      class="align-center"
    >
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
      <img
        alt="..."
        style="width: 100%"
        :src="block.content.imgName.croppie"
      >
      <div
        class="text-body-1"
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
    <div
      v-if="block.type===3"
      :class="'carousel-block-'+(block.id||index)"
    >
      <CarouselComponent
        :slider="block.content.imagesName"
        :columns="1"
      >
        <template #item="slotProps">
          <v-col cols="12">
            <div>
              <img
                alt=""
                :class="'carousel-img-'+(block.id||index)"
                :src="slotProps.item.croppie"
                style="object-fit: contain;  width: 100%;min-height: 150px"
                @load="getHeight(slotProps.item.croppie)"
              >
            </div>
          </v-col>
        </template>
        <template #subtitle>
          <div
            class="text-body-1"
            style="position: absolute; opacity: 0.7"
          >
            {{ block.content.text }}
          </div>
        </template>

        <template
          v-if="edit"
          #index="slotProps"
        >
          <v-btn
            icon
            color="white"
            class="rounded-0 rounded-bl-circle btn-edit"
            @click="$emit('beforeCropMultipleInsertOne',block,slotProps.index)"
          >
            <v-icon color="#0071B2">
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
      </CarouselComponent>
    </div>
    <div v-if="block.type===4">
      <div class="d-flex">
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
    },
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ['beforeCropInsert', 'beforeCropMultipleInsertOne'],
  methods: {
    getHeight(src) {
      if (src) {
        let img = new Image()
        img.onload = () => {
          let height = img.height
          let blocks = document.querySelectorAll('.carousel-img-' + (this.block.id || this.index))
          if (blocks.length) {
            height = Math.min(height, blocks[0].height)
            blocks.forEach(x => x.height = height)
            document.querySelector('.carousel-block-' + (this.block.id || this.index) + ' .v-window__container').style.height = `${height + 6}px`
          }
        }
        img.src = src
      }
    }
  }
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