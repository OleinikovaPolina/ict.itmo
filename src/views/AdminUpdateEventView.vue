<template>
  <v-container v-if="isLoad">
    <!--  Form  -->
    <div v-if="!isPreview">
      <div class="pb-2 pb-md-4 text-h6 text-md-h5">
        Мероприятия
      </div>
      <!--  name  -->
      <div class="input-bordered mb-6">
        <v-text-field
          v-model="form.title"
          placeholder="Название"
          outlined
          dense
          class="input-border-0 text-h6 input-blue font-weight-bold"
          :dark="theme==='dark'"
          hide-details
        />
      </div>
      <!--  cover  -->
      <div class="input-bordered mb-6 py-6">
        <div class="input-bordered-label app-background">
          Обложка мероприятия <span class="error--text">*</span>
        </div>
        <div
          class="input-file-container mx-auto"
          @dragover.prevent
          @drop.prevent
        >
          <input
            id="cover"
            type="file"
            accept="image/*"
            @change="(e)=>{beforeCrop('cover',coverSizes[$route.params.id-1],'Обложка мероприятия',e.target.files[0])}"
          >
          <label
            for="cover"
            class="d-flex align-center py-6 px-12 text-center"
            @drop="(e)=>{beforeCrop('cover',coverSizes[$route.params.id-1],'Обложка мероприятия',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../assets/images/admin/ep_picture.svg"
            />
            Выберите изображение обложки или перетащите файл<br>
            Размер {{ getCoverSize() }}
          </label>
        </div>
        <div
          v-if="form.cover"
          class="text-center"
        >
          {{ form.cover.name }}
        </div>
      </div>
      <!--  changing blocks  -->
      <DraggableInputs
        :blocks="form.blocks"
        @changeDialogContent="changeDialogContent"
        @changeDialog="changeDialog"
        @beforeCropInsert="beforeCropInsert"
        @deleteBlock="deleteBlock"
        @updateBlock="updateBlock"
        @beforeCropMultipleInsert="beforeCropMultipleInsert"
      />
      <!--   add block   -->
      <div
        class="px-0 subtitle-color"
        style="cursor: pointer;width: fit-content"
        @click="addBlock"
      >
        <v-icon color="#0071B2">
          mdi-plus-circle-outline
        </v-icon>
        Добавить поле
      </div>
      <!--  time event    -->
      <v-row
        v-if="haveDates()"
        class="pt-4"
      >
        <v-col
          cols="12"
          md="3"
        >
          <div
            class="pl-4 subtitle-color text-body-2"
            style="opacity: 0.7"
          >
            Дата начала мероприятия<span class="error--text">*</span>
          </div>
          <v-text-field
            v-model="form.dateStart"
            type="date"
            outlined
            dense
            class="search-input"
            :dark="theme === 'dark'"
            :color="theme === 'dark'?'#00A1FF':'#005A8E'"
            hide-details
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div
            class="pl-4 subtitle-color text-body-2"
            style="opacity: 0.7"
          >
            Дата конца мероприятия
          </div>
          <v-text-field
            v-model="form.dateEnd"
            type="date"
            outlined
            dense
            class="search-input"
            :dark="theme ==='dark'"
            :color="theme ==='dark'?'#00A1FF':'#005A8E'"
            hide-details
          />
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <div
            class="pl-4 subtitle-color text-body-2"
            style="opacity: 0.7"
          >
            Время начала
          </div>
          <v-text-field
            v-model="form.timeStart"
            type="time"
            outlined
            dense
            class="search-input"
            :dark="theme==='dark'"
            :color="theme==='dark'?'#00A1FF':'#005A8E'"
            hide-details
          />
        </v-col>
      </v-row>
      <!--   buttons  -->
      <div class="d-flex pt-6">
        <BaseButton
          text="Опубликовать"
          :click-btn="true"
          @clickBtnCallback="publish"
        />
        <BaseButtonOutlined
          class="ml-4"
          text="Предпросмотр"
          :click-btn="true"
          @clickBtnCallback="preview"
        />
      </div>
    </div>
    <!--  Preview  -->
    <div v-else>
      <BaseNews :data="previewData" />
      <BaseButtonOutlined
        text="Назад"
        :click-btn="true"
        @clickBtnCallback="isPreview = false"
      />
    </div>
    <!--  dialogs  -->
    <DialogPreviewComponent
      :dialog="dialog"
      :dialog-content="dialogContent"
      @changeDialog="changeDialog"
      @beforeCropInsert="beforeCropInsert"
      @beforeCropMultipleInsertOne="beforeCropMultipleInsertOne"
    />
    <DialogCroppieComponent
      :dialog="dialogCroppie"
      :title="dialogCroppieOptions.title"
      :size="dialogCroppieOptions.size"
      :data-img="dialogCroppieDataImg"
      :enable-resize="dialogCroppieOptions.enableResize"
      @changeDialog="changeDialogCroppie"
      @changeCroppie="changeCroppie"
    />
    <DialogCroppieMultipleComponent
      :dialog="dialogCroppieMultiple"
      :data-img="dialogCroppieMultipleDataImg"
      :edit="dialogCroppieMultipleEdit"
      @changeDialog="changeDialogCroppieMultiple"
      @changeCroppie="changeCroppieMultiple"
    />
  </v-container>
  <div
    v-else
    class="d-flex justify-center fill-height align-center"
  >
    <v-progress-circular indeterminate />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import croppieMixin from '@/mixins/croppieMixin'
