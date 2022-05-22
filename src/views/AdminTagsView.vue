<template>
  <v-container>
    <v-row align="center">
      <v-col
        cols="6"
        md="3"
      >
        <div
          class="pl-4 subtitle-color text-body-2"
          style="opacity: 0.7"
        >
          Раздел тега<span class="error--text">*</span>
        </div>
        <v-select
          v-model="tagForm.categoryId"
          :items="tagsCategories"
          placeholder="Введите пароль"
          item-value="id"
          item-text="name"
          outlined
          dense
          class="search-input"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
          append-icon="mdi-chevron-down"
        />
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <div
          class="pl-4 subtitle-color text-body-2"
          style="opacity: 0.7"
        >
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
      <v-col cols="2">
        <div style="width:fit-content">
          <BaseButton
            v-if="tagForm.id"
            text="Изменить"
            :click-btn="true"
            :disabled="!isLoad"
            @clickBtnCallback="updateTagFunction"
          />
          <BaseButton
            v-else
            text="Сохранить"
            :click-btn="true"
            :disabled="!isLoad"
            @clickBtnCallback="addTagFunction"
          />
        </div>
      </v-col>
    </v-row>
    <div class="pt-5 pt-md-10">
      <div class="font-weight-bold">
        Существуюшие теги
      </div>
      <div
        v-for="(category,i) in tagsCategories"
        :key="i"
        class="d-flex pt-md-2 align-center flex-wrap"
      >
        <div class="pr-4">
          {{ category.name }}
        </div>
        <BaseChip
          v-for="(item,j) in tags.filter(tag=>tag.category.id===category.id)"
          :key="j"
          :item="item"
        >
          <template #chip-btns>
            <v-btn
              icon
              dark
              x-small
              @click="clickTagToUpdate(item)"
            >
              <v-icon small>
                mdi-pencil-outline
              </v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              x-small
              @click="deleteTagFunction(item.id)"
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminTagsView',
  components: {
    BaseChip: () => import('@/components/BaseChip'),
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  data: () => ({
    tagForm: { name: '', categoryId: -1 },
    isLoad: true
  }),
  computed: {
    ...mapState('app', { theme: 'theme' }),
    ...mapState('news', ['tags', 'tagsCategories', 'news'])
  },
  async mounted() {
    await this.getTags()
  },
  methods: {
    ...mapActions('news', ['getNews', 'getTags']),
    ...mapActions('admin', ['addTag', 'updateTag','deleteTag']),
    clickTagToUpdate(tag) {
      this.tagForm = {}
      this.tagForm.id = tag.id
      this.tagForm.name = tag.name
      this.tagForm.categoryId = tag.category.id
    },
    async updateTagFunction() {
      this.isLoad = false
      await this.updateTag(this.tagForm)
      this.tagForm = {}
      this.isLoad = true
    },
    async addTagFunction() {
      this.isLoad = false
      await this.addTag(this.tagForm)
      this.tagForm = {}
      this.isLoad = true
    },
    async deleteTagFunction(id) {
      await this.deleteTag(id)
    }
  }
}
</script>