<template>
  <v-container
    class="d-flex align-center justify-center"
    style="height: 100%;"
  >
    <v-col
      cols="12"
      md="6"
    >
      <div class="text-h5 text-sm-h4 pb-6 text-center">
        Вход в личный кабинет
      </div>
      <v-col
        cols="9"
        class="mx-auto pa-0"
      >
        <div class="pl-4">
          Логин<span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.username"
          placeholder="Введите логин"
          outlined
          dense
          class="search-input"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
        />
      </v-col>
      <v-col
        cols="9"
        class="mx-auto pa-0 pt-2"
      >
        <div class="pl-4">
          Пароль<span class="error--text">*</span>
        </div>
        <v-text-field
          v-model="form.password"
          placeholder="Введите пароль"
          outlined
          dense
          class="search-input rounded"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        />
      </v-col>
      <div
        class="text-center text-body-2"
        :style="{opacity:error?1:0}"
      >
        Неверные данные
      </div>
      <div class="pt-4">
        <BaseButton
          class="mx-auto"
          text="Войти"
          :click-btn="true"
          @clickBtnCallback="loginFunction"
        />
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LoginView',
  components: {
    BaseButton: () => import('@/components/admin/BaseButton')
  },
  data: () => ({ show1: false, form: { username: '', password: '' }, error: false }),
  computed: mapState('app', { theme: 'theme' }),
  methods: {
    ...mapActions('admin', ['login']),
    async loginFunction() {
      await this.login(this.form)
      if (localStorage.getItem('token')) {
        this.error = false
        this.$router.push('published').then()
      } else {
        this.error = true
      }
    }
  }
}
</script>