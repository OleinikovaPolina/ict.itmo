<template>
  <v-row
    align="center"
    no-gutters
  >
    <v-col
      class="d-none d-md-block"
      cols="12"
      md="10"
    >
      <v-row class="px-4 py-2 px-lg-6 py-lg-4">
        <v-col cols="3">
          <div class="admission-title">
            Направление
          </div>
        </v-col>
        <v-col cols="3">
          <div class="admission-title">
            Программа
          </div>
        </v-col>
        <v-col cols="6">
          <div class="admission-title">
            Специализации
          </div>
        </v-col>
      </v-row>
    </v-col>
    <template v-for="(program,i) in programs">
      <v-col
        :key="i"
        cols="12"
        md="10"
        class="mb-4 program-block px-4 py-2 px-lg-6 py-lg-4 item-background"
      >
        <div class="program-code">
          {{ program.code }}
        </div>
        <v-row>
          <v-col
            cols="12"
            md="3"
            class="pb-0 pb-md-3"
          >
            <div class="admission-title d-md-none">
              Направление
            </div>
            <div>{{ program.direction }}</div>
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="py-0 py-md-3"
          >
            <div class="admission-title d-md-none">
              Программа
            </div>
            <div>{{ program.program }}</div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pt-0 pt-md-3"
          >
            <div class="admission-title d-md-none">
              Специализации
            </div>
            <ul class="ict-ul">
              <li
                v-for="(sp,j) in program.specializations"
                :key="j"
              >
                {{ sp }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        :key="'2'+i"
        class="d-flex pb-6"
        :class="$vuetify.breakpoint.mdAndUp?'justify-center':'justify-end pr-4'"
      >
        <BaseButtonOutlined
          text="Перейти"
          :link="'/program/'+program.code"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  name: 'ProgramsComponent',
  components: { BaseButtonOutlined: () => import('@/components/BaseButtonOutlined') },
  props: {
    programs: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.program-block {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 20px;
  word-wrap: break-word;
}

.program-code {
  color: #2DC0C5;
  font-family: "OpenSans-Bold", sans-serif !important;
}

* {
  @media (min-width: 1904px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
