<template>
  <v-container>
    <div class="pb-2 pb-md-4 text-h6 text-md-h5">
      Статьи
    </div>
    <!--  Form  -->
    <div v-if="!isPreview">
      <!--  name  -->
      <div class="input-bordered mb-6">
        <v-text-field
          v-model="form.name"
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
      <!--   winners   -->
      <div class="input-bordered mb-6 pt-3">
        <div class="input-bordered-label app-background">
          Победители <span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.title"
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
              id="winners"
              type="file"
              accept="image/*"
              multiple
              @change="(e)=>{changeContentImagesBlock(form.winners.concat(Array.from(e.target.files)))}"
            >
            <label
              for="winners"
              class="d-flex align-center py-md-6 px-md-12 text-center"
              @drop="(e)=>{changeContentImagesBlock(form.winners.concat(Array.from(e.dataTransfer.files)))}"
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
            v-if="form.winners.length"
            :cols="$vuetify.breakpoint.smAndDown?12:6"
            class="pl-6 py-0 d-flex flex-wrap align-start justify-space-between"
          >
            <draggable
              :list="form.winners"
              class="d-flex flex-wrap"
              @change="function(e){changeList(e)}"
            >
              <v-col
                v-for="(hex,j) in form.winnersHex"
                :key="j"
                cols="12"
                md="6"
                class="d-flex mt-2 pa-0"
              >
                <div>{{ j + 1 }}.</div>
                <div class="input-slider-img-block px-2 ml-2 d-flex align-center">
                  <v-text-field
                    v-model="hex.text"
                    dense
                    :dark="theme==='dark'"
                    hide-details
                    class="ma-0 input-border-0"
                  />
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
      <BaseStudentsCompetition
        :hex-array="form.winnersHex"
        :title="form.name"
        :subtitle="form.title"
        :description="form.description"
      />
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
import draggable from 'vuedraggable'
import croppieMixin from '../../../mixins/croppieMixin'
import formMixin from '../../../mixins/formMixin'

export default {
  name: 'CompetitionComponent',
  components: {
    VueEditor, draggable,
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    BaseStudentsCompetition: () => import('@/components/students/BaseStudentsCompetition'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  mixins: [croppieMixin, formMixin],
  data: () => ({
    customToolbar: [{ align: '' }, { align: 'center' }, { align: 'justify' },
      { list: 'ordered' }, { list: 'bullet' },
      'bold', 'italic', 'underline',
      'link',
      'clean'],
    dialog: false,
    dialogContent: {},
    isPreview: false,
    previewData: {},
    form: {
      name: '', description: '', dateStart: null, dateEnd: null, title: '',
      winners: [], winnersHex: [],
      blocks: [{ id: 0, type: -1, content: null }]
    }
  }),
  computed: mapState('app', ['theme']),
  methods: {
    cutTegs(str) {
      let regex = /( |<([^>]+)>)/ig
      return str.replace(regex, '')
    },
    publish() {
      console.log(this.form)
    },
    preview() {
      this.previewData = this.form
      this.isPreview = true
    },
    changeContentImagesBlock(values) {
      this.form.winnersHex = []
      values.forEach(val => {
        if (val.type.match('image.*')) {
          let reader = new FileReader()
          reader.onload = (e) => {
            this.form.winnersHex.push({
              img: e.target.result,
              text: val.name.split('.').slice(0, -1).join('.')
            })
          }
          reader.readAsDataURL(val)
        }
      })
      this.form.winners = values
    },
    deleteContentImgBlock(j) {
      this.form.winners.splice(j, 1)
      this.form.winnersHex.splice(j, 1)
    },
    changeList(val) {
      let oldName = this.form.winnersHex.splice(val.moved.oldIndex, 1)[0]
      this.form.winnersHex.splice(val.moved.newIndex, 0, oldName)
    }
  }
}
</script>

<style scoped>

</style>