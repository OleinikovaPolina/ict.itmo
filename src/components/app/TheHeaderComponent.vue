<template>
  <div class="navbar-container app-background">
    <v-container>
      <v-row
        class="d-flex align-center"
        style="background-color: inherit; box-shadow: none"
      >
        <div class="pa-1 pr-lg-8 pr-xl-12 logoICT">
          <router-link to="/">
            <svg
              v-if="theme==='dark'"
              width="109"
              height="50"
              viewBox="0 0 109 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.6015 34.6435C54.4143 34.6435 54.2553 34.5769 54.1242 34.4435C53.9932 34.3102 53.9277 34.1388 53.9277 33.9293V15.3578C53.9277 15.1483 53.9932 14.9769 54.1242 14.8436C54.2553 14.7102 54.4237 14.6436 54.6296 14.6436H57.1562C57.3621 14.6436 57.5212 14.7102 57.6335 14.8436C57.7645 14.9769 57.83 15.1483 57.83 15.3578V28.4721L67.0662 15.1007C67.1411 15.0055 67.244 14.9102 67.375 14.815C67.506 14.7007 67.6745 14.6436 67.8803 14.6436H70.2105C70.3976 14.6436 70.5567 14.7102 70.6877 14.8436C70.8187 14.9769 70.8842 15.1483 70.8842 15.3578V33.9578C70.8842 34.1483 70.8187 34.3102 70.6877 34.4435C70.5567 34.5769 70.3976 34.6435 70.2105 34.6435H67.6838C67.478 34.6435 67.3095 34.5769 67.1785 34.4435C67.0475 34.3102 66.982 34.1483 66.982 33.9578V21.1007L57.7738 34.1864C57.7177 34.2626 57.6241 34.3578 57.4931 34.4721C57.3621 34.5864 57.1843 34.6435 56.9597 34.6435H54.6015Z"
                fill="white"
              />
              <path
                d="M75.9309 34.6435C75.7437 34.6435 75.5847 34.5864 75.4536 34.4721C75.3226 34.3388 75.2571 34.1673 75.2571 33.9578V15.3578C75.2571 15.1483 75.3226 14.9769 75.4536 14.8436C75.5847 14.7102 75.7437 14.6436 75.9309 14.6436H78.4856C78.6915 14.6436 78.8506 14.7102 78.9629 14.8436C79.0939 14.9769 79.1594 15.1483 79.1594 15.3578V22.7293H81.6018L86.1778 15.1578C86.2714 15.0055 86.393 14.8816 86.5427 14.7864C86.7112 14.6912 86.9264 14.6436 87.1884 14.6436H89.9677C90.1549 14.6436 90.2953 14.7007 90.3888 14.815C90.5011 14.9293 90.5573 15.0721 90.5573 15.2436C90.5573 15.3388 90.5198 15.4531 90.445 15.5864L85.1391 24.3007L90.9503 33.6721C91.0065 33.7293 91.0345 33.834 91.0345 33.9864C91.0345 34.1578 90.969 34.3102 90.838 34.4435C90.7257 34.5769 90.576 34.6435 90.3888 34.6435H87.4972C87.2539 34.6435 87.0668 34.5864 86.9358 34.4721C86.8235 34.3578 86.7299 34.2531 86.655 34.1578L81.7421 26.3007H79.1594V33.9578C79.1594 34.1483 79.0939 34.3102 78.9629 34.4435C78.8506 34.5769 78.6915 34.6435 78.4856 34.6435H75.9309Z"
                fill="white"
              />
              <path
                d="M99.0614 34.6435C98.8742 34.6435 98.7152 34.5769 98.5841 34.4435C98.4531 34.3102 98.3876 34.1483 98.3876 33.9578V18.1578H93.194C93.0068 18.1578 92.8478 18.0912 92.7168 17.9578C92.5857 17.8245 92.5202 17.6626 92.5202 17.4721V15.3578C92.5202 15.1483 92.5857 14.9769 92.7168 14.8436C92.8478 14.7102 93.0068 14.6436 93.194 14.6436H107.512C107.717 14.6436 107.886 14.7102 108.017 14.8436C108.148 14.9769 108.213 15.1483 108.213 15.3578V17.4721C108.213 17.6626 108.148 17.8245 108.017 17.9578C107.886 18.0912 107.717 18.1578 107.512 18.1578H102.346V33.9578C102.346 34.1483 102.281 34.3102 102.149 34.4435C102.018 34.5769 101.85 34.6435 101.644 34.6435H99.0614Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.2405 0.265644C27.6271 0.539426 27.8571 0.985935 27.8571 1.4623V21.1845C27.8571 21.8002 27.4748 22.3499 26.9009 22.5595L16.448 26.3767V42.4662C16.448 43.0435 16.1113 43.5668 15.5885 43.8018C15.0657 44.0369 14.4547 43.9397 14.029 43.5538L0.569828 31.3535C0.265588 31.0777 0.0910133 30.6852 0.0891488 30.2726L1.51856e-05 10.5504C-0.00278091 9.93168 0.380786 9.37817 0.957822 9.1682L25.9152 0.0867933C26.3595 -0.0748726 26.854 -0.00813802 27.2405 0.265644ZM13.5483 27.4356L4.30809 30.8099L13.5483 39.1859V27.4356ZM2.97948 28.1847L2.90438 11.569L24.9574 3.54443V20.1588L2.97948 28.1847Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4815 49.7322C18.09 49.4562 17.857 49.006 17.857 48.5258V28.6432C17.857 28.0226 18.2442 27.4684 18.8255 27.2571L29.4124 23.4089V7.18853C29.4124 6.60654 29.7535 6.07903 30.283 5.84207C30.8125 5.60511 31.4313 5.70308 31.8624 6.09211L45.4942 18.3916C45.8023 18.6696 45.9791 19.0654 45.981 19.4813L46.0713 39.3639C46.0741 39.9876 45.6856 40.5456 45.1012 40.7573L19.8238 49.9125C19.3738 50.0755 18.873 50.0082 18.4815 49.7322ZM32.3493 22.3414L41.708 18.9396L32.3493 10.4956V22.3414ZM43.0536 21.5861L43.1297 38.337L20.7939 46.4268V29.6773L43.0536 21.5861Z"
                fill="white"
              />
            </svg>
            <svg
              v-else
              viewBox="0 0 573 279"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M103.885 148.725L27.587 176.116L103.902 242.843L103.885 148.725Z"
                fill="url(#paint0_linear_277:1953)"
              />
              <path
                d="M168.032 126.396L27.5844 176.118V68.0075L168.032 18.2859V126.396Z"
                fill="url(#paint1_linear_277:1953)"
              />
              <path
                d="M170.967 128.899L247.265 101.508L170.95 34.7815L170.967 128.899Z"
                fill="url(#paint2_linear_277:1953)"
              />
              <path
                d="M106.819 151.227L247.268 101.506V209.617L106.819 259.339V151.227Z"
                fill="url(#paint3_linear_277:1953)"
              />
              <mask
                id="mask0_277:1953"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="168"
                y="34"
                width="77"
                height="95"
              >
                <path
                  d="M168.05 128.899L244.348 101.508L168.032 34.7815L168.05 128.899Z"
                  fill="url(#paint4_linear_277:1953)"
                />
              </mask>
              <g mask="url(#mask0_277:1953)">
                <path
                  d="M166.691 143.009C159.857 127.498 135.378 116.019 160.669 104.887C185.959 93.7549 255.211 89.3757 262.045 104.887C268.881 120.398 241.165 156.958 215.873 168.09C190.584 179.222 173.525 158.521 166.691 143.009Z"
                  fill="url(#paint5_radial_277:1953)"
                  fill-opacity="0.25"
                />
              </g>
              <mask
                id="mask1_277:1953"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="27"
                y="148"
                width="77"
                height="95"
              >
                <path
                  d="M103.885 148.725L27.587 176.116L103.902 242.843L103.885 148.725Z"
                  fill="url(#paint6_linear_277:1953)"
                />
              </mask>
              <g mask="url(#mask1_277:1953)">
                <path
                  d="M105.244 134.614C112.078 150.126 136.556 161.605 111.266 172.737C85.9753 183.869 16.7236 188.249 9.8891 172.737C3.05467 157.226 30.7701 120.666 56.0608 109.534C81.3513 98.4017 98.4092 119.103 105.244 134.614Z"
                  fill="url(#paint7_radial_277:1953)"
                  fill-opacity="0.25"
                />
              </g>
              <path
                d="M293.688 189C292.728 189 291.912 188.664 291.24 187.992C290.568 187.32 290.232 186.456 290.232 185.4V91.8C290.232 90.744 290.568 89.88 291.24 89.208C291.912 88.536 292.776 88.2 293.832 88.2H306.792C307.848 88.2 308.664 88.536 309.24 89.208C309.912 89.88 310.248 90.744 310.248 91.8V157.896L357.624 90.504C358.008 90.024 358.536 89.544 359.208 89.064C359.88 88.488 360.744 88.2 361.8 88.2H373.752C374.712 88.2 375.528 88.536 376.2 89.208C376.872 89.88 377.208 90.744 377.208 91.8V185.544C377.208 186.504 376.872 187.32 376.2 187.992C375.528 188.664 374.712 189 373.752 189H360.792C359.736 189 358.872 188.664 358.2 187.992C357.528 187.32 357.192 186.504 357.192 185.544V120.744L309.96 186.696C309.672 187.08 309.192 187.56 308.52 188.136C307.848 188.712 306.936 189 305.784 189H293.688ZM403.094 189C402.134 189 401.318 188.712 400.646 188.136C399.974 187.464 399.638 186.6 399.638 185.544V91.8C399.638 90.744 399.974 89.88 400.646 89.208C401.318 88.536 402.134 88.2 403.094 88.2H416.198C417.254 88.2 418.07 88.536 418.646 89.208C419.318 89.88 419.654 90.744 419.654 91.8V128.952H432.182L455.654 90.792C456.134 90.024 456.758 89.4 457.526 88.92C458.39 88.44 459.494 88.2 460.838 88.2H475.094C476.054 88.2 476.774 88.488 477.254 89.064C477.83 89.64 478.118 90.36 478.118 91.224C478.118 91.704 477.926 92.28 477.542 92.952L450.326 136.872L480.134 184.104C480.422 184.392 480.566 184.92 480.566 185.688C480.566 186.552 480.23 187.32 479.558 187.992C478.982 188.664 478.214 189 477.254 189H462.422C461.174 189 460.214 188.712 459.542 188.136C458.966 187.56 458.486 187.032 458.102 186.552L432.902 146.952H419.654V185.544C419.654 186.504 419.318 187.32 418.646 187.992C418.07 188.664 417.254 189 416.198 189H403.094ZM521.739 189C520.779 189 519.963 188.664 519.291 187.992C518.619 187.32 518.283 186.504 518.283 185.544V105.912H491.643C490.683 105.912 489.867 105.576 489.195 104.904C488.523 104.232 488.187 103.416 488.187 102.456V91.8C488.187 90.744 488.523 89.88 489.195 89.208C489.867 88.536 490.683 88.2 491.643 88.2H565.083C566.139 88.2 567.003 88.536 567.675 89.208C568.347 89.88 568.683 90.744 568.683 91.8V102.456C568.683 103.416 568.347 104.232 567.675 104.904C567.003 105.576 566.139 105.912 565.083 105.912H538.587V185.544C538.587 186.504 538.251 187.32 537.579 187.992C536.907 188.664 536.043 189 534.987 189H521.739Z"
                fill="url(#paint8_linear_277:1953)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_277:1953"
                  x1="154.609"
                  y1="230.903"
                  x2="43.8175"
                  y2="154.105"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_277:1953"
                  x1="27.5844"
                  y1="97.2019"
                  x2="168.032"
                  y2="97.2019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_277:1953"
                  x1="120.243"
                  y1="46.7208"
                  x2="231.035"
                  y2="123.519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_277:1953"
                  x1="247.268"
                  y1="180.423"
                  x2="106.819"
                  y2="180.423"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_277:1953"
                  x1="117.326"
                  y1="46.7208"
                  x2="228.118"
                  y2="123.519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_277:1953"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(202.262 130.083) rotate(-121.239) scale(31.8149 51.8589)"
                >
                  <stop />
                  <stop
                    offset="1"
                    stop-opacity="0"
                  />
                </radialGradient>
                <linearGradient
                  id="paint6_linear_277:1953"
                  x1="154.609"
                  y1="230.903"
                  x2="43.8175"
                  y2="154.105"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2DC0C5" />
                  <stop
                    offset="1"
                    stop-color="#2E9CEF"
                  />
                </linearGradient>
                <radialGradient
                  id="paint7_radial_277:1953"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(69.673 147.542) rotate(58.7608) scale(31.8149 51.8588)"
                >
                  <stop />
                  <stop
                    offset="1"
                    stop-opacity="0"
                  />
                </radialGradient>
                <linearGradient
                  id="paint8_linear_277:1953"
                  x1="279"
                  y1="103.373"
                  x2="517.234"
                  y2="187.729"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2E9FED" />
                  <stop
                    offset="1"
                    stop-color="#2DBDC9"
                  />
                </linearGradient>
              </defs>
            </svg>
          </router-link>
        </div>

        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          class="d-flex align-center"
        >
          <template
            v-for="(link,i) in links"
          >
            <router-link
              v-if="i!==3"
              :key="i"
              :to="'/'+link.path"
              class="header-link mr-2 mr-lg-4  mr-xl-8"
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
                    class="header-link mr-2 mr-lg-4 mr-xl-8 d-flex align-center"
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

        <div
          v-if="$vuetify.breakpoint.smAndDown"
          class="logoITMO rounded-pill ml-2"
        >
          <a
            href="https://itmo.ru/"
            target="_blank"
          >
            <img
              alt="ITMO"
              src="@/assets/images/footer/logoITMO.png"
            >
          </a>
        </div>

        <v-col
          :style="{opacity:show||$vuetify.breakpoint.mdAndUp?1:0,zIndex:show|| $vuetify.breakpoint.mdAndUp?1:-1}"
          style="transition: all .4s"
          cols="1"
        >
          <SwitchComponent class="ml-lg-4" />
        </v-col>

        <v-spacer />

        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="logoITMO rounded-pill"
        >
          <a
            href="https://itmo.ru/"
            target="_blank"
          >
            <img
              alt="ITMO"
              src="@/assets/images/footer/logoITMO.png"
            >
          </a>
        </div>

        <v-col
          v-if="$vuetify.breakpoint.smAndDown"
          cols="4"
          class="d-flex justify-end"
        >
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
              <template
                v-for="(link,i) in links"
              >
                <v-list-item
                  v-if="i!==3"
                  :key="i"
                  style="min-height: 33px"
                  class="d-flex justify-center"
                  @click="closeMenu"
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
                          @click="closeMenu"
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
                          @click="closeMenu"
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
      { text: 'События', name: ['events', 'news', 'new', 'event', 'announcement'], path: 'events' },
      { text: 'Студентам', name: ['students'], path: 'students' },
      {},
      { text: 'Контакты', name: ['contacts'], path: 'contacts' }
    ]
  }),
  computed: mapState('app', ['theme']),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let { top } = document.body.getBoundingClientRect()
      if (top === 0) {
        document.querySelector('.navbar-container').classList.remove('shadow')
      } else {
        document.querySelector('.navbar-container').classList.add('shadow')
      }
    },
    closeMenu() {
      document.querySelector('.menu').classList.remove('active')
      this.show = false
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

.navbar-container.shadow {
  box-shadow: 0 5px 5px -5px #333;
}

.header-link {
  text-decoration: none;
  font-size: 24px;
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

.logoICT {
  aspect-ratio: 2;
  height: 3rem;
  @media (min-width: 960px) {
    height: 4.5rem;
  }
  @media (min-width: 1904px) {
    height: 6rem;
  }
  svg{
    height: 100%;
    width: 100%;
  }
}

.theme-light .logoITMO {
  background: linear-gradient(99.1deg, #2E9FEB 0%, #2DBDC7 90.24%);
}

.logoITMO {
  aspect-ratio: 2.8;
  height: 2rem;

  @media (min-width: 960px) {
    height: 2.5rem;
  }

  img {
    height: 90%;
    width: 100%;
    object-fit: contain;
  }

}
</style>
