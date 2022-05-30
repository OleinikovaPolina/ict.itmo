<template>
  <v-container class="fill-height">
    <HomeArticleComponent v-if="$route.params.id==='1'" />
    <HackathonComponent v-if="$route.params.id==='2'" />
    <CompetitionComponent v-if="$route.params.id==='3'" />
    <TwoPhotosComponent v-if="$route.params.id==='4'" />
  </v-container>
</template>

<script>
export default {
  name: 'AdminUpdateArticlesView',
  components: {
    HomeArticleComponent: () => import('@/components/admin/favorites/HomeArticleComponent'),
    TwoPhotosComponent: () => import('@/components/admin/favorites/TwoPhotosComponent'),
    HackathonComponent: () => import('@/components/admin/favorites/HackathonComponent'),
    CompetitionComponent: () => import('@/components/admin/favorites/CompetitionComponent')
  }
}
</script>