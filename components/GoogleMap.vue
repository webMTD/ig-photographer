 <template>
 <gmap-map
    :center="center"
    :zoom="16"
    :disableDefaultUI="true"
    :options="{styles: mapStyles, 
        mapTypeControl: false,
        disableDefaultUI: true,
        scaleControl: false,
        scrollwheel: false,
        streetViewControl: false}"
    style="min-width: 15em; min-height: 10em; height: 20em; max-height: 40em">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"></gmap-marker>
  </gmap-map>
</template>
<script>
  export default {
    data: function data() {
      return {
        center: {lat: 55.9818712, lng: 37.1733412},
        markers: [{
          position: {lat: 55.9818712, lng: 37.1733420}
        }]
      }
    },
    computed: {
      mapStyles(){
        switch(this.mapStyle){
        default:
          return [
              {
              "featureType": "all",
              "stylers": [
                {"saturation": -75}
              ]
            }
          ]
        }
      }
    }
  }
  </script>
  