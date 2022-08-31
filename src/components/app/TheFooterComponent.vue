<template>
  <div class="mt-8 mt-md-16 font-color">
    <div
      :class="$vuetify.breakpoint.mdAndUp?'mb-10':'mb-minus'"
      style="z-index: 2;position: relative"
    >
      <v-sheet
        class="sheet-1 rounded-pill"
        color="#00A1FF"
        style="position: relative"
      >
        <v-row class="px-2 px-md-6">
          <v-col
            cols="9"
            sm="4"
            class="d-flex justify-start align-center"
            :class="$vuetify.breakpoint.smAndDown?'py-2':''"
          >
            <a
              aria-label="itmo website"
              href="https://itmo.ru/ru/"
              target="_blank"
              style="width: 100%"
            >
              <v-img
                position="0 center"
                contain
                width="100%"
                :height="$vuetify.breakpoint.smAndDown?'15':$vuetify.breakpoint.xl?'48':'36'"
                src="../../assets/images/footer/logoITMO.png"
              />
            </a>
          </v-col>
          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            cols
            class="d-flex justify-end align-center"
          >
            <div
              class="text-h6 text-xl-h5"
            >
              Факультет ИКТ
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet
        color="#6A30F4"
        class="rounded-r-pill sheet-2"
      >
        <v-row>
          <v-col
            cols="12"
            md="5"
            class="pa-0"
          >
            <v-list
              style="background: none!important;"
              dark
              dense
            >
              <v-list-item
                class="footer-inf"
                :style="{minHeight:$vuetify.breakpoint.smAndDown?'2em':'2.75em'}"
              >
                Информация © 1993–2022 Университет ИТМО
              </v-list-item>
              <v-list-item
                class="footer-inf"
                :style="{minHeight: $vuetify.breakpoint.smAndDown?'2em':'2.75em'}"
              >
                Разработка © 2022 Факультет ИКТ
              </v-list-item>
              <v-list-item :style="{minHeight: $vuetify.breakpoint.smAndDown ?'2em':'2.75em'}">
                <a
                  target="_blank"
                  href="https://itmo.ru/file/pages/79/personal_data_policy.pdf"
                  class="link font-weight-light text-decoration-underline"
                >
                  Политика по обработке персональных данных
                </a>
              </v-list-item>
              <v-list-item :style="{minHeight: $vuetify.breakpoint.smAndDown ?'2em':'2.75em'}">
                <a
                  target="_blank"
                  href="https://itmo.ru/images/pages/79/Pravila_ispolzovanija_informacii.pdf"
                  class="link font-weight-thin text-decoration-underline"
                >
                  Правила использования контента
                </a>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            cols="7"
            class="pa-0"
          >
            <v-list
              style="background: none!important;"
              dark
              dense
            >
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-map-marker-radius-outline</v-icon>
                </v-list-item-icon>
                <div>
                  199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный&nbsp;офис)
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-bank-outline</v-icon>
                </v-list-item-icon>
                <div>
                  197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А (юр.&nbsp;адрес)
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-email-outline</v-icon>
                </v-list-item-icon>
                <div>
                  <a href="mailto: dict@itmo.ru">dict@itmo.ru</a>
                </div>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-phone-outline</v-icon>
                </v-list-item-icon>
                <div>
                  <a href="tel:+78124800496">+7 (812) 480-04-96</a>
                  (Пн-Пт: 11:00-16:00)
                </div>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet
        v-if="$vuetify.breakpoint.mdAndUp"
        color="#00A1FF"
        class="rounded-r-pill sheet-3 py-3"
      >
        <v-row no-gutters>
          <div class="text-h6 pr-4">
            Присоединяйся
          </div>
          <div class="d-flex">
            <v-btn
              v-for="(link,i) in social"
              :key="i"
              icon
              rounded
              link
              aria-label="social network"
              :href="link.link"
              target="_blank"
              class="ml-4"
            >
              <v-img :src="link.icon" />
            </v-btn>
          </div>
        </v-row>
      </v-sheet>
    </div>
    <v-sheet
      v-if="$vuetify.breakpoint.mdAndUp"
      class="sheet-4 d-flex justify-end"
      color="#7BDBFA"
    >
      <v-sheet
        color="#835FFE"
        class="rounded-l-pill sheet-5"
      >
        <v-img
          height="100%"
          width="100%"
          class="rounded-l-pill"
          position="100% 0"
          src="../../assets/images/footer/footer-building.svg"
        />
      </v-sheet>
    </v-sheet>
    <div
      v-if="$vuetify.breakpoint.smAndDown"
      style="position: relative;overflow-x: hidden"
    >
      <div style="z-index: 10; position: relative">
        <v-sheet
          class="sheet-1-2 rounded-pill"
          color="#00A1FF"
          style="position: relative;top:1em;"
        >
          <div class="d-flex align-center px-2 py-1">
            <div
              class="text-subtitle-2"
            >
              Факультет ИКТ
            </div>
          </div>
        </v-sheet>
        <v-sheet
          color="#835FFE"
          class="sheet-6"
        >
          <v-col class="pa-0">
            <v-list
              style="background: none!important;"
              dark
              dense
            >
              <v-list-item style="min-height: 1em">
                <v-list-item-icon class="ma-0">
                  <v-icon small>
                    mdi-map-marker-radius-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный&nbsp;офис)
                </div>
              </v-list-item>
              <v-list-item style="min-height: 1em">
                <v-list-item-icon class="ma-0">
                  <v-icon small>
                    mdi-bank-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А (юр.&nbsp;адрес)
                </div>
              </v-list-item>
              <v-list-item style="min-height: 1em">
                <v-list-item-icon class="ma-0">
                  <v-icon small>
                    mdi-email-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  <a
                    href="mailto: dict@itmo.ru"
                  >dict@itmo.ru</a>
                </div>
              </v-list-item>
              <v-list-item style="min-height: 1em">
                <v-list-item-icon class="ma-0">
                  <v-icon small>
                    mdi-phone-outline
                  </v-icon>
                </v-list-item-icon>
                <div>
                  <a
                    href="tel:+78124800496"
                  >+7 (812) 480-04-96</a>
                  (Пн-Пт: 11:00-16:00)
                </div>
              </v-list-item>
            </v-list>
          </v-col>
        </v-sheet>
        <v-sheet
          color="#00A1FF"
          class="py-2 pl-7"
        >
          <div class="d-flex align-center">
            <div class="text-subtitle-2 pr-4">
              Присоединяйся
            </div>
            <div class="d-flex">
              <v-btn
                v-for="(link,i) in social"
                :key="i"
                x-small
                icon
                rounded
                link
                aria-label="social network"
                :href="link.link"
                target="_blank"
                class="ml-2"
              >
                <v-img
                  height="20"
                  width="20"
                  :src="link.icon"
                />
              </v-btn>
            </div>
          </div>
        </v-sheet>
      </div>
      <v-sheet
        color="#7BDBFA"
        height="200"
        width="110%"
        style="position: absolute;top:0;right:-30px;z-index: 0;"
        class="rounded-r-pill"
      />
    </div>
  </div>
