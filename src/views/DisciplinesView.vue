<template>
  <div v-if="disciplines">
    <v-container>
      <div class="pb-4 pb-md-6 text-body-2 breadcrumbs">
        <span>Поступление /</span>
        <router-link
          v-if="disciplines.type===0"
          to="/baccalaureate"
        >
          Бакалавриат
        </router-link>
        <router-link
          v-if="disciplines.type===1"
          to="/magistracy"
        >
          Магистратура
        </router-link>
        <span>/</span>
        <router-link
          :to="'/program/'+disciplines.code"
        >
          {{ disciplines.name }}
        </router-link>
        <span>/ Дисциплины</span>
      </div>
      <div class="pb-2 text-h5 pb-md-4 text-sm-h4 text-xl-h3">
        Дисциплины
      </div>
    </v-container>
    <v-expansion-panels
      multiple
      accordion
      flat
    >
      <v-expansion-panel
        v-for="(item,n) in disciplines.data"
        :key="item.semester"
        style="background-color: inherit"
      >
        <v-expansion-panel-header
          :id="'c'+n"
          class="container px-0"
          @click="activeLine(n)"
        >
          <template #actions>
            <v-icon
              large
              color="primary"
              class="order-0"
            >
              $expand
            </v-icon>
          </template>
          <div class="text-h6 text-xl-h5 order-1">
            {{ item.semester }} семестр
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="section-background px-0 pt-3">
          <div
            :id="'ict-line-'+n+'-1'"
            class="ict-line ict-line-1"
          />
          <div
            :id="'ict-line-'+n+'-2'"
            class="ict-line ict-line-2"
          />
          <v-container>
            <div
              v-for="discipline in item.disciplines"
              :key="discipline"
            >
              {{ discipline }}
            </div>
          </v-container>
          <div
            :id="'ict-line-'+n+'-3'"
            class="ict-line ict-line-3"
          />
          <div
            :id="'ict-line-'+n+'-4'"
            class="ict-line ict-line-4"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <BaseNotFound v-else />
</template>

<script>
export default {
  name: 'DisciplinesView',
  components: { BaseNotFound: () => import('@/components/app/BaseNotFound') },
  data: () => ({
    widths: ['35%', '75%', '65%']
  }),
  computed: {
    disciplines() {
      return this.$store.getters['programs/disciplines'](this.$route.params.id)
    }
  },
  methods: {
    activeLine(n) {
      let widths = this.widths
      let dur = 700
      if (document.querySelector('#c' + n).hasAttribute('aria-expanded')) {
        widths = [0, 0, 0]
        dur = 1
      }
      setTimeout(() => {
        document.querySelector('#ict-line-' + n + '-1').animate({ width: widths[0] },
          { duration: dur, fill: 'forwards' })
        document.querySelector('#ict-line-' + n + '-2').animate({ width: widths[1] },
          { duration: dur, fill: 'forwards' })
        document.querySelector('#ict-line-' + n + '-3').animate({ width: widths[2] },
          { duration: dur, fill: 'forwards' })
        document.querySelector('#ict-line-' + n + '-4').animate({ width: widths[2] },
          { duration: dur, fill: 'forwards' })
      })
    }
  }
}
</script>

<style scoped>
.ict-line {
  position: absolute;
  width: 0;
}

.ict-line-1 {
  border: 1px solid #FF0260;
  background-color: #FF0260;
  right: 0;
  margin-top: -20px;
}

.ict-line-2 {
  border: 1px solid #18FFBA;
  background-color: #18FFBA;
  left: 0;
  margin-top: -15px;
}

.ict-line-3 {
  border: 1px solid #FF776E;
  background-color: #FF776E;
  left: 0;
  margin-top: 5px;
}

.ict-line-4 {
  border: 1px solid #6A30F4;
  background-color: #6A30F4;
  right: 0;
  margin-top: 15px;
}
</style>