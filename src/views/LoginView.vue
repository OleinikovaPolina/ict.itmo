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
          placeholder="Введите пароль"
          outlined
          dense
          class="search-input rounded"
          :dark="theme==='dark'"
          :color="theme==='dark'?'#00A1FF':'#005A8E'"
          hide-details
        />
      </v-col>
      <div class="pt-6 text-center">
        <v-btn>Сохранить</v-btn>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginView',
  computed: {
    ...mapState('app', ['theme'])
  }
}
</script>

<style scoped>

</style>