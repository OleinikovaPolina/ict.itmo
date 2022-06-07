<template>
  <v-container v-if="isLoad && Object.keys(article).length">
    <div class="pb-2 pb-md-4 text-h6 text-md-h5">
      Статьи
    </div>
    <!--  Form  -->
    <div v-if="!isPreview">
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
      <!--  description  -->
      <div class="input-bordered pt-3">
        <div class="input-bordered-label app-background">
          Описание статьи <span class="error--text">*</span>
        </div>
        <vue-editor
          v-model="form.description"
          :editor-toolbar="customToolbar"
          placeholder="Введите текст"
          class="custom"
        />
      </div>
      <div
        class="text-end mb-6"
        :style="{color:cutTegs(form.description).length>165?'red':'#0071B2'}"
      >
        {{ cutTegs(form.description).length }}/165
      </div>
      <!--  slider  -->
      <div class="input-bordered mb-6 pt-3">
        <div
          v-if="form.slider.length"
          class="input-bordered-label eye-block app-background pa-0"
        >
          <v-btn
            icon
            small
            @click="eyeBlock(form.sliderImagesNames)"
          >
            <v-icon>
              mdi-eye-outline
            </v-icon>
          </v-btn>
        </div>
        <div class="input-bordered-label app-background">
          Слайдер обложка <span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.sliderText"
          placeholder="Название слайдера"
          outlined
          dense
          :dark="theme==='dark'"
          hide-details
          class="mx-6 my-2 input-light-blue"
        />
        <div class="mx-6 pb-4 d-flex flex-wrap">
          <v-col
            :cols="$vuetify.breakpoint.smAndDown?12:6"
            class="input-file-container"
            @dragover.prevent
            @drop.prevent
          >
            <input
              id="slider"
              type="file"
              multiple
              accept="image/*"
              @change="(e)=>{beforeCropMultiple('slider', 'Слайдер обложка',Array.from(e.target.files))}"
            >
            <label
              for="slider"
              class="d-flex align-center py-md-6 px-md-12 text-center"
              @drop="(e)=>{beforeCropMultiple('slider', 'Слайдер обложка',Array.from(e.dataTransfer.files))}"
            >
              <span>
                <v-img
                  style="z-index: 0"
                  width="80"
                  height="80"
                  contain
                  src="../../../assets/images/admin/ep_picture.svg"
                />
              </span>
              Выберите изображение или перетащите файл
            </label>
          </v-col>
          <v-col
            v-if="form.slider.length"
            :cols="$vuetify.breakpoint.smAndDown?12:6"
            class="pl-6 py-0 d-flex flex-wrap align-start justify-space-between"
          >
            <draggable
              :list="form.slider"
              class="d-flex flex-wrap"
              style="width: 100%"
              @change="function(e){changeList(e)}"
            >
              <v-col
                v-for="(img,j) in form.slider"
                :key="j"
                cols="12"
                md="6"
                class="d-flex mt-2 pa-0"
                style="cursor: move"
              >
                <div class="pl-1">
                  {{ j + 1 }}.
                </div>
                <div class="input-slider-img-block px-2 ml-2">
                  <span>{{ img.name }}</span>
                  <v-btn
                    icon
                    x-small
                    color="#0071B2"
                    @click="deleteContentImgBlock(j)"
                  >
                    <v-icon small>
                      mdi-close-circle-outline
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </draggable>
          </v-col>
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
      <BaseStudentsHackathon
        :block="{title:form.title,
                 description:form.description,
                 sliderImagesNames:form.sliderImagesNames,
                 sliderText:form.sliderText
        }"
      />
      <BaseNews
        :data="previewData"
        class="mt-16"
      />
      <BaseButtonOutlined
        text="Назад"
        :click-btn="true"
        @clickBtnCallback="isPreview = false"
      />
    </div>
    <!--  dialogs  -->
    <DialogPreviewSliderComponent
      :dialog="dialogSlider"
      :dialog-content="dialogSliderContent"
      @changeDialog="changeDialogSlider"
      @beforeCropMultipleOne="beforeCropMultipleOne"
    />
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
  <v-container
    v-else
    class="d-flex justify-center fill-height align-center"
  >
    <v-progress-circular indeterminate />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
