/*
 * @Author: 王康平
 * @后端开发: 
 * @Date: 2020-06-08 14:12:58
 */
import Vue from 'vue'
import Vuetify from '../vuetify/lib/index.js'
import * as locales from '../src/locale'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales,
  },
})
