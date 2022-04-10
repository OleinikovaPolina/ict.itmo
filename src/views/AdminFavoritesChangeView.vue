<template>
  <div>
    <HackathonComponent v-if="$route.params.id==='7'" />
    <CompetitionComponent v-if="$route.params.id==='8'" />
    <EventComponent v-if="parseInt($route.params.id)<7"/>
  </div>
</template>

<script>
export default {
  name: 'AdminFavoritesChangeView',
  components: {
    EventComponent: () => import('@/components/admin/favorites/EventComponent'),
    HackathonComponent: () => import('@/components/admin/favorites/HackathonComponent'),
    CompetitionComponent: () => import('@/components/admin/favorites/CompetitionComponent')
  }
}
</script>