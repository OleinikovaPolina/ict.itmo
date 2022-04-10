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
      <div class="input-bordered mb-6 pt-3">
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
      <!--  slider  -->
      <div class="input-bordered mb-6 pt-3">
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
              @change="(e)=>{changeContentImagesBlock(form.slider.concat(Array.from(e.target.files)))}"
            >
            <label
              for="slider"
              class="d-flex align-center py-md-6 px-md-12 text-center"
              @drop="(e)=>{changeContentImagesBlock(form.slider.concat(Array.from(e.dataTransfer.files)))}"
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
              @change="function(e){changeList(e)}"
            >
              <v-col
                v-for="(img,j) in form.slider"
                :key="j"
                cols="12"
                md="6"
                class="d-flex mt-2 pa-0"
              >
                <div class="pl-1">
                  {{ j + 1 }}.
                </div>
                <div class="input-slider-img-block px-2 ml-2">
                  {{ img.name }}
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
        @updateProp="updateProp"
        @beforeCropInsert="beforeCropInsert"
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
      <v-row class="d-flex align-stretch justify-center pt-xl-8">
        <v-col class="text-center d-md-none">
          <div class="text-h5 text-sm-h4">
            {{ form.name }}
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="5"
          :class="$vuetify.breakpoint.smAndDown?'text-center':''"
          class="d-flex flex-column justify-space-around order-2 order-md-0 "
        >
          <div>
            <div class="pb-8 text-h4 text-xl-h3 d-none d-md-block">
              {{ form.name }}
            </div>
            <div
              class="text-subtitle-1 pb-6"
              v-html="form.description"
            />
          </div>
          <div class="mx-auto mx-md-0">
            <BaseButton2 link="/" />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="7"
        >
          <CarouselComponent
            :slider="form.sliderImagesNames"
            :columns="1"
          >
            <template #item="slotProps">
              <v-col cols="12">
                <div>
                  <v-img
                    width="100%"
                    :height="$vuetify.breakpoint.xs?200:$vuetify.breakpoint.xl?600:400"
                    cover
                    :src="slotProps.item"
                  />
                </div>
              </v-col>
            </template>
          </CarouselComponent>
        </v-col>
      </v-row>
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
import mixin from '../../../mixins/croppieMixin'

export default {
  name: 'HackathonCompetition',
  components: {
    VueEditor, draggable,
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    CarouselComponent: () => import('@/components/CarouselComponent'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton'),
    BaseButton2: () => import('@/components/BaseButton')
  },
  mixins: [mixin],
  data: () => ({
    customToolbar: [{ align: '' }, { align: 'center' }, { align: 'justify' },
      { list: 'ordered' }, { list: 'bullet' }, 'bold', 'italic', 'underline', 'link', 'clean'],
    dialog: false,
    dialogContent: {},
    isPreview: false,
    previewData: {},
    form: {
      name: '', description: '', dateStart: null, dateEnd: null, timeStart: null,
      slider: [], sliderImagesNames: [], sliderText: '',
      blocks: [{ id: 0, type: -1, content: null }]
    }
  }),
  computed: mapState('app', ['theme']),
  methods: {
    changeDialog(val) {
      this.dialog = val
    },
    changeDialogContent(val) {
      this.form=JSON.parse(JSON.stringify(this.form))
      this.dialogContent = this.form.blocks.find(x=>x.id===val.id)
    },
    addBlock() {
      this.form.blocks.push({ id: this.count, type: -1, content: null })
      this.count++
    },
    publish() {
      console.log(this.form)
    },
    preview() {
      this.previewData = this.form
      this.isPreview = true
    },
    updateProp(val) {
      this.form.blocks = val
    },
    changeContentImagesBlock(values) {
      this.form.sliderImagesNames = []
      values.forEach(val => {
        if (val.type.match('image.*')) {
          let reader = new FileReader()
          reader.onload = (e) => {
            this.form.sliderImagesNames.push(e.target.result)
          }
          reader.readAsDataURL(val)
        }
      })
      this.form.slider = values
    },
    deleteContentImgBlock(j) {
      this.form.slider.splice(j, 1)
      this.form.sliderImagesNames.splice(j, 1)
    },
    changeList(val) {
      let oldName = this.form.sliderImagesNames.splice(val.moved.oldIndex, 1)[0]
      this.form.sliderImagesNames.splice(val.moved.newIndex, 0, oldName)
    }
  }
}
</script>
