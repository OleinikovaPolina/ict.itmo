<template>
  <div class="navbar-container app-background">
    <v-container>
      <v-row
        class="d-flex align-center"
        style="background-color: inherit; box-shadow: none"
      >
        <v-col
          cols
        >
          <router-link to="/">
            <img
              alt="logo"
              class="logo"
              src="../../assets/images/logo.png"
            >
          </router-link>
        </v-col>

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols
          class="d-flex align-center"
        >
          <template
            v-for="(link,i) in links"
          >
            <router-link
              v-if="i!==3"
              :key="i"
              :to="'/'+link.path"
              class="header-link mr-3"
              :class="link.name.filter(x=>x===$route.name).length>0?'link--active':''"
            >
              {{ link.text }}
            </router-link>
            <div
              v-else
              :key="i"
              class="text-center"
            >
              <v-menu
                offset-y
                class="ict-dropdown"
                rounded="b-xl"
                nudge-left="15"
              >
                <template #activator="{ on,attrs }">
                  <div
                    class="header-link mr-3 d-flex align-center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span
                      class="pr-1"
                      :class="['baccalaureate','magistracy','program','disciplines'].filter(x=>x===$route.name).length>0?'link--active':''"
                    >Поступление</span>
                    <div
                      class="dropdown-symbol"
                      :style="{transform: attrs['aria-expanded']==='true'?'rotate(180deg)':''}"
                    >
                      ▼
                    </div>
                  </div>
                </template>
                <v-list class="dropdown-background">
                  <v-list-item style="min-height: 32px">
                    <router-link
                      to="/baccalaureate"
                      class="header-link"
                    >
                      Бакалавриат
                    </router-link>
                  </v-list-item>
                  <v-list-item style="min-height: 32px">
                    <router-link
                      to="/magistracy"
                      class="header-link"
                    >
                      Магистратура
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-col>

        <v-col
          :style="{opacity:show||$vuetify.breakpoint.mdAndUp?1:0,zIndex:show|| $vuetify.breakpoint.mdAndUp?1:-1}"
          style="transition: all .4s"
          cols
        >
          <SwitchComponent class="ml-lg-4" />
        </v-col>

        <v-spacer />

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols
        >
          <v-text-field
            :dark="theme==='dark'"
            dense
            placeholder="Поиск по сайту"
            hide-details
            outlined
            append-icon="mdi-magnify"
            color="#2DC0C5"
            class="search-input"
            style="min-width: 175px;"
            @click:append="()=>{}"
          />
        </v-col>

        <v-col
          v-if="$vuetify.breakpoint.smAndDown"
          cols="5"
          class="d-flex justify-end"
        >
          <v-btn
            :style="{opacity:show?0:1,zIndex:show?-1:1}"
            icon
            x-large
            color="#2DC0C5"
            @click="clickSearchIcon"
          >
            <v-icon
              size="40"
            >
              mdi-magnify
            </v-icon>
          </v-btn>
          <div
            class="menu"
            @click="clickMenu"
          >
            <div class="bar" />
            <div class="bar" />
            <div class="bar" />
          </div>
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
              <v-list-item>
                <v-text-field
                  ref="search"
                  :dark="theme==='dark'"
                  dense
                  placeholder="Введите название новости или тега"
                  hide-details
                  outlined
                  append-icon="mdi-magnify"
                  color="#2DC0C5"
                  class="search-input"
                  height="100%"
                  @click:append="()=>{}"
                />
              </v-list-item>
              <template
                v-for="(link,i) in links"
              >
                <v-list-item
                  v-if="i!==3"
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
                <v-list-item
                  v-else
                  :key="i"
                  style="min-height: 33px"
                  class="d-flex justify-center align-start pt-1"
                >
                  <div>
                    <div
                      class="header-link d-flex align-center justify-center"
                      @click="symbol=!symbol"
                    >
                      <span
                        class="pr-1"
                        :class="['baccalaureate','magistracy','program','disciplines'].filter(x=>x===$route.name).length>0?'link--active':''"
                      >Поступление</span>
                      <div
                        class="dropdown-symbol"
                        :style="{transform:symbol?'rotate(180deg)':''}"
                      >
                        ▼
                      </div>
                    </div>
                    <v-expand-transition>
                      <v-list
                        v-show="symbol"
                        class="app-background"
                      >
                        <v-list-item
                          style="min-height: 33px"
                          class="d-flex justify-center"
                          @click="show=false"
                        >
                          <router-link
                            to="/baccalaureate"
                            class="header-link text-center"
                            style="width: 100%"
                          >
                            Бакалавриат
                          </router-link>
                        </v-list-item>
                        <v-list-item
                          style="min-height: 33px"
                          class="d-flex justify-center"
                          @click="show=false"
                        >
                          <router-link
                            to="/magistracy"
                            class="header-link text-center"
                            style="width: 100%"
                          >
                            Магистратура
                          </router-link>
                        </v-list-item>
                      </v-list>
                    </v-expand-transition>
                  </div>
                </v-list-item>
              </template>
            </v-list>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheHeaderComponent',
  components: { SwitchComponent: () => import('@/components/app/SwitchComponent') },
  data: () => ({
    symbol: false, show: false,
    links: [
      { text: 'Главная', name: ['home'], path: '' },
      { text: 'События', name: ['events', 'news', 'new'], path: 'events' },
      { text: 'Студентам', name: ['students'], path: 'students' },
      {},
      { text: 'Контакты', name: ['contacts'], path: 'contacts' }
    ]
  }),
  computed: mapState('app', ['theme']),
  methods: {
    clickSearchIcon() {
      document.querySelector('.menu').classList.toggle('active')
      this.show = true
      setTimeout(() => {
        this.$refs['search'].$refs.input.focus()
      })
    },
    clickMenu() {
      document.querySelector('.menu').classList.toggle('active')
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/colors";

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100
}

.header-link {
  text-decoration: none;
  font-size: 22px;
  @media (max-width: 1904px) {
    font-size: 18px;
  }
  @media (max-width: 1264px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 18px;
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
  border: 0;
}

.dropdown-symbol {
  font-size: 0.5em;
  color: $ict-blue-green;
  width: fit-content;
  height: fit-content;
  transition: all .5s;
}

.search-input {
  border-radius: 10px;
  font-size: 15px;
  color: #2DC0C5 !important;
}

.menu {
  height: 22px;
  width: 60px;
  position: relative;
  padding-top: 24px;
  border: 5px solid transparent;
  cursor: pointer;
  transition: all .3s;
  transform: translateY(-22px);
}

.bar {
  height: 4px;
  width: 40px;
  display: block;
  margin: 6px auto;
  position: relative;
  background-color: #2DC0C5;
  transition: all .4s;
  border-radius: 6px;
}

.menu.active {
  .bar {
    &:nth-of-type(1) {
      transform: translateY(10px) rotate(45deg)
    }

    &:nth-of-type(2) {
      opacity: 0;
    }

    &:nth-of-type(3) {
      transform: translateY(-10px) rotate(-45deg)
    }
  }
}

@keyframes rotateR {
  from {
    transform: translateY(0px) rotate(0)
  }
  to {
    transform: translateY(10px) rotate(45deg)
  }
}

@keyframes rotateL {
  from {
    transform: translateY(0px) rotate(0)
  }
  to {
    transform: translateY(-10px) rotate(-45deg)
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.active .bar {
  &:nth-of-type(1) {
    animation: rotateR .4s cubic-bezier(.5, .2, .2, 1)
  }

  &:nth-of-type(2) {
    animation: fade .4s cubic-bezier(.1, .8, .1, 1)
  }

  &:nth-of-type(3) {
    animation: rotateL .4s cubic-bezier(.5, .2, .2, 1)
  }
}
</style>