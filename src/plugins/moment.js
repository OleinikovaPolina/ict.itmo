import Vue from 'vue'
import VueMoment from 'vue-moment'
const moment = require('moment')
require('moment/locale/ru')

Vue.use(VueMoment, {
  moment
})

export default new Vue()