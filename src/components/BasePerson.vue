<template>
  <v-sheet
    class="person person-horizontal rounded-pill mx-auto"
    :class="{'person-small':smallPerson}"
    :max-width="smallPerson?520:700"
  >
    <div class="d-flex">
      <div>
        <v-img
          :src="person.img"
          :width="$vuetify.breakpoint.mdAndUp?smallPerson?200:300:150"
          :height="$vuetify.breakpoint.mdAndUp?smallPerson?200:300:150"
          class="rounded-circle"
          cover
        />
      </div>
      <div
        class="pa-4 pl-2 pl-md-4 d-flex flex-column justify-center"
      >
        <div
          class="text-h6 "
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
            href="mailto: kapitonov.aleksandr@itmo.ru"
          >
            <div>{{ person.email }}</div>
          </a>
        </div>
        <div class="d-flex align-center person-link pt-1">
          <v-icon
            class="mr-1 mr-md-2"
            color="white"
            :small="$vuetify.breakpoint.smAndDown"
          >
            mdi-phone
          </v-icon>
          <a
            href="tel: +7 920-457-85-96"
          >
            <div>{{ person.tel }}</div>
          </a>
        </div>
      </div>
    </div>
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
  background-color: #00A1FF;

  .text-h6 {
    line-height: normal;
    @media (max-width: 600px) {
      font-size: 16px !important;
    }
  }

  * {
    color: white;
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .person-link a div {
    opacity: 0.8;
    transition: all .4s;
  }

  .person-link a div:hover {
    opacity: 1;
  }
}

.person.person-small {
  * {
    color: white;
    font-size: 14px;
    @media (max-width: 960px) {
      font-size: 11px;
    }
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
}
</style>