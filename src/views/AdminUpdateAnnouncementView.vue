<template>
  <v-container v-if="loading && Object.keys(announcement).length">
    <!--  Form  -->
    <div v-if="!isPreview">
      <!--  title  -->
      <div class="input-bordered mb-6">
        <v-text-field
          v-model="form.title"
          placeholder="Название анонса"
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
              @change="(e)=>{beforeCrop('sliderImg',{w:912,h:400},'Слайдер',e.target.files[0])}"
            >
            <label
              for="sliderImg"
              class="d-flex align-center py-6 px-12 text-center"
              @change="(e)=>{beforeCrop('sliderImg',{w:912,h:400},'Слайдер',e.dataTransfer.files[0])}"
            >
              <v-img
                style="z-index: 0"
                width="80"
                height="80"
                src="../assets/images/admin/ep_picture.svg"
              />
              Выберите изображение обложки или перетащите файл<br>
              Размер 1140*500
            </label>
          </div>
          <a
            v-if="!form.sliderImg && form.sliderImgCroppie"
            class="img-name text-center"
            :href="form.sliderImgCroppie"
            target="_blank"
          >{{ form.sliderImgCroppie }}</a>
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
  <BaseNotFound v-else-if="loading" />
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
  name: 'AdminUpdateAnnouncementView',
  components: {
    BaseNotFound: () => import('@/components/app/BaseNotFound'),
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
    loading: false,
    dialog: false,
    dialogContent: {},
    isPreview: false,
    previewData: {},
    form: {
      title: '', dateStart: null, dateEnd: null, timeStart: null,
      datePublish: null, timePublish: null, place: '', tagsIds: [],
      isSlider: false, sliderImg: null, sliderImgCroppie: null, sliderImgBlob: null,
      blocks: [{ id: 0, type: -1, content: null }], attachmentsIds: []
    }
  }),
  computed: {
    ...mapState('app', ['theme']),
    ...mapState('news', ['tagsCategories', 'tags', 'announcement'])
  },
  async mounted() {
    await this.getTags()
    await this.getAnnouncement(this.$route.params.id)
    if (Object.keys(this.announcement).length) {
      this.dataToForm()
    }
    this.loading = true
  },
  methods: {
    ...mapActions('news', ['getTags', 'getAnnouncement']),
    ...mapActions('admin', ['addAttachment', 'updateAnnouncement']),
    dataToForm() {
      this.form.id = this.announcement.id
      this.form.title = this.announcement.title
      this.form.place = this.announcement.place
      this.form.dateStart = this.$moment(this.announcement.dateStart).format('YYYY-MM-DD')
      this.form.datePublish = this.$moment(this.announcement.datePublished).format('YYYY-MM-DD')
      this.form.dateEnd = this.announcement.dateEnd ? this.$moment(this.announcement.dateEnd).format('YYYY-MM-DD') : ''
      this.form.timeStart = this.$moment(this.announcement.dateStart).format('HH:mm')
      this.form.timePublish = this.$moment(this.announcement.datePublished).format('HH:mm')
      this.form.tagsIds = this.announcement.tags.map(tag => tag.id)
      this.form.blocks = this.dataToFormBlocks(this.announcement.blocks)
      this.count = this.form.blocks.length + 1
      if (this.announcement.sliderImg) {
        this.form.isSlider = true
        this.form.sliderImgCroppie = this.announcement.sliderImg.url
      }
    },
    canBePublished() {
      let k = true
      if (this.form.isSlider && !this.form.sliderImgCroppie) {
        k = false
      }
      for (const block of this.form.blocks) {
        if (block.type === -1) {
          k = false
          break
        }
      }
      return !(this.form.place && this.form.title && this.form.dateStart
        && this.form.tagsIds.length && this.form.blocks.length && k
        && this.form.datePublish && this.form.timePublish)
    },
    removeTag(item) {
      const index = this.form.tagsIds.indexOf(item.id)
      if (index >= 0) this.form.tagsIds.splice(index, 1)
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
      //date publish
      let timePublish = formPublish.timePublish.split(':')
      formPublish.datePublish = new Date(formPublish.datePublish)
      formPublish.datePublish.setHours(parseInt(timePublish[0]), parseInt(timePublish[1]))
      formPublish.datePublished = this.$moment(formPublish.datePublish).format()
      //slider
      if (this.isSlider && this.sliderImgBlob) {
        await this.addAttachment(formPublish.sliderImgBlob).then(res => {
          formPublish.slideImageId = res.data.id
        }).catch(() => ({}))
      }
      if (this.isSlider) {
        formPublish.slideImageId = this.announcement.slideImage.id
      }
      //blocks
      formPublish.blocks = await this.publishBlocks(formPublish.blocks)
      //publish
      await this.updateAnnouncement(formPublish)
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