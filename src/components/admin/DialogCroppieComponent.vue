<template>
  <div class="text-center">
    <v-dialog
      :value="dialog"
      :width="size.w+150"
      persistent
    >
      <v-card class="py-2">
        <v-card-title>
          <div class="text-h5 text-center mx-auto">
            {{ title }}
          </div>
        </v-card-title>

        <v-card-text v-if="dialog">
          <vue-croppie
            ref="croppieRef"
            :class="enableResize.w?'':'enable-resize-x-false'"
            :enable-orientation="true"
            :enable-resize="enableResize.h"
            :boundary="{ width: size.w+50, height: size.h+50}"
            :viewport="{ width:size.w, height:size.h, 'type':'square' }"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <BaseButton
            text="Обрезать"
            :click-btn="true"
            @clickBtnCallback="crop"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogCroppieComponent',
  components: { BaseButton: () => import('@/components/admin/BaseButton') },
  props: {
    title: {
      type: String,
      default: ''
    },
    dataImg: {
      type: String,
      default: ''
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
    }
  },
  emits: ['changeDialog', 'changeCroppie'],
  watch: {
    dialog(newValue) {
      if (newValue) {
        setTimeout(this.bind, 300)
      }
    }
  },
  methods: {
    bind() {
      this.$refs.croppieRef.bind({
        url: this.dataImg
      })
    },
    crop() {
      let options = {
        type: 'base64',
        size: {
          width: parseInt(document.querySelector('.cr-viewport.cr-vp-square').style.width) * 5,
          height: parseInt(document.querySelector('.cr-viewport.cr-vp-square').style.height) * 5
        }
      }
      if (this.enableResize.x && this.enableResize.y) {
        options.size = { width: this.size.w, height: this.size.h }
      }
      let res = []
      this.$refs.croppieRef.result(options, output => {
        res.push(output)
        options.type = 'blob'
        this.$refs.croppieRef.result(options, output => {
          res.push(output)
          this.$emit('changeCroppie', res)
        })
      })
      this.$emit('changeDialog', false)
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