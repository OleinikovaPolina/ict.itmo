<template>
  <v-sheet
    class="person person-horizontal rounded-pill mx-auto d-flex align-stretch"
    :class="{'person-small':smallPerson}"
  >
    <v-col
      cols="6"
      md="5"
      class="pa-0 "
    >
      <v-img
        :src="person.img || require('../assets/images/people/nobody.png')"
        class="rounded-circle person-img-container"
        height="100%"
        position="center"
        cover
      />
    </v-col>
    <v-col
      cols="6"
      md="7"
      class="pa-4 pl-2 pl-md-4 d-flex flex-column justify-center"
    >
      <div
        class="text-h6"
        :class="smallPerson?'text-md-h5':'text-md-h4'"
      >
        {{ person.name }}
      </div>
      <div class="py-2">
        {{ person.position }}
      </div>
      <div class="d-flex align-center person-link">
        <v-icon
          class="mr-1 mr-md-2"
          color="white"
          :small="$vuetify.breakpoint.smAndDown"
        >
          mdi-email-outline
        </v-icon>
        <a
          :title="person.email"
          :href="'mailto: '+person.email"
          class="person-ellipses"
        >
          {{ person.email }}
        </a>
      </div>
      <div class="d-flex align-center person-link pt-1 pr-1">
        <v-icon
          class="mr-1 mr-md-2"
          color="white"
          :small="$vuetify.breakpoint.smAndDown"
        >
          mdi-phone
        </v-icon>
        <a
          :title="person.tel"
          :href="'tel: '+person.tel"
          class="person-ellipses"
        >
          {{ person.tel }}
        </a>
      </div>
    </v-col>
  </v-sheet>
</template>

<script>
export default {
  name: 'BasePerson',
  props: {
    person: {
      type: Object,
      default: null
    },
    smallPerson: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.person {
  background-color: #00A1FF !important;
  max-width: 350px;
  @media (min-width: 600px) {
    max-width: 650px;
  }
  @media (min-width: 1110px) {
    max-width: 700px;
  }

  .person-img-container {
    width: 300px;
    height: 300px;
    @media (max-width: 600px) {
      width: 150px;
      height: 150px;
    }
  }

  .text-h6 {
    line-height: normal;
    @media (max-width: 600px) {
      font-size: 15px !important;
    }
  }

  * {
    color: white;
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 11px;
    }
  }

  .person-link a {
    color: white;
    opacity: 0.8;
    transition: all .4s;
  }

  .person-link a:hover {
    opacity: 1;
  }

  .person-ellipses {
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 40px);
    white-space: nowrap;
    @media (max-width: 600px) {
      width: calc(100% - 16px);
    }
  }
}

.person.person-small {
  * {
    color: white;
    font-size: 17px;
    @media (max-width: 1263px) {
      font-size: 11px;
    }
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }

  max-width: 350px;
  max-height: 150px;
  @media (min-width: 600px) {
    max-height: 175px;
    max-width: 400px;
  }
  @media (min-width: 1110px) {
    max-width: 520px;
    max-height: 200px;
  }
  @media (min-width: 1904px) {
    max-height: 230px;
  }

  .person-img-container {
    width: 140px;
    @media (min-width: 768px) {
      width: 175px;
    }
    @media (min-width: 1110px) {
      width: 200px;
    }
    @media (min-width: 1904px) {
      width: 230px;
    }
  }
}
</style>