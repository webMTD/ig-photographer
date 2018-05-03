import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDDw1WWi3klGA42KTwSQ-0ggomnGrNdQ0U',
    v: '3',
    libraries: 'places, drawing, visualization' // Only if you need Autocomplete
  }
})