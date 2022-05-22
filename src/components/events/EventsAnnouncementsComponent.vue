<template>
  <div>
    <v-row
      no-gutters
      class="flex-nowrap"
      align="stretch"
    >
      <div class="pr-3">
        <v-sheet class="announcement-calendar d-flex flex-column justify-center align-center">
          <div class="announcement-calendar-circles d-flex ">
            <div
              v-for="n in 4"
              :key="n"
              class="rounded-circle"
            />
          </div>
          <div class="announcement-calendar-day pt-1">
            {{ $moment(announcement.dateStart).format('DD') }}
          </div>
          <div class="announcement-calendar-month">
            {{ $moment(announcement.dateStart).format('MMMM') }}
          </div>
        </v-sheet>
      </div>
      <div class="announcement-text d-flex flex-column justify-space-between">
        <div>
          <div class="pb-1">
            <router-link
              :to="'/announcement/'+announcement.id"
              style="color: inherit"
              class="text-decoration-none"
            >
              {{ announcement.title }}
            </router-link>
          </div>
          <div>{{ `${announcement.place}, ${ $moment(announcement.dateStart).format('HH:mm') } ` }}</div>
        </div>
        <div class="d-flex flex-wrap">
          <BaseChip
            v-for="(item,i) in announcement.tags"
            :key="i"
            class="mt-1"
            :item="item"
          />
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EventsAnnouncements',
  components: { BaseChip: () => import('@/components/BaseChip') },
  props: {
    announcement: { type: Object, default: null }
  }
}
</script>

<style scoped lang="scss">
.announcement-calendar {
  height: 70px;
  width: 70px;
  background: linear-gradient(137.23deg, #2E9CEF 1.6%, #2DC0C5 98%);
  border-radius: 6px;
  position: relative;
  @media (max-width: 600px) {
    height: 55px;
    width: 55px;
  }
}

.announcement-calendar-day {
  font-size: 36px;
  line-height: 35px;
  font-family: "Rubik-Medium", sans-serif !important;
  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 25px;
  }
}

.announcement-calendar-month {
  line-height: 19px;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
}

.announcement-calendar-circles {
  position: absolute;
  top: 4px;
  }

.announcement-calendar-circles div {
  height: 5px;
  width: 5px;
  margin: 0 4px;
  @media (max-width: 600px) {
    height: 4px;
    width: 4px;
    margin: 0 3px;
  }
}


.announcement-text {
  font-size: 18px;
  line-height: 23px;
  @media (max-width: 1904px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 12px;
  }
}
</style>