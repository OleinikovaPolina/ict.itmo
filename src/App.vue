<template>
  <div :class="'theme-' + theme">
    <v-app
      class="app-background"
      :class="{'active-animation-header':!dialog}"
    >
      <TheHeaderComponent v-if="pageAdmin.filter(x=>x===$route.name).length===0" />
      <TheHeaderAdminComponent v-else />
      <v-main class="mt-header">
        <router-view :animation-header="dialog" />
      </v-main>
      <TheFooterComponent v-if="pageNoFooter.filter(x=>x===$route.name).length===0" />
      <TheDialogThemeComponent
        :dialog="dialog"
        @changeDialog="changeDialog"
      />
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TheDialogThemeComponent: () => import('@/components/app/TheDialogThemeComponent'),
    TheHeaderComponent: () => import('@/components/app/TheHeaderComponent'),
    TheHeaderAdminComponent: () => import('@/components/admin/TheHeaderComponent'),
    TheFooterComponent: () => import('@/components/app/TheFooterComponent')
  },
  data: () => ({
    dialog: false
  }),
  computed: mapState('app', ['theme', 'pageNoFooter', 'pageAdmin']),
  async mounted() {
    const localTheme = localStorage.getItem('theme')
    if (localTheme === 'dark') {
      this.changeTheme(localTheme)
    } else if (!localTheme) {
      this.dialog = true
    }
    const token = localStorage.getItem('token')
    if (token) {
      await this.verify()
    }
  },
  methods: {
    changeDialog(val) {
      this.dialog = val
    },
    ...mapActions('app', ['changeTheme']),
    ...mapActions('admin', ['verify'])
  }
}
</script>

<style scoped lang="scss">
.mt-header {
  margin-top: 4.5em;
  @media (min-width: 1904px) {
    margin-top: 5.5rem;
  }
}
</style>