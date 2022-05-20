<template>
  <v-container>
    <div class="text-center pb-2 text-h6 pb-sm-10 text-sm-h4 text-xl-h3">
      Поступление в МАГИСТРАТУРУ
    </div>
    <ProgramsComponent :programs="programs" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MagistracyView',
  components: { ProgramsComponent: () => import('@/components/ProgramsComponent') },
  computed: mapGetters('programs', { programs: 'magistracy' })
}
</script>