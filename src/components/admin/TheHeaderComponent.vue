<template>
  <div class="navbar-container app-background">
    <v-container>
      <v-row
        class="d-flex align-center"
        style="background-color: inherit; box-shadow: none"
      >
        <v-col
          cols="2"
        >
          <router-link to="/">
            <img
              alt="logo"
              class="logo"
              src="../../assets/images/logo.svg"
            >
          </router-link>
        </v-col>
        <template v-if="$route.name!=='login'">
          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            cols="8"
            class="d-flex align-center"
          >
            <template
              v-for="(link,i) in links"
            >
              <router-link
                :key="i"
                :to="'/'+link.path"
                class="header-link mr-3"
                :class="link.name.filter(x=>x===$route.name).length>0?'link--active':''"
              >
                {{ link.text }}
              </router-link>
            </template>
          </v-col>

          <v-spacer />

          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            class="d-flex justify-end"
          >
            <v-btn
              text
              class="pa-0 text-capitalize header-link text-center"
              @click="logoutFunction"
            >
              Выйти
              <v-icon
                large
                right
                color="#00A1FF"
              >
                mdi-logout
              </v-icon>
            </v-btn>
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.smAndDown"
            cols="5"
            class="d-flex justify-end"
          >
            <v-btn
              icon
              x-large
              color="#2DC0C5"
              @click="show=!show"
            >
              <v-icon
                size="40"
              >
                mdi-{{ show ? 'close' : 'menu' }}
              </v-icon>
            </v-btn>
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.smAndDown"
            cols="12 "
            class="pa-0"
          >
            <v-expand-transition>
              <v-list
                v-show="show"
                class="app-background"
              >
                <template
                  v-for="(link,i) in links"
                >
                  <v-list-item
                    :key="i"
                    style="min-height: 33px"
                    class="d-flex justify-center"
                    @click="show=false"
                  >
                    <router-link
                      :to="'/'+link.path"
                      class="header-link text-center"
                      style="width: 100%"
                      :class="link.name.filter(x=>x===$route.name).length>0?'link--active':''"
                    >
                      {{ link.text }}
                    </router-link>
                  </v-list-item>
                </template>
              </v-list>
            </v-expand-transition>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheHeaderComponent',
  components: {},
  data: () => ({
    show: false,
    links: [
      { text: 'Опубликованное', name: ['published'], path: 'published' },
      { text: 'Создать запись', name: ['createEntry'], path: 'createEntry' },
      { text: 'Избранное', name: ['favorites', 'favoritesChange'], path: 'favorites' },
      { text: 'Теги', name: ['tags'], path: 'tags' }
    ]
  }),
  methods: {
    ...mapActions('admin', ['logout']),
    logoutFunction() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/colors.scss";

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100
}

.header-link {
  text-decoration: none;
  font-size: 18px;
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 1264px) {
    font-size: 14px;
  }
}

.header-link:hover {
  text-decoration: none;
}

.link--active {
  color: $ict-blue-green !important;
}

.logo {
  height: 3rem;
  object-fit: contain;
}

.v-menu__content {
  box-shadow: 0 0 5px rgba(0, 109, 172, 0.2), 0 0 14px rgba(3, 67, 104, 0.1) !important;
}
</style>