<template>
  <div>
    <v-container>
      <div class="pb-4 pb-md-6 text-body-2 breadcrumbs">
        <span>Поступление /</span>
        <router-link
          to="/baccalaureate"
        >
          Бакалавриат
        </router-link>
        <span>/</span>
        <router-link
          to="/program/1"
        >
          Прикладная информатика
        </router-link>
        <span>/ Дисциплины</span>
      </div>
      <div class="pb-2 text-h5 pb-md-4 text-sm-h4">
        Дисциплины
      </div>
    </v-container>
    <v-expansion-panels
      multiple
      accordion
      flat
    >
      <v-expansion-panel
        v-for="n in 4"
        :key="n"
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
          <div class="text-h6 order-1">
            Основы проектирования баз данных
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
            <div class="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat.
            </div>
            <div>
              Прохождение дисциплины в <b>3 семестре:</b>
            </div>
            <div>
              <b>Преподаватель:</b> Говорова М.М.
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
</template>

<script>
export default {
  name: 'DisciplinesView',
  data: () => ({
    widths: ['35%', '75%', '65%']
  }),
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