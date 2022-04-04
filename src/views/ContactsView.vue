<template>
  <div>
    <v-container>
      <!--  header  -->
      <div class="text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3">
        Руководство факультета ИКТ
      </div>
      <!--  декан  -->
      <v-row
        justify="center"
        class="pb-4 pb-md-10"
      >
        <v-col
          cols="12"
          sm="8"
          md="8"
        >
          <BasePerson :person="dean" />
        </v-col>
      </v-row>
      <!--  people  -->
      <v-row justify="center">
        <v-col
          v-for="(person,i) in persons"
          :key="i"
          cols="6"
          sm="5"
          md="3"
        >
          <BasePersonVertical :person="person" />
        </v-col>
      </v-row>
      <!--  header  -->
      <div class="text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4">
        Офис образовательных программ
      </div>
      <!--  people  -->
      <v-row
        justify="center"
        class="pb-6 pb-md-10"
      >
        <v-col
          v-for="(person,i) in persons"
          :key="i"
          cols="6"
          sm="5"
          md="3"
        >
          <BasePersonVertical :person="person" />
        </v-col>
      </v-row>
    </v-container>
    <!--  links  -->
    <LineComponent
      id="1"
      color="#18FFBA"
      width="65%"
      position="left"
      top="-10px"
    />
    <LineComponent
      id="2"
      color="#6A30F4"
      width="55%"
      position="right"
      top="5px"
    />
    <div class="section-background py-6">
      <v-container>
        <div class="text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4">
          Офис факультета ИКТ
        </div>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-list
              style="background: none!important;"
              dense
            >
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon color="#2DC0C5">
                    mdi-map-marker-radius-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис)
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon color="#2DC0C5">
                    mdi-email-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  <a
                    style="color: inherit"
                    href="mailto: dict@itmo.ru"
                  >dict@itmo.ru</a>
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon color="#2DC0C5">
                    mdi-phone-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  <a
                    href="tel:+78124571536"
                    style="color: inherit"
                  >+7 (812) 457-15-36 </a>
                  <span
                    class="pl-1"
                    style="opacity: 0.7"
                  >(Пн-Пт: 11:00-16:00)</span>
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-img
                    height="24"
                    width="24"
                    contain
                    src="../assets/images/contacts/undergroundBlue.svg"
                  />
                </v-list-item-icon>
                <div> метро Спортивная, 700 м</div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-img
                    height="24"
                    width="24"
                    contain
                    src="../assets/images/contacts/undergroundGreen.svg"
                  />
                </v-list-item-icon>
                <div>метро Васиолестровская, 1.2 км</div>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col
            cols="12"
            md="6"
          />
        </v-row>
      </v-container>
    </div>
    <LineComponent
      id="3"
      color="#FF0281"
      width="65%"
      position="right"
      top="-10px"
    />
    <LineComponent
      id="4"
      color="#FF776E"
      width="80%"
      position="right"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
  components: {
    LineComponent: () => import('@/components/LineComponent'),
    BasePersonVertical: () => import('@/components/BasePersonVertical'),
    BasePerson: () => import('@/components/BasePerson')
  },
  data: () => ({
    persons: [
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      },
      {
        img: require('../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана факультета',
        email: 'Aleksandrov@gmail.com'
      }
    ],
    dean: {
      img: require('../assets/images/contacts/unsplash_v2aKnjMbP_k.png'),
      name: 'Капитонов Александр Александрович',
      position: 'Декан факультета',
      email: 'kapitonov.aleksandr@itmo.ru',
      tel: '+7 920-457-85-96'
    }
  })
}
</script>
<style scoped lang="scss">
* {
  @media (min-width: 1904px) {
    font-size: 20px
  }
}
</style>