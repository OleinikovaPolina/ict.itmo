<template>
  <v-container>
    <div class="d-flex">
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
    <v-row class="flex-wrap pt-6">
      <v-col
        v-for="(info,i) in infos"
        :key="i"
        cols="12"
        md="6"
      >
        <BaseBlock :info="info" />
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center pt-4 pt-md-8">
      <button
        class="btn-nav mr-3"
        @click="prev"
      >
        <v-icon
          :large="$vuetify.breakpoint.mdAndUp"
          color="white"
        >
          mdi-chevron-left
        </v-icon>
      </button>
      <v-btn
        v-for="n in pages"
        :key="n"
        icon
        :small="$vuetify.breakpoint.smAndDown"
        class="btn-nav-nums"
        :class="(n-1)===activeIndex?'is-active':''"
        @click="clickDelimiters(n-1)"
      >
        <span>{{ n }}</span>
      </v-btn>
      <button
        class="btn-nav ml-3"
        @click="next"
      >
        <v-icon
          :large="$vuetify.breakpoint.mdAndUp"
          color="white"
        >
          mdi-chevron-right
        </v-icon>
      </button>
    </div>
  </v-container>
</template>

<script>
import BaseBlock from '@/components/admin/BaseBlock'

export default {
  name: 'AdminPublishedView',
  components: { BaseBlock, BaseButtonOutlined: () => import('@/components/admin/BaseButtonOutlined') },
  data: () => ({
    infos: [
      {
        id: 1,
        tags: ['название 1', 'название 2'],
        name: 'Название анонса',
        date: '12.01.2021',
        time: '17:00',
        datePublish: '12.01.2021'
      },
      {
        id: 1,
        tags: ['название 1', 'название 2'],
        name: 'Название анонса',
        date: '12.01.2021',
        time: '17:00',
        datePublish: '12.01.2021'
      },
      {
        id: 1,
        tags: ['название 1', 'название 2'],
        name: 'Название анонса',
        date: '12.01.2021',
        time: '17:00',
        datePublish: '12.01.2021'
      }
    ],
    typeDate: 0,
    pages: 3,
    activeIndex: 0
  }),
  methods: {
    changeTypeData(val) {
      this.typeDate = val
    },
    next() {
      this.activeIndex = this.activeIndex < this.pages - 1 ? this.activeIndex + 1 : 0
    },
    prev() {
      this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.pages - 1
    },
    clickDelimiters(i) {
      this.activeIndex = i
    }
  }
}
</script>

<style scoped lang="scss">
.btn-nav {
  background-color: #2DC0C5;
  transition: all .3s ease-in-out;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
}

.btn-nav:hover {
  transform: scale(1.15);
}

.btn-nav:active {
  background-color: #1E7F83;
}

.btn-nav.is-active {
  background-color: #1E7F83;
}

.btn-nav-nums span {
  font-size: 18px;
  line-height: 20px;
  font-family: "OpenSans-Bold", sans-serif !important;
  opacity: 0.6;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.theme-dark {
  .btn-nav-nums span {
    opacity: 0.8;
  }
}

.btn-nav-nums.is-active span {
  color: #2DC0C5 !important;
  opacity: 1;
}
</style>