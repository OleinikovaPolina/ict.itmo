<template>
  <v-container>
    <!--  Form  -->
    <div v-if="!isPreview">
      <!--  news or annotations  -->
      <div class="d-flex pb-6">
        <BaseButtonOutlined
          text="Анонсы"
          class="rounded-r-0"
          :active="typeDate===0"
          :click-btn="true"
          @clickBtnCallback="changeTypeData(0)"
        />
        <BaseButtonOutlined
          text="Новости"
          class="rounded-l-0 ml-2"
          :active="typeDate===1"
          :click-btn="true"
          @clickBtnCallback="changeTypeData(1)"
        />
      </div>
      <!--  name  -->
      <div class="input-bordered mb-6">
        <v-text-field
          v-model="form.name"
          :placeholder="`Название ${typeDate===1?'новости':'анонса'}`"
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
        v-if="typeDate===1"
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
            @change="(e)=>{beforeCrop('cover',{w:200,h:260},'Обложка новости',e.target.files[0])}"
          >
          <label
            for="cover"
            class="d-flex align-center py-6 px-12 text-center"
            @change="(e)=>{beforeCrop('cover',{w:200,h:260},'Обложка новости',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../assets/images/admin/ep_picture.svg"
            />
            Выберите изображение обложки или перетащите файл<br>
            Размер 200*260
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
              @change="(e)=>{beforeCrop('sliderImg',{w:1140,h:400},'Слайдер',e.target.files[0])}"
            >
            <label
              for="sliderImg"
              class="d-flex align-center py-6 px-12 text-center"
              @change="(e)=>{beforeCrop('sliderImg',{w:1140,h:400},'Слайдер',e.dataTransfer.files[0])}"
            >
              <v-img
                style="z-index: 0"
                width="80"
                height="80"
                src="../assets/images/admin/ep_picture.svg"
              />
              Выберите изображение обложки или перетащите файл<br>
              Размер 1140*400
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
          v-model="form.tags"
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
      <!--   btns  -->
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
      :title="dialogCroppieMultipleOptions.title"
      :size="dialogCroppieMultipleOptions.size"
      :data-img="dialogCroppieMultipleDataImg"
      :height-img="heightImg"
      :enable-resize="dialogCroppieMultipleOptions.enableResize"
      :edit="dialogCroppieMultipleEdit"
      @changeDialog="changeDialogCroppieMultiple"
      @changeCroppie="changeCroppieMultiple"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
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
    dialog: false,
    dialogContent: {},
    typeDate: 0,
    isPreview: false,
    previewData: {},
    form: {
      name: '', dateStart: null, dateEnd: null, timeStart: null,
      datePublish: null, timePublish: null, place: '', tags: [],
      isSlider: false, sliderImg: null, sliderImgCroppie: null, sliderImgBlob: null,
      cover: null, coverCroppie: null, coverBlob: null,
      blocks: [{ id: 0, type: -1, content: null }]
    },
    tags: [{ id: 1, type: 0, name: 'Название 1' },
      { id: 2, type: 1, name: 'Название 2' },
      { id: 3, type: 2, name: 'Название 3' },
      { id: 4, type: 2, name: 'Название 4' },
      { id: 5, type: 3, name: 'Название 5' }]
  }),
  computed: mapState('app', ['theme']),
  methods: {
    canBePublished() {
      let k = true
      if (this.typeDate === 1 && !this.form.cover) {
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
      return !(this.form.name && this.form.dateStart && this.form.datePublish
        && this.form.timePublish && this.form.place && this.form.tags.length
        && this.form.blocks.length && k)
    },
    changeTypeData(val) {
      this.typeDate = val
    },
    removeTag(item) {
      const index = this.form.tags.indexOf(item.id)
      if (index >= 0) this.form.tags.splice(index, 1)
    },
    publish() {
      console.log(this.form)
    },
    preview() {
      this.previewData = this.form
      this.previewData.tags.forEach((x, i) => {
        this.previewData.tags[i] = this.tags.find(y => y.id === x)
      })
      this.isPreview = true
    }
  }
}
</script>
