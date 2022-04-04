<template>
  <div :class="'theme-' + theme">
    <v-app class="app-background">
      <TheHeaderComponent v-if="pageAdmin.filter(x=>x===$route.name).length===0" />
      <TheHeaderAdminComponent v-else />
      <v-main style="margin-top: 5em">
        <router-view />
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
    dialog: false,
    pageAdmin: ['login', 'published', 'createEntry', 'favorites', 'tags'],
    pageNoFooter: ['notFound', 'login', 'published', 'createEntry', 'favorites', 'tags']
  }),
  computed: mapState('app', ['theme']),
  mounted() {
    const localTheme = localStorage.getItem('theme')
    if (localTheme === 'dark') {
      this.changeTheme(localTheme)
    } else if (!localTheme) {
      this.dialog = true
    }
  },
  methods: {
    changeDialog(val) {
      this.dialog = val
    },
    ...mapActions('app', ['changeTheme']
    )
  }
}
</script>