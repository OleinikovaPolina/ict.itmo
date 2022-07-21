<template>
  <v-container>
    <!--  Form  -->
    <div v-if="!isPreview">
      <!--  news or annotations  -->
      <div class="d-flex pb-6">
        <BaseButtonOutlined
          text="Анонсы"
          class="rounded-r-0"
          :active="typeData===0"
          :click-btn="true"
          @clickBtnCallback="changeTypeData(0)"
        />
        <BaseButtonOutlined
          text="Новости"
          class="rounded-l-0 ml-2"
          :active="typeData===1"
          :click-btn="true"
          @clickBtnCallback="changeTypeData(1)"
        />
      </div>
      <!--  title  -->
      <div class="input-bordered mb-6">
        <v-text-field
          v-model="form.title"
          :placeholder="`Название ${typeData===1?'новости':'анонса'}`"
          outlined
          dense
          class="input-border-0 text-h6 input-blue font-weight-bold"
          :dark="theme==='dark'"
          hide-details
        />
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
      <!--  cover  -->
      <div
        v-if="typeData===1"
        class="input-bordered mb-6 py-6"
      >
        <div class="input-bordered-label app-background">
          Обложка новости<span class="error--text">*</span>
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
            @change="(e)=>{beforeCrop('cover',{w:480,h:300},'Обложка новости',e.target.files[0])}"
          >
          <label
            for="cover"
            class="d-flex align-center py-6 px-12 text-center"
            @change="(e)=>{beforeCrop('cover',{w:480,h:300},'Обложка новости',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../assets/images/admin/ep_picture.svg"
            />
            Выберите изображение обложки или перетащите файл<br>
            Размер 480*300
          </label>
        </div>
        <div
          v-if="form.cover"
          class="text-center"
        >
          {{ form.cover.name }}
        </div>
      </div>
      <!--  slider  -->
      <div class="input-bordered">
        <v-checkbox
          v-model="form.isSlider"
          :dark="theme==='dark'"
          dense
          label="Добавить в слайдер"
          class="input-blue pl-2"
        />
        <div
          v-if="form.isSlider"
          class="py-6"
        >
          <div
            class="input-file-container mx-auto"
            @dragover.prevent
            @drop.prevent
          >
            <input
              id="sliderImg"
              type="file"
              accept="image/*"
              @change="(e)=>{beforeCrop('sliderImg',{w:912,h:388},'Слайдер',e.target.files[0])}"
            >
            <label
              for="sliderImg"
              class="d-flex align-center py-6 px-12 text-center"
              @change="(e)=>{beforeCrop('sliderImg',{w:912,h:388},'Слайдер',e.dataTransfer.files[0])}"
            >
              <v-img
                style="z-index: 0"
                width="80"
                height="80"
                src="../assets/images/admin/ep_picture.svg"
              />
              Выберите изображение обложки или перетащите файл<br>
              Размер 1280*544
            </label>
          </div>
          <div
            v-if="form.sliderImg"
            class="text-center"
          >
            {{ form.sliderImg.name }}
          </div>
        </div>
      </div>
      <!--   add block   -->
      <div
        class="px-0 mt-4 subtitle-color"
        style="cursor: pointer;width: fit-content"
        @click="addBlock"
      >
        <v-icon color="#0071B2">
          mdi-plus-circle-outline
        </v-icon>
        Добавить поле
      </div>
      <!--  time event    -->
      <v-row class="pt-4">
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
            :dark="theme==='dark'"
            :color="theme==='dark'?'#00A1FF':'#005A8E'"
            hide-details
          />
        </v-col>
        <v-col
          v-if="typeData===0"
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
            :dark="theme==='dark'"
            :color="theme==='dark'?'#00A1FF':'#005A8E'"
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
      <!--  time publish  -->
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <div
            class="pl-4 subtitle-color text-body-2"
            style="opacity: 0.7"
          >
            Дата выхода поста<span class="error--text">*</span>
          </div>
          <v-text-field
            v-model="form.datePublish"
            type="date"
            outlined
            dense
            class="search-input"
            :dark="theme==='dark'"
            :color="theme==='dark'?'#00A1FF':'#005A8E'"
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
            Время выхода<span class="error--text">*</span>
          </div>
          <v-text-field
            v-model="form.timePublish"
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
      <!--  place  -->
      <v-col
        v-if="typeData===0"
        cols="12"
        md="4"
        class="px-0"
      >
        <div
          class="pl-4 subtitle-color text-body-2"
          style="opacity: 0.7"
        >
          Место проведения<span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.place"
          placeholder="Введите место мероприятия"
          outlined
          dense
          class="search-input"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
        />
      </v-col>
      <!--  tags  -->
      <v-col
        cols="12"
        md="4"
        class="px-0"
      >
        <div
          class="pl-4 subtitle-color  text-body-2"
          style="opacity: 0.7"
        >
          Теги<span class="error--text">*</span>
        </div>
        <v-autocomplete
          v-model="form.tagsIds"
          :items="tags"
          item-value="id"
          item-text="name"
          multiple
          outlined
          dense
          class="search-input"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
          chips
          append-icon="mdi-chevron-down"
        >
          <template #selection="{item}">
            <BaseChip
              :item="item"
              class="mr-3"
            >
              <template #chip-btns>
                <v-btn
                  icon
                  dark
                  x-small
                  @click="removeTag(item)"
                >
                  <v-icon small>
                    mdi-close-circle-outline
                  </v-icon>
                </v-btn>
              </template>
            </BaseChip>
          </template>
        </v-autocomplete>
      </v-col>
      <!--   buttons  -->
      <div class="d-flex pt-6">
        <BaseButton
          text="Опубликовать"
          :click-btn="true"
          :disabled-btn="canBePublished()"
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
    <!--  dialog  -->
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
</template>

