<template>
  <v-container>
    <div class="pb-2 pb-md-4 text-h6 text-md-h5">
      Мероприятия
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
            @change="(e)=>{beforeCrop('cover',coverSizes[$route.params.id],'Обложка мероприятия',e.target.files[0])}"
          >
          <label
            for="cover"
            class="d-flex align-center py-6 px-12 text-center"
            @drop="(e)=>{beforeCrop('cover',coverSizes[$route.params.id],'Обложка мероприятия',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../../../assets/images/admin/ep_picture.svg"
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
import croppieMixin from '../../../mixins/croppieMixin'
import formMixin from '../../../mixins/formMixin'

export default {
  name: 'HackathonCompetition',
  components: {
    DialogCroppieComponent: () => import('@/components/admin/DialogCroppieComponent'),
    DialogPreviewComponent: () => import('@/components/admin/DialogPreviewComponent'),
    BaseNews: () => import('@/components/events/BaseNews'),
    DraggableInputs: () => import('@/components/admin/DraggableInputs'),
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  mixins: [croppieMixin, formMixin],
  data: () => ({
    coverSizes: [{ w: 400, h: 400 }, { w: 300, h: 190 }, { w: 190, h: 190 },
      { w: 190, h: 190 }, { w: 190, h: 190 }, { w: 190, h: 190 }, { w: 300, h: 190 }],

    isPreview: false,
    previewData: {},
    form: {
      name: '', dateStart: null, dateEnd: null, timeStart: null,
      cover: null, coverCroppie: null, coverBlob: null, blocks: [{ id: 0, type: -1, content: null }]
    }
  }),
  computed: mapState('app', ['theme']),
  methods: {
    haveDates() {
      return this.coverSizes[this.$route.params.id].w !== 190
    },
    getCoverSize() {
      return this.coverSizes[this.$route.params.id].w + '*' + this.coverSizes[this.$route.params.id].h + 'px'
    },
    publish() {
      console.log(this.form)
    },
    preview() {
      this.previewData = this.form
      this.isPreview = true
    }
  }
}
</script>