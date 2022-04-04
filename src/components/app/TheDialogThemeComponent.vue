<template>
  <v-dialog
    :value="dialog"
    :max-width="$vuetify.breakpoint.xs?300:450"
    persistent
  >
    <div class="dialog-theme pt-4 pb-2 pt-md-8 pb-md-6 text-center animation--active">
      <div class="pill-blue rounded-pill" />
      <div class="circle-purple-1 rounded-circle" />
      <div class="pill-orange rounded-pill" />
      <div class="pill-green rounded-pill" />
      <div class="circle-blue rounded-circle" />
      <div class="circle-green rounded-circle" />
      <div class="circle-purple rounded-circle" />
      <div class="pill-pink rounded-pill" />
      <div style="z-index: 5;position:relative;">
        <div class="text-h6 text-md-h5">
          На какой ты стороне?
        </div>
        <div class="py-md-4 d-flex justify-center align-center">
          <div class="subtitle-color">
            светлая
          </div>
          <div class="px-3 dialog-theme-slash">
            /
          </div>
          <div class="subtitle-color-diff">
            темная
          </div>
        </div>
        <SwitchComponent />
        <BaseButton
          class="mx-auto pt-2 pt-md-4"
          text="Выбрать"
          :click-btn="true"
          :small-btn="true"
          @clickBtnCallback="clickBtnCallback"
        />
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheDialogThemeComponent',
  components: {
    BaseButton: () => import('@/components/BaseButton'),
    SwitchComponent: () => import('@/components/app/SwitchComponent')
  },
  props: {
    dialog: { type: Boolean, default: false }
  },
  methods: {
    clickBtnCallback() {
      if (!localStorage.getItem('theme')) {
        this.changeTheme('light')
      }
      this.$emit('changeDialog', false)
    },
    ...mapActions('app', ['changeTheme'])
  }
}
</script>

<style lang="scss">
@keyframes pill-left-animation {
  0% {
    transform: translateX(-75px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes pill-right-animation {
  0% {
    transform: translateX(75px);
  }
  100% {
    transform: translateX(0);
  }
}

.v-dialog {
  box-shadow: none !important;
}

.dialog-theme {
  border: 1px solid #00A1FF;
  border-radius: 30px;
  position: relative;
  width: 450px;
  height: 280px;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 300px;
    height: 185px;
  }


  .pill-blue {
    position: absolute;
    top: -5%;
    left: -5%;
    height: 40%;
    width: 45%;
    background-color: #7BDBFA;
    transform: translateX(-75px);
  }

  .circle-purple-1 {
    position: absolute;
    top: 0;
    left: 39%;
    height: 12%;
    width: 7%;
    background-color: #835FFE;
  }

  .pill-green {
    position: absolute;
    left: -5%;
    bottom: 5%;
    height: 35%;
    width: 35%;
    background-color: #18FFBA;
    transform: translateX(-75px);
  }

  .circle-blue {
    position: absolute;
    left: 0;
    bottom: 40%;
    height: 17%;
    width: 10%;
    background-color: #00A1FF;
  }

  .pill-orange {
    position: absolute;
    right: -10%;
    bottom: -15%;
    height: 35%;
    width: 90%;
    background-color: #FF776E;
    transform: translateX(75px);
  }

  .circle-green {
    position: absolute;
    right: 0;
    bottom: 20%;
    height: 15%;
    width: 10%;
    background-color: #00DEA9;
  }

  .pill-pink {
    position: absolute;
    right: -10%;
    bottom: 50%;
    height: 30%;
    width: 35%;
    background-color: #FF0281;
    transform: translateX(75px);
  }

  .circle-purple {
    position: absolute;
    right: -2%;
    bottom: 72%;
    height: 20%;
    width: 12%;
    background-color: #6A30F4;
  }
  &.animation--active {
    .pill-blue {
      animation: pill-left-animation 1s forwards;
    }

    .pill-green {
      animation: pill-left-animation 1s .4s forwards;
    }

    .pill-orange {
      animation: pill-right-animation 1s .1s forwards;
    }

    .pill-pink {
      animation: pill-right-animation 1s .5s forwards;
    }
  }
}

.dialog-theme-slash {
  font-family: serif !important;
  font-size: 35px;
  transform: rotate(5deg);
  line-height: normal
}

</style>