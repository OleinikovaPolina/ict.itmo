import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import IconArrowRightComponent from '@/components/IconArrowRightComponent'
import IconArrowLeftComponent from '@/components/IconArrowLeftComponent'

Vue.use(Vuetify)

export default new Vuetify(
  {
    icons: {
      values: {
        arrowRight: {
          component: IconArrowRightComponent,
          props: {
            name: 'arrow-right',
          },
        },
        arrowLeft: {
          component: IconArrowLeftComponent,
          props: {
            name: 'arrow-left',
          },
        }
      },
    },
  }
)
