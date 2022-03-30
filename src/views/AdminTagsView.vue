<template>
  <v-container>
    <v-row align="center">
      <v-col
        cols="3"
      >
        <div class="pl-4 subtitle-color">
          Раздел тега<span class="error--text">*</span>
        </div>
        <v-select
          v-model="tagForm.type"
          :items="tagsNames"
          placeholder="Введите пароль"
          item-value="id"
          item-text="name"
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
      >
        <div class="pl-4 subtitle-color">
          Название тега<span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="tagForm.name"
          placeholder="Название тега"
          outlined
          dense
          class="search-input"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
        />
      </v-col>
      <v-spacer />
      <v-col
        cols="2"
        class="d-flex justify-end"
      >
        <div style="width:fit-content">
          <BaseButton
            v-if="tagForm.id"
            text="Изменить"
            :click-btn="true"
          />
          <BaseButton
            v-else
            text="Сохранить"
            :click-btn="true"
          />
        </div>
      </v-col>
    </v-row>
    <div class="pt-5 pt-md-10">
      <div class="font-weight-bold">
        Существуюшие теги
      </div>
      <div
        v-for="(tag,i) in tags"
        :key="i"
        class="d-flex pt-md-2 align-center"
      >
        <div class="pr-4">
          {{ tag.name }}
        </div>
        <BaseChip
          v-for="(item,j) in tag.items"
          :key="j"
          :item="item"
        >
          <template #chip-btns>
            <v-btn
              icon
              dark
              x-small
              @click="tagForm=item"
            >
              <v-icon small>
                mdi-pencil-outline
              </v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              x-small
            >
              <v-icon small>
                mdi-close-circle-outline
              </v-icon>
            </v-btn>
          </template>
        </BaseChip>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdminTagsView',
  components: {
    BaseChip: () => import('@/components/BaseChip'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  data: () => ({
    tags: [
      {
        name: 'Факультет',
        items: [{ id: 1, type: 0, name: 'Факультет' },
          { id: 1, type: 0, name: 'Факультет' },
          { id: 1, type: 0, name: 'Факультет' }]
      },
      {
        name: 'Хакатоны',
        items: [{ id: 1, type: 1, name: 'Факультет' },
          { id: 1, type: 1, name: 'Факультет' },
          { id: 1, type: 1, name: 'Факультет' }]
      },
      {
        name: 'Конференции',
        items: [{ id: 1, type: 2, name: 'Факультет' },
          { id: 1, type: 2, name: 'Факультет' },
          { id: 1, type: 2, name: 'Факультет' }]
      },
      {
        name: 'Студ. жизнь',
        items: [{ id: 1, type: 3, name: 'Факультет' },
          { id: 1, type: 3, name: 'Факультет' },
          { id: 1, type: 3, name: 'Факультет' }]
      }
    ],
    tagsNames: [{ id: 0, name: 'Факультет' }, { id: 1, name: 'Хакатоны' },
      { id: 2, name: 'Конференции' }, { id: 3, name: 'Студ. жизнь:' }],
    tagForm: {}
  }),
  computed: {
    ...mapState('app', ['theme'])
  }
}
</script>