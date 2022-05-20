import Vue from 'vue'
import Vuex from 'vuex'
import appModule from '@/store/modules/appModule'
import contactsModule from '@/store/modules/contactsModule'
import programsModule from '@/store/modules/programsModule'
import newsModule from '@/store/modules/newsModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: appModule,
    contacts: contactsModule,
    programs: programsModule,
    news: newsModule
  }
})