<script>
import { mapActions, mapState } from 'vuex'
import croppieMixin from '@/mixins/croppieMixin'
import formMixin from '@/mixins/formMixin'
import croppieMultipleMixin from '@/mixins/croppieMultipleMixin'

export default {
  name: 'AdminCreateEntryView',
  components: {
    DialogCroppieMultipleComponent: () => import('@/components/admin/DialogCroppieMultipleComponent'),
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseChip: () => import('@/components/BaseChip'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  mixins: [croppieMixin, formMixin, croppieMultipleMixin],
  data: () => ({
    btnDisabled: false,
    dialog: false,
    dialogContent: {},
    typeData: 0,
    isPreview: false,
    previewData: {},
    form: {
      title: '', dateStart: null, dateEnd: null, timeStart: null,
      datePublish: null, timePublish: null, place: '', tagsIds: [],
      isSlider: false, sliderImg: null, sliderImgCroppie: null, sliderImgBlob: null,
      cover: null, coverCroppie: null, coverBlob: null,
      blocks: [{ id: 0, type: -1, content: null }], attachmentsIds: []
    }
  }),
  computed: {
    ...mapState('app', ['theme']),
    ...mapState('news', ['tagsCategories', 'tags'])
  },
  async mounted() {
    await this.getTags()
  },
  methods: {
    ...mapActions('news', ['getTags']),
    ...mapActions('admin', ['addAttachment', 'addNews', 'addAnnouncement']),
    canBePublished() {
      let k = true
      if (this.typeData === 1 && !this.form.cover) {
        k = false
      }
      if (this.typeData === 0 && !this.form.place) {
        k = false
      }
      if (this.form.isSlider && !this.form.sliderImg) {
        k = false
      }
      for (const block of this.form.blocks) {
        if (block.type === -1) {
          k = false
          break
        }
      }
      return !(this.form.title && this.form.dateStart
        && this.form.tagsIds.length && this.form.blocks.length && k
        && this.form.datePublish && this.form.timePublish && !this.btnDisabled)
    },
    changeTypeData(val) {
      this.typeData = val
    },
    removeTag(item) {
      const index = this.form.tagsIds.indexOf(item.id)
      if (index >= 0) this.form.tagsIds.splice(index, 1)
    },
    async publish() {
      this.btnDisabled = true
      let formPublish = Object.assign({}, this.form)
      //date
      if (formPublish.timeStart) {
        let timeStart = formPublish.timeStart.split(':')
        formPublish.dateStart = new Date(formPublish.dateStart)
        formPublish.dateStart.setHours(parseInt(timeStart[0]), parseInt(timeStart[1]))
      }
      formPublish.dateStart = this.$moment(formPublish.dateStart).format()
      if (this.typeData === 0 && formPublish.dateEnd) {
        formPublish.dateEnd = this.$moment(formPublish.dateEnd).format()
      }
      if (this.typeData === 1) {
        formPublish.date = formPublish.dateStart
      }
      //date publish
      let timePublish = formPublish.timePublish.split(':')
      formPublish.datePublish = new Date(formPublish.datePublish)
      formPublish.datePublish.setHours(parseInt(timePublish[0]), parseInt(timePublish[1]))
      formPublish.datePublished = this.$moment(formPublish.datePublish).format()
      //cover news
      if (this.typeData === 1) {
        await this.addAttachment(formPublish.coverBlob).then(res => {
          formPublish.imageId = res.data.id
        }).catch(() => ({}))
      }
      //slider
      if (formPublish.isSlider && formPublish.sliderImgBlob) {
        await this.addAttachment(formPublish.sliderImgBlob).then(res => {
          formPublish.slideImageId = res.data.id
        }).catch(() => ({}))
      }
      //blocks
      formPublish.blocks = await this.publishBlocks(formPublish.blocks)
      //publish
      if (this.typeData === 1) {
        await this.addNews(formPublish)
      }
      if (this.typeData === 0) {
        await this.addAnnouncement(formPublish)
      }
      this.btnDisabled = false
      this.$router.push('/published').then()
    },
    preview() {
      this.previewData = Object.assign({}, this.form)
      this.previewData.tags = []
      this.previewData.tagsIds.forEach((x, i) => {
        this.previewData.tags[i] = this.tags.find(y => y.id === x)
      })
      this.isPreview = true
    }
  }
}
</script>
