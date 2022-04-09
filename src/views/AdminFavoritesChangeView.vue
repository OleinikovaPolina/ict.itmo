<template>
  <div>
    <CompetitionComponent v-if="$route.params.id==='7'" />
  </div>
</template>

<script>
export default {
  name: 'AdminFavoritesChangeView',
  components: { CompetitionComponent: () => import('@/components/admin/favorites/CompetitionComponent') }
}
</script>

<style scoped>

</style>