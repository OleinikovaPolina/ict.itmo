<template>
  <v-sheet
    class="person rounded-pill mx-auto section-background"
    :max-width="$vuetify.breakpoint.sm?250:280"
  >
    <div class="person-img-container rounded-circle">
      <v-img
        width="100%"
        height="100%"
        :src="person.img"
      />
    </div>
    <div class="px-2 px-md-5 pb-12 pb-md-12 pt-1 pt-md-3 text-center">
      <div class="text-h6 pb-1">
        {{ person.name }}
      </div>
      <div>{{ person.position }}</div>
      <div class="d-flex align-center justify-center person-link px-1 pb-md-2">
        <v-icon
          right
          class="mr-1 person-link-icon"
          :small="$vuetify.breakpoint.smAndDown"
        >
          mdi-email-outline
        </v-icon>
        <a
          :title="person.email"
          :href="'mailto: '+person.email"
          class="person-email subtitle-color"
        >
          {{ person.email }}
        </a>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'BasePersonVertical',
  props: {
    person: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.person {
  width: 100%;

  .text-h6 {
    line-height: normal;
    font-size: 28px !important;
    @media (max-width: 1904px) {
      font-size: 18px !important;
    }
    @media (max-width: 1264px) {
      font-size: 16px !important;
    }
    @media (max-width: 955.5px) {
      font-size: 22px !important;
    }
    @media (max-width: 600px) {
      font-size: 12px !important;
    }
  }

  * {
    line-height: normal;
    font-size: 19px;
    @media (max-width: 1904px) {
      font-size: 14px ;
    }
    @media (max-width: 1264px) {
      font-size: 10px ;
    }
    @media (max-width: 955.5px) {
      font-size: 16px ;
    }
    @media (max-width: 600px) {
      font-size: 9.5px ;
    }
  }

  .person-img-container {
    width: 100%;
  }

  .person-link a div {
    opacity: 0.8;
    transition: all .4s;
  }

  .person-link-icon {
    color: #2DC0C5
  }

  .person-link a div:hover {
    opacity: 1;
  }

  .person-email {
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }
}
</style>