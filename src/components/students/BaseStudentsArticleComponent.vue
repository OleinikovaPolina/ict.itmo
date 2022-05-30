<template>
  <v-row class="d-flex align-center justify-center">
    <v-col class="text-center d-md-none">
      <div class="text-h6 text-sm-h5">
        {{ block.title }}
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      :class="$vuetify.breakpoint.smAndDown?'text-center':''"
      class="d-flex flex-column justify-space-around order-2 order-md-0"
    >
      <div>
        <div class="pb-8 text-h4 text-xl-h3 d-none d-md-block">
          {{ block.title }}
        </div>
        <div
          class="text-subtitle-1 pb-6"
          v-html="block.description"
        />
      </div>
      <div :class="$vuetify.breakpoint.smAndDown?'mx-auto':''">
        <BaseButton :link="'/article/4'" />
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-center"
    >
      <TheStudentsTwoPhotoComponent
        :img1="block.image1"
        :img2="block.image2"
        :caption="block.caption"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BaseStudentsArticleComponent',
  components: {
    BaseButton: () => import('@/components/BaseButton'),
    TheStudentsTwoPhotoComponent: () => import('@/components/students/TheStudentsTwoPhotoComponent')
  },
  props: {
    block: {
      type: Object,
      default: null
    }
  }
}
</script>
