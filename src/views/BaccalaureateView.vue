<template>
  <v-container>
    <div class="text-center pb-2 text-h6 pb-sm-10 text-sm-h4">
      Поступление в БАКАЛАВРИАТ
    </div>
    <v-row
      align="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="10"
      >
        <v-row class="px-4 py-2">
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
          class="mb-4 program-block py-2 px-4 item-background"
        >
          <div class="program-code">
            {{ program.code }}
          </div>
          <v-row>
            <v-col cols="3">
              <div>{{ program.name }}</div>
            </v-col>
            <v-col cols="3">
              <div>{{ program.program }}</div>
            </v-col>
            <v-col cols="6">
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
            :link="'/program/'+program.id"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import BaseButtonOutlined from '@/components/BaseButtonOutlined'

export default {
  name: 'BaccalaureateView',
  components: { BaseButtonOutlined },
  data: () => ({
    programs: [
      {
        id: 1, name: 'Прикладная информатика', code: '09.03.03', program: 'Мобильные и сетевые технологии',
        specializations: ['Интеллектуальные мобильные приложения', 'Управление качеством мобильных и сетевых приложений']
      },
      {
        id: 1, name: 'Прикладная информатика', code: '09.03.03', program: 'Мобильные и сетевые технологии',
        specializations: ['Интеллектуальные мобильные приложения', 'Управление качеством мобильных и сетевых приложений']
      },
      {
        id: 1, name: 'Прикладная информатика', code: '09.03.03', program: 'Мобильные и сетевые технологии',
        specializations: ['Интеллектуальные мобильные приложения', 'Управление качеством мобильных и сетевых приложений']
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.program-block {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1);
  border-radius: 20px;
}

.program-code {
  color: #2DC0C5;
  font-family: "OpenSans-Bold", sans-serif !important;
}

* {
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>