<template>
  <v-container>
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
    <div class="input-bordered mb-6">
      <v-text-field
        :placeholder="`Название ${typeDate===1?'новости':'анонса'}`"
        outlined
        dense
        class="input-border-0 text-h6 input-blue"
        :dark="theme==='dark'"
        hide-details
      />
    </div>
    <div
      v-if="typeDate===1"
      class="input-bordered mb-6 py-6"
    >
      <div class="input-bordered-label">
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
          @change="(e)=>{form.cover = e.target.files[0]}"
        >
        <label
          for="cover"
          class="d-flex align-center py-6 px-12 text-center"
          @drop="(e)=>{form.cover = e.dataTransfer.files[0]}"
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
    <div class="input-bordered pl-2">
      <v-checkbox
        v-model="form.isSlider"
        :dark="theme==='dark'"
        dense
        label="Добавить в слайдер"
        class="input-blue"
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
            @change="(e)=>{form.sliderImg = e.target.files[0]}"
          >
          <label
            for="sliderImg"
            class="d-flex align-center py-6 px-12 text-center"
            @drop="(e)=>{form.sliderImg = e.dataTransfer.files[0]}"
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
          v-if="form.sliderImg"
          class="text-center"
        >
          {{ form.sliderImg.name }}
        </div>
      </div>
    </div>
    <v-row class="pt-4">
      <v-col
        cols="4"
        md="3"
      >
        <div class="pl-4 subtitle-color">
          Дата начала мероприятия<span class="error--text">*</span>
        </div>
        <v-text-field
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
        cols="4"
        md="3"
      >
        <div class="pl-4 subtitle-color">
          Дата конца мероприятия
        </div>
        <v-text-field
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
        cols="3"
        md="2"
      >
        <div class="pl-4 subtitle-color">
          Время начала
        </div>
        <v-text-field
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
    <v-row>
      <v-col
        cols="4"
        md="3"
      >
        <div class="pl-4 subtitle-color">
          Дата выхода поста<span class="error--text">*</span>
        </div>
        <v-text-field
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
        cols="3"
        md="2"
      >
        <div class="pl-4 subtitle-color">
          Время выхода<span class="error--text">*</span>
        </div>
        <v-text-field
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
    <v-col
      cols="12"
      md="4"
      class="px-0"
    >
      <div class="pl-4 subtitle-color">
        Место проведения<span class="error--text">*</span>
      </div>
      <v-text-field
        placeholder="Введите место мероприятия"
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
      md="4"
      class="px-0"
    >
      <div class="pl-4 subtitle-color">
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
                @click="remove(item)"
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
    <div class="d-flex pt-6">
      <BaseButton
        text="Опубликовать"
        :click-btn="true"
      />
      <BaseButtonOutlined
        class="ml-4"
        text="Предпросмотр"
        :click-btn="true"
      />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BaseChip from '@/components/BaseChip'

export default {
  name: 'AdminCreateEntryView',
  components: {
    BaseChip,
    BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  data: () => ({
    typeDate: 0,
    form: { tags: [], isSlider: false, sliderImg: null, cover: null },
    tags: [{ id: 1, type: 0, name: 'Название 1' },
      { id: 2, type: 1, name: 'Название 2' },
      { id: 3, type: 2, name: 'Название 3' },
      { id: 4, type: 2, name: 'Название 4' },
      { id: 5, type: 3, name: 'Название 5' }]
  }),
  computed: mapState('app', ['theme']),
  methods: {
    changeTypeData(val) {
      this.typeDate = val
    },
    remove(item) {
      const index = this.form.tags.indexOf(item.id)
      if (index >= 0) this.form.tags.splice(index, 1)
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
</style>