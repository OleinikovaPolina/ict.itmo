<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      :width="size.w+100"
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
            {{ title }}
          </div>
        </v-card-title>

        <v-card-text v-if="dialog&&heightImg">
          <vue-croppie
            ref="croppieRef"
            class="enable-resize-x-false"
            :enable-exif="true"
            :enable-orientation="true"
            :enable-resize="enableResize.w"
            :boundary="{ width: size.w, height: heightImg}"
            :viewport="{ width:size.w, height:heightImg, 'type':'square' }"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <BaseButton
            text="Обрезать"
            :click-btn="true"
            @clickBtnCallback="crop(index)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogCroppieMultipleComponent',
  components: { BaseButton: () => import('@/components/admin/BaseButton') },
  props: {
    title: {
      type: String,
      default: ''
    },
    dataImg: {
      type: Array,
      default: null
    },
    dialog: {
      type: Boolean,
      default: false
    },
    size: {
      type: Object,
      default: null
    },
    enableResize: {
      type: Object,
      default: null
    },
    heightImg: {
      type: Number,
      default: 0
    }
  },
  emits: ['changeDialog', 'changeCroppie'],
  data: () => ({ res: [], index: 0 }),
  watch: {
    dialog(newValue) {
      if (newValue) {
        setTimeout(()=>{this.bind(0)},500)
      }
    }
  },
  methods: {
    bind(i) {
      this.index = i
      if (i === 0) {
        this.res = []
      }
      this.$refs.croppieRef.bind({
        url: this.dataImg[i].original
      })
    },
    crop(i) {
      let options = {
        type: 'base64'
      }
      if (this.enableResize.x && this.enableResize.y) {
        options.size = { width: this.size.w, height: this.heightImg }
      }
      let res = []
      this.$refs.croppieRef.result(options, output => {
        res.push(output)
        options.type = 'blob'
        this.$refs.croppieRef.result(options, output => {
          res.push(output)
          this.res.push(res)
          if (i === this.dataImg.length - 1) {
            this.$emit('changeCroppie', this.res)
            this.$emit('changeDialog', false)
          } else {
            this.bind(i + 1)
          }
        })
      })
    }
  }
}
</script>

<style>
.croppie-container.enable-resize-x-false .cr-resizer-vertical {
  display: none;
}

.btn-dialog-close {
  position: absolute;
  right: 0;
  top: 0;
}
</style>