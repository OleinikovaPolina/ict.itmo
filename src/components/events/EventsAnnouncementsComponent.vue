<template>
  <div>
    <v-row>
      <v-col
        cols="4"
        md="3"
      >
        <v-sheet class="announ-calendar d-flex flex-column justify-center align-center">
          <div class="announ-calendar-circles d-flex ">
            <div
              v-for="n in 4"
              :key="n"
              class="rounded-circle"
            />
          </div>
          <div class="announ-calendar-day pt-1">
            {{ announ.date.getDate() }}
          </div>
          <div class="announ-calendar-month">
            {{ announ.month }}
          </div>
        </v-sheet>
      </v-col>
      <v-col
        cols="8"
        md="9"
        class="announ-text"
      >
        <div>
          <router-link
            :to="'/new/'+announ.id"
            style="color: inherit"
            class="text-decoration-none"
          >
            {{ announ.name }}
          </router-link>
        </div>
        <div>{{ `${announ.place}, ${announ.date.getHours()}:${announ.date.getMinutes()} ` }}</div>
        <div class="d-flex flex-wrap">
          <BaseChip
            v-for="(item,i) in announ.items"
            :key="i"
            :item="item"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EventsAnnouncements',
  components: { BaseChip: () => import('@/components/BaseChip') },
  props: {
    announ: { type: Object, default: null }
  }
}
</script>

<style scoped lang="scss">
.announ-calendar {
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

.announ-calendar-day {
  font-size: 36px;
  line-height: 35px;
  font-family: "Rubik-Medium", sans-serif !important;
  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 25px;
  }
}

.announ-calendar-month {
  line-height: 19px;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.announ-calendar-circles {
  position: absolute;
  top: 4px;
}

.announ-calendar-circles div {
  height: 5px;
  width: 5px;
  margin: 0 4px;
  @media (max-width: 600px) {
    height: 4px;
    width: 4px;
    margin: 0 3px;
  }
}


.announ-text {
  font-size: 18px;
  line-height: 23px;
  @media (max-width: 1904px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>