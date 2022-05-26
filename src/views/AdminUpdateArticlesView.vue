<template>
  <v-container class="fill-height">
    <HackathonComponent v-if="$route.params.id==='2'" />
    <CompetitionComponent v-if="$route.params.id==='3'" />
  </v-container>
</template>

<script>
export default {
  name: 'AdminUpdateArticlesView',
  components: {
    HackathonComponent: () => import('@/components/admin/favorites/HackathonComponent'),
    CompetitionComponent: () => import('@/components/admin/favorites/CompetitionComponent')
  }
}
</script>