import formMixin from '@/mixins/formMixin'
import croppieMultipleMixin from '@/mixins/croppieMultipleMixin'

export default {
  name: 'AdminUpdateEventView',
  components: {
    DialogCroppieMultipleComponent: () => import('@/components/admin/DialogCroppieMultipleComponent'),
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  mixins: [croppieMixin, formMixin, croppieMultipleMixin],
  data: () => ({
    coverSizes: [{ w: 400, h: 400 }, { w: 300, h: 190 }, { w: 190, h: 190 },
      { w: 190, h: 190 }, { w: 190, h: 190 }, { w: 190, h: 190 }, { w: 300, h: 190 }],
    isPreview: false,
    previewData: {},
    form: {
      title: '', dateStart: null, dateEnd: null, timeStart: null,
      cover: null, coverCroppie: null, coverBlob: null,
      blocks: [{ id: 0, type: -1, content: null }], attachmentsIds: []
    },
    isLoad: false
  }),
  computed: {
    ...mapState('app', ['theme']),
    ...mapState('news', { 'eventOne': 'event' })
  },
  async mounted() {
    await this.getEvent(this.$route.params.id)
    if (Object.keys(this.eventOne).length) {
      this.dataToForm()
    }
    this.isLoad = true
  },
  methods: {
    ...mapActions('news', ['getEvent']),
    ...mapActions('admin', ['addAttachment', 'updateEvent']),
    dataToForm() {
      this.form.id = this.eventOne.id
      this.form.title = this.eventOne.title
      this.form.dateStart = this.$moment(this.eventOne.dateStart).format('YYYY-MM-DD')
      this.form.timeStart = this.$moment(this.eventOne.dateStart).format('HH:mm')
      this.form.dateEnd = this.eventOne.dateEnd ? this.$moment(this.eventOne.dateEnd).format('YYYY-MM-DD') : ''
      this.form.blocks = this.eventOne.blocks
      this.form.coverCroppie = this.eventOne.image.url
      for (let i = 0; i < this.form.blocks.length; i++) {
        this.form.blocks[i].id = i
        if (this.form.blocks[i].type === 0) {
          this.form.blocks[i].content.text = this.form.blocks[i].content.text.replace('<div>', '').replace('</div>', '')
          const parser = new DOMParser()
          this.form.blocks[i].content.text = parser.parseFromString(this.form.blocks[i].content.text, 'text/html').body.innerHTML
          this.form.blocks[i].content.text = this.form.blocks[i].content.text.replace(/\r/g, '').replace(/\n/g, '')
        }
        if (this.form.blocks[i].type === 1) {
          this.form.blocks[i].content.blocks[0].id = (i + 1) * 1000 + 1
          this.form.blocks[i].content.blocks[1].id = (i + 1) * 1000 + 2
          for (let argument of this.form.blocks[i].content.blocks) {
            if (argument.type === 2) {
              argument.content.img = null
              argument.content.imgName.blob = null
              argument.content.imgName.original = argument.content.imgName.croppie
            }
            if (argument.type === 3) {
              argument.content.images = []
              let c = 1
              for (let argument2 of argument.content.imagesName) {
                argument.content.images.push({ name: c + ' img' })
                c += 1
                argument2.original = argument2.croppie
                argument2.blob = null
              }
            }
          }
        }
        if (this.form.blocks[i].type === 2) {
          this.form.blocks[i].content.img = null
          this.form.blocks[i].content.imgName.blob = null
          this.form.blocks[i].content.imgName.original = this.form.blocks[i].content.imgName.croppie
        }
        if (this.form.blocks[i].type === 3) {
          this.form.blocks[i].content.images = []
          let c = 1
          for (let argument of this.form.blocks[i].content.imagesName) {
            this.form.blocks[i].content.images.push({ name: c + ' img', id: c })
            c += 1
            argument.original = argument.croppie
            argument.blob = null
          }
        }
      }
      this.count = this.form.blocks.length + 1
    },
    haveDates() {
      return this.coverSizes[this.$route.params.id - 1].w !== 190
    },
    getCoverSize() {
      return this.coverSizes[this.$route.params.id - 1].w + '*' + this.coverSizes[this.$route.params.id - 1].h + 'px'
    },
    async publish() {
      let formPublish = Object.assign({}, this.form)
      //date
      if (formPublish.timeStart) {
        let timeStart = formPublish.timeStart.split(':')
        formPublish.dateStart = new Date(formPublish.dateStart)
        formPublish.dateStart.setHours(parseInt(timeStart[0]), parseInt(timeStart[1]))
      }
      formPublish.dateStart = this.$moment(formPublish.dateStart).format()
      if (formPublish.dateEnd) {
        formPublish.dateEnd = this.$moment(formPublish.dateEnd).format()
      } else {
        formPublish.dateEnd = null
      }
      //cover
      if (formPublish.coverBlob) {
        await this.addAttachment(formPublish.coverBlob).then(res => {
          formPublish.imageId = res.data.id
        }).catch(() => ({}))
      } else {
        formPublish.imageId = this.eventOne.image.id
      }
      //blocks
      for (let block of formPublish.blocks) {
        if (block.type === 1) {
          for (const blockElement of block.content.blocks) {
            if (blockElement.type === 2 && blockElement.content.imgName.blob) {
              await this.addAttachment(blockElement.content.imgName.blob).then(res => {
                blockElement.content.imgName.croppie = res.data.url
              }).catch(() => ({}))
            }
            if (blockElement.type === 3) {
              for (let blockImage of blockElement.content.imagesName) {
                if (blockImage['blob']) {
                  await this.addAttachment(blockImage['blob']).then(res => {
                    blockImage.croppie = res.data.url
                  }).catch(() => ({}))
                }
                delete blockImage.original
                delete blockImage['blob']
              }
              delete blockElement.content.images
            }
            delete blockElement.id
            if (blockElement.type === 2) {
              delete blockElement.content.img
              delete blockElement.content.imgName.original
              delete blockElement.content.imgName.blob
            }
          }
        }
        if (block.type === 2 && block.content.imgName.blob) {
          await this.addAttachment(block.content.imgName.blob).then(res => {
            block.content.imgName.croppie = res.data.url
          }).catch(() => ({}))
        }
        if (block.type === 3) {
          for (let blockImage of block.content.imagesName) {
            if (blockImage['blob']) {
              await this.addAttachment(blockImage['blob']).then(res => {
                blockImage.croppie = res.data.url
              }).catch(() => ({}))
            }
            delete blockImage.original
            delete blockImage['blob']
          }
          delete block.content.images
        }
        delete block.id
        if (block.type === 2) {
          delete block.content.img
          delete block.content.imgName.original
          delete block.content.imgName.blob
        }
      }
      //publish
      await this.updateEvent(formPublish)
      this.$router.push('/favorites').then()
    },
    preview() {
      this.previewData = Object.assign({}, this.form)
      this.isPreview = true
    }
  }
}
</script>