<template>
  <v-container v-if="isLoad">
    <!--  Form  -->
    <div v-if="!isPreview">
      <div class="pb-2 pb-md-4 text-h6 text-md-h5">
        Статьи
      </div>
      <!--  name  -->
      <div class="input-bordered mb-8">
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
          Описание <span class="error--text">*</span>
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
        :style="{color:cutTegs(form.description||'').length>300?'red':'#0071B2'}"
      >
        {{ cutTegs(form.description || '').length }}/300
      </div>
      <!--  image 1  -->
      <div class="input-bordered mb-6 py-6">
        <div class="input-bordered-label app-background">
          Изображение 1 <span class="error--text">*</span>
        </div>
        <div
          class="input-file-container mx-auto"
          @dragover.prevent
          @drop.prevent
        >
          <input
            id="image1"
            type="file"
            accept="image/*"
            @change="(e)=>{beforeCrop('image1',{w:400,h:300},'Изображение 1',e.target.files[0])}"
          >
          <label
            for="image1"
            class="d-flex align-center py-6 px-12 text-center"
            @drop="(e)=>{beforeCrop('image1',{w:400,h:300},'Изображение 1',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../../../assets/images/admin/ep_picture.svg"
            />
            Выберите изображение или перетащите файл<br>
            Размер 400*300
          </label>
        </div>
        <div
          v-if="form.image1"
          class="text-center"
        >
          {{ form.image1.name }}
        </div>
      </div>
      <!--  image 2  -->
      <div class="input-bordered mb-6 py-6">
        <div class="input-bordered-label app-background">
          Изображение 2 <span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.caption"
          placeholder="Подпись"
          outlined
          dense
          class="mx-6 my-2 input-light-blue"
          :dark="theme==='dark'"
          hide-details
        />
        <div
          class="input-file-container mx-auto"
          @dragover.prevent
          @drop.prevent
        >
          <input
            id="image2"
            type="file"
            accept="image/*"
            @change="(e)=>{beforeCrop('image2',{w:300,h:300},'Изображение 2',e.target.files[0])}"
          >
          <label
            for="image2"
            class="d-flex align-center py-6 px-12 text-center"
            @drop="(e)=>{beforeCrop('image2',{w:300,h:300},'Изображение 2',e.dataTransfer.files[0])}"
          >
            <v-img
              style="z-index: 0"
              width="80"
              height="80"
              src="../../../assets/images/admin/ep_picture.svg"
            />
            Выберите изображение или перетащите файл<br>
            Размер 300*300
          </label>
        </div>
        <div
          v-if="form.image2"
          class="text-center"
        >
          {{ form.image2.name }}
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
      <BaseStudentsArticleComponent
        :block="{
          title:form.title,
          description:form.description,
          caption:form.caption,
          image1:form.image1Croppie,
          image2:form.image2Croppie,
        }"
      />
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
  <v-container
    v-else
    class="d-flex justify-center fill-height align-center"
  >
    <v-progress-circular indeterminate />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import croppieMixin from '@/mixins/croppieMixin'
import formMixin from '@/mixins/formMixin'
import croppieMultipleMixin from '@/mixins/croppieMultipleMixin'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'TwoPhotosComponent',
  components: {
    VueEditor,
    BaseStudentsArticleComponent: () => import('@/components/students/BaseStudentsArticleComponent'),
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
    customToolbar: [{ align: '' }, { align: 'center' }, { align: 'justify' },
      { list: 'ordered' }, { list: 'bullet' },
      'bold', 'italic', 'underline',
      'link',
      'clean'],
    isPreview: false,
    previewData: {},
    form: {
      title: '',
      description: '', caption: '',
      image1: null, image1Croppie: null, image1Blob: null,
      image2: null, image2Croppie: null, image2Blob: null,
      blocks: [{ id: 0, type: -1, content: null }], attachmentsIds: []
    },
    isLoad: false
  }),
  computed: {
    ...mapState('app', ['theme']),
    ...mapState('news', ['article'])
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
    dataToForm() {
      this.form.id = this.article.id
      this.form.title = this.article.title
      this.form.blocks = this.article.blocks
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
      const blockData = JSON.parse(this.article.description)
      this.form.caption = blockData.caption
      this.form.description = blockData.description
      this.form.image1Croppie = blockData.image1
      this.form.image2Croppie = blockData.image2
    },
    async publish() {
      let formPublish = Object.assign({}, this.form)
      formPublish.page = this.article.page
      //images
      if (formPublish.image1Blob) {
        await this.addAttachment(formPublish.image1Blob).then(res => {
          formPublish.image1 = res.data.url
        }).catch(() => ({}))
      } else {
        formPublish.image1 = formPublish.image1Croppie
      }
      if (formPublish.image2Blob) {
        await this.addAttachment(formPublish.image2Blob).then(res => {
          formPublish.image2 = res.data.url
        }).catch(() => ({}))
      } else {
        formPublish.image2 = formPublish.image2Croppie
      }
      formPublish.description = JSON.stringify({
        description: formPublish.description,
        caption: formPublish.caption,
        image1: formPublish.image1,
        image2: formPublish.image2
      })
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
      await this.updateArticles(formPublish)
      this.$router.push('/favorites').then()
    },
    preview() {
      this.previewData = Object.assign({}, this.form)
      this.isPreview = true
    },
    cutTegs(str) {
      let regex = /( |<([^>]+)>)/ig
      return str.replace(regex, '')
    }
  }
}
</script>