</template>

<script>
import iconVk from '../../assets/images/footer/Button-S-Vk-ic.svg'
import iconYT from '../../assets/images/footer/Button-S-Youtube-ic.svg'
import iconTe from '../../assets/images/footer/Button-S-Telegram-ic.svg'

export default {
  name: 'TheFooterComponent',
  data: () => ({
    social: [
      { icon: iconYT, link: 'https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A' },
      { icon: iconVk, link: 'https://vk.com/ict.itmo' },
      { icon: iconTe, link: 'https://t.me/itmoict' }
    ]
  })
}
</script>

<style scoped lang="scss">
.font-color * {
  color: white !important;
}

.footer-inf {
  font-family: "OpenSans-Bold", sans-serif !important;
}

.link {
  font-weight: 300;
  text-decoration-thickness: 1px !important;
  text-underline-offset: 1px;
}

.sheet-1, .sheet-1-2 {
  max-width: 35%;
  top: 18px;
  margin-left: 2em;
  @media (max-width: 960px) {
    max-width: 30%;
    top: 7.5px;
    margin-left: 1em;
  }
}

.sheet-1-2 {
  max-width: 55%;
}

.sheet-2 {
  max-width: 80%;
  padding-left: 3.5em;
  font-size: 20px;
  padding-top: 4em;
  padding-bottom: 2.5em;
  @media (max-width: 1904px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    max-width: 85%;
    padding-left: 2.25em;
    font-size: 10px;
    padding-top: 3em;
  }
}

.sheet-3 {
  max-width: 65%;
  padding-left: 3.5em;
  margin-top: -1.5em;
}

.sheet-4 {
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.sheet-5 {
  height: 240px;
  width: 30%;
  padding: 3em 1em 0 0;
}

.sheet-6 {
  padding-left: 1em;
  font-size: 10px;
  padding-top: 2em;
  background-image: url("../../assets/images/footer/footer-building.svg");
  background-position: 100% 100%;
  background-size: auto 70%;
}

.mb-minus {
  margin-bottom: -0.5em;
}
</style>