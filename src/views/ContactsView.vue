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
      <!--  contacts  -->
      <v-row justify="center">
        <v-col
          v-for="(person,i) in contacts"
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
      <!--  office  -->
      <v-row
        justify="center"
        class="pb-6 pb-md-10"
      >
        <v-col
          v-for="(person,i) in office"
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
            md="5"
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
                    href="tel:+7 (812) 480-04-96"
                    style="color: inherit"
                  >+7 (812) 480-04-96</a>
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
            md="7"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2597637846309!2d30.292978715440658!3d59.94442446859473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696313cde0dee4d%3A0xabce3576e7e58178!2z0JHQuNGA0LbQtdCy0LDRjyDQu9C40L3QuNGPLCAxNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5OTAzNA!5e0!3m2!1sru!2sru!4v1650138750227!5m2!1sru!2sru"
              width="100%"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </v-col>
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
import { mapState } from 'vuex'

export default {
  name: 'ContactsView',
  components: {
    LineComponent: () => import('@/components/LineComponent'),
    BasePersonVertical: () => import('@/components/BasePersonVertical'),
    BasePerson: () => import('@/components/BasePerson')
  },
  computed: mapState('contacts', ['dean', 'contacts', 'office'])
}
</script>

<style scoped lang="scss">
* {
  @media (min-width: 1904px) {
    font-size: 20px
  }
}
</style>