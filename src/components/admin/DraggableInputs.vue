<template>
  <draggable
    :list="blocks"
    class="d-flex flex-wrap"
  >
    <v-col
      v-for="(element,i) in blocks"
      :key="element.id"
      cols="12"
      :md="sizeBlock"
      class="input-bordered mb-6 pa-0 pt-4"
      style="min-height: 60px"
    >
      <div class="input-bordered-label pa-0">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <div
              v-bind="attrs"
              class="input-border-0 input-blue px-2 py-1 d-flex justify-space-between"
              style="width: 200px"
              v-on="on"
            >
              {{ getTextType(element) }}
              <v-icon
                color="#0071B2"
                :style="{transform:attrs['aria-expanded']==='true'?'rotate(180deg)':''}"
              >
                mdi-chevron-down
              </v-icon>
            </div>
          </template>
          <v-list>
            <v-radio-group
              class="ma-0"
              hide-details
              :value="element.type"
              @change="changeTypeBlock(i,$event)"
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
      <v-text-field
        v-if="element.type===0"
        v-model="element.content.text"
        placeholder="Введите текст"
        outlined
        dense
        class="input-border-0"
        :dark="theme==='dark'"
        hide-details
      />
      <template v-if="element.type===1">
        <div class="pt-8 px-4">
          <DraggableInputs
            :blocks="element.content.blocks"
            :size-block="6"
          />
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
        <div class="pb-4">
          <div
            class="input-file-container mx-auto"
            @dragover.prevent
            @drop.prevent
          >
            <input
              :id="'img-' +sizeBlock+'-'+ i"
              type="file"
              @change="(e)=>{element.content.img = e.target.files[0]}"
            >
            <label
              :for="'img-' +sizeBlock+'-'+ i"
              class="d-flex align-center justify-center py-6 px-12 text-center"
              @drop="(e)=>{element.content.img = e.dataTransfer.files[0]}"
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
              :id="'images-' +sizeBlock+'-'+ i"
              type="file"
              multiple
              @change="(e)=>{element.content.images = element.content.images.concat(Array.from(e.target.files))}"
            >
            <label
              :for="'images-' +sizeBlock+'-'+ i"
              class="d-flex align-center py-md-6 px-md-12 text-center"
              @drop="(e)=>{element.content.images = element.content.images.concat(Array.from(e.dataTransfer.files))}"
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
            <v-col
              v-for="(img,j) in element.content.images"
              :key="j"
              cols="12"
              md="6"
              class="d-flex mt-2 pa-0"
            >
              <div>{{ j + 1 }}.</div>
              <div class="input-slider-img-block px-2 ml-2">
                {{ img.name }}
                <v-btn
                  icon
                  x-small
                  color="#0071B2"
                  @click="element.content.images.splice(j, 1)"
                >
                  <v-icon small>
                    mdi-close-circle-outline
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-col>
        </div>
      </template>
      <div v-if="element.type===4">
        <div style="border-bottom: 2px solid rgba(31, 41, 49, 0.6)">
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

export default {
  name: 'DraggableInputs',
  components: {
    draggable
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
  emits: ['updateProp'],
  computed: {
    typesInput() {
      if (this.sizeBlock === 6) {
        return [
          { id: 0, text: 'Текстовый блок' },
          { id: 2, text: 'Изображение' },
          { id: 3, text: 'Слайдер' },
          { id: 4, text: 'Цитата' },
          { id: 5, text: 'Подзаголовок' }
        ]
      } else {
        return [
          { id: 0, text: 'Текстовый блок' },
          { id: 1, text: 'Два блока' },
          { id: 2, text: 'Изображение' },
          { id: 3, text: 'Слайдер' },
          { id: 4, text: 'Цитата' },
          { id: 5, text: 'Подзаголовок' }
        ]
      }

    }, ...mapState('app', ['theme'])
  },
  methods: {
    changeBlock(newBlock) {
      this.$emit('updateProp', newBlock)
    },
    changeTypeBlock(i, type) {
      let newVal = this.blocks[i]
      newVal.type = type
      switch (this.blocks[i].type) {
        case 0:
          newVal.content = { type: 0, text: '' }
          break
        case 1:
          newVal.content = { type: 1, blocks: [{ id: 1000, type: -1 }, { id: 2000, type: -1 }] }
          break
        case 2:
          newVal.content = { type: 2, img: null, text: '' }
          break
        case 3:
          newVal.content = { type: 3, images: [], text: '' }
          break
        case 4:
          newVal.content = { type: 4, text: '', author: '' }
          break
        case 5:
          newVal.content = { type: 5, text: '' }
          break
        default:
          newVal.content = { type: -1 }
      }
      this.changeBlock(this.blocks.map(o => o.id === i ? newVal : o))
    },
    getTextType(element) {
      const res = this.typesInput.find(x => x.id === element.type)
      return res ? res.text : 'Выберите блок'
    }
  }
}
</script>

<style scoped lang="scss">
.input-bordered {
  border: 2px solid rgba(31, 41, 49, 0.6);
  border-radius: 5px;
  position: relative;
}

.input-bordered-label {
  position: absolute;
  padding: 2.5px 10px;
  right: 0;
  top: -18px;
  background-color: white;
  border: 2px solid #0071B2;
  border-radius: 25px;
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

.input-slider-img-block {
  border: 1px solid #0071B2;
  border-radius: 20px;
}
</style>