import draggable from 'vuedraggable'
import croppieMixin from '../../../mixins/croppieMixin'
import croppieMultipleMixin from '../../../mixins/croppieMultipleMixin'
import formMixin from '../../../mixins/formMixin'

export default {
  name: 'HackathonCompetition',
  components: {
    VueEditor, draggable,
    DialogPreviewSliderComponent: () => import('@/components/admin/DialogPreviewSliderComponent'),
    DialogCroppieMultipleComponent: () => import('@/components/admin/DialogCroppieMultipleComponent'),
    BaseStudentsHackathon: () => import('@/components/students/BaseStudentsHackathon'),
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  mixins: [croppieMixin, formMixin, croppieMultipleMixin],
  data: () => ({
    customToolbar: [{ align: '' }, { align: 'center' }, { align: 'justify' },
      { list: 'ordered' }, { list: 'bullet' }, 'bold', 'italic', 'underline', 'link', 'clean'],
    isPreview: false, previewData: {}, dialogSliderContent: [], dialogSlider: false,
    form: {
      title: '', description: '',
      slider: [], sliderImagesNames: [], sliderText: '',
      blocks: [{ id: 0, type: -1, content: null }], attachmentsIds: []
    },
    isLoad: false
  }),
  computed: {
    ...mapState('news', ['article']), ...mapState('app', ['theme'])
  },
  async mounted() {
    await this.getArticle(this.$route.params.id)
    if (Object.keys(this.article).length) {
      this.dataToForm()
    }
    this.isLoad = true
  },
  methods: {
    ...mapActions('news', ['getArticle']),
    ...mapActions('admin', ['addAttachment', 'updateArticles']),
    cutTegs(str) {
      let regex = /( |<([^>]+)>)/ig
      return str.replace(regex, '')
    },
    dataToForm() {
      this.form.id = this.article.id
      this.form.title = this.article.title
      this.form.blocks = this.dataToFormBlocks(this.article.blocks)
      this.count = this.form.blocks.length + 1
      const blockData = JSON.parse(this.article.description)
      this.form.sliderText = blockData.sliderText
      this.form.description = blockData.description

      this.form.sliderImagesNames = blockData.sliderImagesNames
      this.form.slider = []
      let c = 1
      for (let argument of blockData.sliderImagesNames) {
        this.form.slider.push({ name: c + ' img', id: c })
        c += 1
        argument.original = argument.croppie
        argument.blob = null
      }
    },
    async publish() {
      let formPublish = Object.assign({}, this.form)
      formPublish.page = this.article.page
      //slider
      for (let blockImage of formPublish.sliderImagesNames) {
        if (blockImage['blob']) {
          await this.addAttachment(blockImage['blob']).then(res => {
            blockImage.croppie = res.data.url
          }).catch(() => ({}))
        }
        delete blockImage.original
        delete blockImage['blob']
      }
      formPublish.description = JSON.stringify({
        description: formPublish.description,
        sliderImagesNames: formPublish.sliderImagesNames,
        sliderText: formPublish.sliderText
      })
      //blocks
      formPublish.blocks = await this.publishBlocks(formPublish.blocks)
      //publish
      await this.updateArticles(formPublish)
      this.$router.push('/favorites').then()
    },
    preview() {
      this.previewData = this.form
      this.isPreview = true
    },
    deleteContentImgBlock(j) {
      this.form.slider.splice(j, 1)
      this.form.sliderImagesNames.splice(j, 1)
    },
    changeList(val) {
      let oldName = this.form.sliderImagesNames.splice(val.moved.oldIndex, 1)[0]
      this.form.sliderImagesNames.splice(val.moved.newIndex, 0, oldName)
    },
    changeDialogSliderContent(el) {
      this.dialogSliderContent = el
    },
    changeDialogSlider(val) {
      this.dialogSlider = val
    },
    eyeBlock(el) {
      this.updateBlock()
      this.changeDialogSliderContent(el)
      this.changeDialogSlider(true)
    }
  }
}
</script>
<style scoped>
.eye-block {
  right: 180px;
}
</style>