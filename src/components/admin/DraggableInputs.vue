<template>
  <draggable
    :list="blocks"
    class="d-flex flex-wrap"
  >
    <v-col
      v-for="element in blocks"
      :key="element.id"
      cols="12"
      class="input-bordered mb-6 pa-0 pt-4"
      style="min-height: 60px;cursor: move"
    >
      <div
        v-if="(element.type===1||element.type===3)&&!(element.type===3 && element.content.imagesName.length===0)"
        class="input-bordered-label eye-block app-background pa-0"
      >
        <v-btn
          icon
          small
          @click="eyeBlock(element)"
        >
          <v-icon>
            mdi-eye-outline
          </v-icon>
        </v-btn>
      </div>
      <div class="input-bordered-label delete-block app-background pa-0">
        <v-btn
          icon
          small
          @click="deleteBlock(element.id)"
        >
          <v-icon>
            mdi-trash-can-outline
          </v-icon>
        </v-btn>
      </div>
      <div class="input-bordered-label app-background pa-0 mb-4">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <div
              v-bind="attrs"
              class="input-border-0 input-blue px-2 py-1 d-flex justify-space-between"
              style="width: 180px"
              v-on="on"
            >
              {{ getTextType(element) }}
              <v-icon
                color="#0071B2"
                :style="{transform: attrs['aria-expanded']==='true'?'rotate(180deg)':''}"
              >
                mdi-chevron-down
              </v-icon>
            </div>
          </template>
          <v-list class="app-background">
            <v-radio-group
              class="ma-0"
              hide-details
              :value="element.type"
              :dark="theme==='dark'"
              @change="changeTypeBlock(element,$event)"
            >
              <v-radio
                v-for="item in typesInput"
                :key="item.id"
                :value="item.id"
                :label="item.text"
                class="px-2"
              />
            </v-radio-group>
          </v-list>
        </v-menu>
      </div>
      <vue-editor
        v-if="element.type===0"
        v-model="element.content.text"
        :editor-toolbar="customToolbar"
        placeholder="Введите текст"
        class="custom"
      />
      <template v-if="element.type===1">
        <div class="pt-8 px-4">
          <draggable
            :list="element.content.blocks"
            class="d-flex flex-wrap"
          >
            <v-col
              v-for="(element2,q) in element.content.blocks"
              :key="element2.id"
              cols="12"
              md="6"
              :class="$vuetify.breakpoint.mdAndUp?(q%2===0?'pl-0':'pr-0'):'px-0'"
            >
              <div
                class="input-bordered mb-3"
                style="min-height: 60px"
              >
                <div class="input-bordered-label app-background pa-0">
                  <v-menu offset-y>
                    <template #activator="{ on, attrs }">
                      <div
                        v-bind="attrs"
                        class="input-border-0 input-blue px-2 py-1 d-flex justify-space-between"
                        style="width: 180px"
                        v-on="on"
                      >
                        {{ getTextType(element2) }}
                        <v-icon
                          color="#0071B2"
                          :style="{transform: attrs['aria-expanded']==='true'?'rotate(180deg)':''}"
                        >
                          mdi-chevron-down
                        </v-icon>
                      </div>
                    </template>
                    <v-list class="app-background">
                      <v-radio-group
                        class="ma-0"
                        hide-details
                        :value="element2.type"
                        :dark="theme==='dark'"
                        @change="changeTypeBlock(element2,$event)"
                      >
                        <v-radio
                          v-for="item in typesInput.filter(x=>x.id!==1)"
                          :key="item.id"
                          :value="item.id"
                          :label="item.text"
                          class="px-2"
                        />
                      </v-radio-group>
                    </v-list>
                  </v-menu>
                </div>
                <vue-editor
                  v-if="element2.type===0"
                  v-model="element2.content.text"
                  :editor-toolbar="customToolbar"
                  placeholder="Введите текст"
                  class="mt-4"
                />
                <template v-if="element2.type===2">
                  <v-text-field
                    v-model="element2.content.text"
                    placeholder="Название картинки"
                    outlined
                    dense
                    class="mx-6 mt-6 mb-2 input-light-blue"
                    :dark="theme==='dark'"
                    hide-details
                  />
                  <div class="mx-6 pb-4">
                    <div class="d-flex">
                      <div
                        class="input-file-container mx-auto"
                        @dragover.prevent
                        @drop.prevent
                      >
                        <input
                          :id="'img-' +6+'-'+ element2.id+'-'+element.id"
                          type="file"
                          accept="image/*"
                          @change="(e)=>{changeContentImgBlock(element2,e.target.files[0])}"
                        >
                        <label
                          :for="'img-' +6+'-'+ element2.id+'-'+element.id"
                          class="d-flex align-center justify-center py-6 px-12 text-center"
                          @drop="(e)=>{changeContentImgBlock(element2,e.dataTransfer.files[0])}"
                        >
                          <v-img
                            style="z-index: 0"
                            width="80"
                            height="80"
                            contain
                            src="../../assets/images/admin/ep_picture.svg"
                          />
                          Выберите изображение или перетащите файл
                        </label>
                      </div>
                    </div>
                    <a
                      v-if="!element2.content.img && element2.content.imgName"
                      class="img-name text-center"
                      :href="element2.content.imgName.croppie"
                      target="_blank"
                    >{{ element2.content.imgName.croppie }}</a>
                    <div
                      v-if="element2.content.img"
                      class="text-center"
                    >
                      {{ element2.content.img.name }}
                    </div>
                  </div>
                </template>
                <template v-if="element2.type===3">
                  <v-text-field
                    v-model="element2.content.text"
                    placeholder="Название слайдера"
                    outlined
                    dense
                    :dark="theme==='dark'"
                    hide-details
                    class="mx-6 mt-6 mb-2 input-light-blue"
                  />
                  <div class="mx-6 pb-4 d-flex flex-wrap">
                    <v-col
                      cols="12"
                      class="input-file-container"
                      @dragover.prevent
                      @drop.prevent
                    >
                      <input
                        :id="'images-' +6+'-'+ element2.id+'-'+element.id"
                        type="file"
                        accept="image/*"
                        multiple
                        @change="(e)=>{changeContentImagesBlock(element2,Array.from(e.target.files))}"
                      >
                      <label
                        :for="'images-' +6+'-'+ element2.id+'-'+element.id"
                        class="d-flex align-center py-md-6 px-md-12 text-center"
                        @drop="(e)=>{changeContentImagesBlock(element2,Array.from(e.dataTransfer.files))}"
                      >
                        <span>
                          <v-img
                            style="z-index: 0"
                            width="80"
                            height="80"
                            contain
                            src="../../assets/images/admin/ep_picture.svg"
                          />
                        </span>
                        Выберите изображение или перетащите файл
                      </label>
                    </v-col>
                    <v-col
                      v-if="element2.content.images.length"
                      cols="12"
                      class="pl-6 py-0 d-flex flex-wrap align-start justify-space-between"
                    >
                      <draggable
                        :list="element2.content.images"
                        class="d-flex flex-wrap"
                        style="width: 100%"
                        @change="function(e){changeList(element2,e)}"
                      >
                        <v-col
                          v-for="(img,j) in element2.content.images"
                          :key="j"
                          cols="12"
                          md="6"
                          class="d-flex mt-2 pa-0"
                        >
                          <div>{{ j + 1 }}.</div>
                          <div class="input-slider-img-block px-2 ml-2">
                            <span>{{ img.name }}</span>
                            <v-btn
                              icon
                              x-small
                              color="#0071B2"
                              @click="deleteContentImgBlock(element2,j)"
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
                </template>
                <div v-if="element2.type===4">
                  <div class="ict-border-bottom mt-4">
                    <v-textarea
                      v-model="element2.content.text"
                      placeholder="Введите цитату"
                      outlined
                      dense
                      class="input-border-0"
                      :dark="theme==='dark'"
                      hide-details
                    />
                  </div>
                  <v-text-field
                    v-model="element2.content.author"
                    placeholder="Введите ФИО человека, должность"
                    outlined
                    dense
                    class="input-border-0"
                    :dark="theme==='dark'"
                    hide-details
                  />
                </div>
                <v-text-field
                  v-if="element2.type===5"
                  v-model="element2.content.text"
                  placeholder="Введите подзаголовок"
                  outlined
                  dense
                  class="input-border-0 mt-4"
                  :dark="theme==='dark'"
                  hide-details
                />
              </div>
            </v-col>
          </draggable>
        </div>
      </template>
      <template v-if="element.type===2">
        <v-text-field
          v-model="element.content.text"
          placeholder="Название картинки"
          outlined
          dense
          class="mx-6 my-2 input-light-blue"
          :dark="theme==='dark'"
          hide-details
        />
        <div class="mx-6 pb-4">
          <div class="d-flex">
            <div
              class="input-file-container mx-auto"
              @dragover.prevent
              @drop.prevent
            >
              <input
                :id="'img-' +sizeBlock+'-'+ element.id"
                type="file"
                accept="image/*"
                @change="(e)=>{changeContentImgBlock(element,e.target.files[0])}"
              >
              <label
                :for="'img-' +sizeBlock+'-'+ element.id"
                class="d-flex align-center justify-center py-6 px-12 text-center"
                @drop="(e)=>{changeContentImgBlock(element,e.dataTransfer.files[0])}"
              >
                <v-img
                  style="z-index: 0"
                  width="80"
                  height="80"
                  contain
                  src="../../assets/images/admin/ep_picture.svg"
                />
                Выберите изображение или перетащите файл
              </label>
            </div>
          </div>
          <a
            v-if="!element.content.img && element.content.imgName"
            class="img-name text-center"
            :href="element.content.imgName.croppie"
            target="_blank"
          >{{ element.content.imgName.croppie }}</a>
          <div
            v-if="element.content.img"
            class="text-center"
          >
            {{ element.content.img.name }}
          </div>
        </div>
      </template>
      <template v-if="element.type===3">
        <v-text-field
          v-model="element.content.text"
          placeholder="Название слайдера"
          outlined
          dense
          :dark="theme==='dark'"
          hide-details
          class="mx-6 my-2 input-light-blue"
        />
        <div class="mx-6 pb-4 d-flex flex-wrap">
          <v-col
            :cols="sizeBlock===6||$vuetify.breakpoint.smAndDown?12:6"
            class="input-file-container"
            @dragover.prevent
            @drop.prevent
          >
            <input
              :id="'images-' +sizeBlock+'-'+ element.id"
              type="file"
              accept="image/*"
              multiple
              @change="(e)=>{changeContentImagesBlock(element,Array.from(e.target.files))}"
            >
            <label
              :for="'images-' +sizeBlock+'-'+ element.id"
              class="d-flex align-center py-md-6 px-md-12 text-center"
              @drop="(e)=>{changeContentImagesBlock(element,Array.from(e.dataTransfer.files))}"
            >
              <span>
                <v-img
                  style="z-index: 0"
                  width="80"
                  height="80"
                  contain
                  src="../../assets/images/admin/ep_picture.svg"
                />
              </span>
              Выберите изображение или перетащите файл
            </label>
          </v-col>
          <v-col
            v-if="element.content.images.length"
            :cols="sizeBlock===6||$vuetify.breakpoint.smAndDown?12:6"
            class="pl-6 py-0 d-flex flex-wrap align-start justify-space-between"
          >
            <draggable
              :list="element.content.images"
              class="d-flex flex-wrap"
              style="width: 100%"
              @change="function(e){changeList(element,e)}"
            >
              <v-col
                v-for="(img,j) in element.content.images"
                :key="j"
                cols="12"
                md="6"
                class="d-flex mt-2 pa-0"
              >
                <div>{{ j + 1 }}.</div>
                <div class="input-slider-img-block px-2 ml-2">
                  <span>{{ img.name }}</span>
                  <v-btn
                    icon
                    x-small
                    color="#0071B2"
                    @click="deleteContentImgBlock(element,j)"
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
      </template>
      <div v-if="element.type===4">
        <div class="ict-border-bottom">
          <v-textarea
            v-model="element.content.text"
            placeholder="Введите цитату"
            outlined
            dense
            class="input-border-0"
            :dark="theme==='dark'"
            hide-details
          />
        </div>
        <v-text-field
          v-model="element.content.author"
          placeholder="Введите ФИО человека, должность"
          outlined
          dense
          class="input-border-0"
          :dark="theme==='dark'"
          hide-details
        />
      </div>
      <v-text-field
        v-if="element.type===5"
        v-model="element.content.text"
        placeholder="Введите подзаголовок"
        outlined
        dense
        class="input-border-0"
        :dark="theme==='dark'"
        hide-details
      />
    </v-col>
  </draggable>
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'DraggableInputs',
  components: {
    draggable, VueEditor
  },
  props: {
    blocks: {
      type: Array,
      default: null
    },
    sizeBlock: {
      type: Number,
      default: 12
    }
  },
  emits: ['beforeCropMultipleInsert', 'updateBlock', 'deleteBlock', 'changeDialog', 'changeDialogContent', 'beforeCropInsert'],
  data: () => ({
    customToolbar: [{ align: '' }, { align: 'center' }, { align: 'justify' },
      { list: 'ordered' }, { list: 'bullet' }, 'bold', 'italic', 'underline', 'link', 'clean', 'video'],
    typesInput: [
      { id: 0, text: 'Текстовый блок' },
      { id: 1, text: 'Два блока' },
      { id: 2, text: 'Изображение' },
      { id: 3, text: 'Слайдер' },
      { id: 4, text: 'Цитата' },
      { id: 5, text: 'Подзаголовок' }
    ]
  }),
  computed: {
    ...mapState('app', { theme: 'theme' })
  },
  methods: {
    changeList(i, val) {
      let oldImgName = i.content.imagesName.splice(val.moved.oldIndex, 1)[0]
      i.content.imagesName.splice(val.moved.newIndex, 0, oldImgName)
      this.$emit('updateBlock')
    },
    eyeBlock(el) {
      this.$emit('updateBlock')
      this.$emit('changeDialogContent', el)
      this.$emit('changeDialog', true)
    },
    deleteBlock(i) {
      this.$emit('deleteBlock', i)
    },
    changeContentImgBlock(i, val) {
      i.content.img = val
      if (val.type.match('image.*')) {
        let reader = new FileReader()
        reader.onload = (e) => {
          i.content.imgName.original = e.target.result
          i.content.imgName.croppie = e.target.result
        }
        reader.readAsDataURL(val)
      }
      setTimeout(() => {
        this.$emit('beforeCropInsert', i)
      }, 300)
    },
    changeContentImagesBlock(i, vals) {
      i.content.images = i.content.images.concat(vals)
      this.$emit('updateBlock')
      this.$emit('beforeCropMultipleInsert', i, vals)
    },
    deleteContentImgBlock(i, j) {
      i.content.images.splice(j, 1)
      i.content.imagesName.splice(j, 1)
      this.$emit('updateBlock')
    },
    changeTypeBlock(i, type) {
      i.type = type
      switch (type) {
        case 0:
          i.content = { text: '' }
          break
        case 1:
          i.content = { blocks: [{ id: 1000, type: -1 }, { id: 2000, type: -1 }] }
          break
        case 2:
          i.content = { img: null, imgName: { original: '', croppie: '', blob: null }, text: '' }
          break
        case 3:
          i.content = { images: [], imagesName: [], text: '' }
          break
        case 4:
          i.content = { text: '', author: '' }
          break
        case 5:
          i.content = { text: '' }
          break
        default:
          i.content = {}
      }
      this.$emit('updateBlock')
    },
    getTextType(element) {
      const res = this.typesInput.find(x => x.id === element.type)
      return res ? res.text : 'Выберите блок'
    }
  }
}
</script>

<style lang="scss">
.input-bordered {
  border: 2px solid rgba(31, 41, 49, 0.6);
  border-radius: 5px;
  position: relative;
}

.ict-border-bottom {
  border-bottom: 2px solid rgba(31, 41, 49, 0.6)
}

.theme-dark {
  .input-bordered {
    border: 2px solid rgba(255, 255, 255, 0.6);
  }

  .ict-border-bottom {
    border-bottom: 2px solid rgba(255, 255, 255, 0.6)
  }
}

.input-bordered-label {
  z-index: 10;
  position: absolute;
  padding: 2.5px 10px;
  right: 0;
  top: -18px;
  border: 2px solid #0071B2;
  border-radius: 25px;
}

.delete-block {
  right: 190px;
  top: -18px;
}

.eye-block {
  right: 230px;
  top: -18px;
}

.input-file-container {
  position: relative;
  height: 120px;
  width: 478px;
  @media (max-width: 600px) {
    width: 100%;
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  label {
    cursor: pointer;
    border: 2px dashed #2DC0C5;
    height: 100%;
    width: 100%;
    color: #2DC0C5;

    div {
      color: #2DC0C5;
    }
  }
}
.img-name{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
</style>