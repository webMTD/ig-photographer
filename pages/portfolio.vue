<template>
  <div class="tabs is-centered is-boxed">
      <ul>
          <li class="is-active"><a>Портфолио</a></li>
          <li><a>Семейная фотография</a></li>
          <li><a>Детская фотография</a></li>
          <li><a>Студийная фотография</a></li>
          <li><a>Свадебная фотография</a></li>
      </ul>
  </div>

</template>

<script>
import db from "~/firebase/init.js"
import firebase from 'firebase'

export default {
    data() {
        return {

        }
    },
    // created(){
    //     var storageRef = firebase.storage().ref("portfolio/wedding-shot/*.jpg");
    //     storageRef.getDownloadURL().then((url) => {
    //         console.log(url);
    //     });
    // }
  
}
</script>

<style>

</style>
