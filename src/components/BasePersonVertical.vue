<template>
  <v-sheet
    class="person rounded-pill mx-auto"
    :max-width="$vuetify.breakpoint.sm?250:300"
  >
    <div class="person-img-container rounded-circle">
      <v-img
        width="100%"
        height="100%"
        :src="person.img"
      />
    </div>
    <div class="px-2 px-md-5 pb-12 pb-md-16 pt-1 pt-md-3 text-center">
      <div class="text-h6">
        {{ person.name }}
      </div>
      <div>{{ person.position }}</div>
      <div class="d-flex align-center person-link px-1">
        <v-icon
          class="mr-1 person-link-icon"
          :small="$vuetify.breakpoint.smAndDown"
        >
          mdi-email-outline
        </v-icon>
        <a
          :href="'mailto: '+person.email"
          class="person-email"
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

@each $theme in $themes {
  .#{map-get($theme, "name")} {
    .person {
      background-color: map-get($theme, "bg-section");

      .person-link a div {
        color: map-get($theme, "subtitle-color");
      }
    }
  }
}

.person {
  width: 100%;

  .text-h6 {
    line-height: normal;
    @media (max-width: 600px) {
      font-size: 16px !important;
    }
  }

  * {
    @media (max-width: 600px) {
      font-size: 12px;
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
    width: calc(100% - 40px);
    position: relative;
    @media (max-width: 600px) {
      width: calc(100% - 16px);
    }
  }
}
</style>