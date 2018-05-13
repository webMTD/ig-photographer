<template>
    <div class="container">
        <div class="is-flex blog">
            <router-link to="" v-for="article in articles" class="card" :key="article.id">
                <div class="card-image image is-square">
                    <img src="http://wvs.topleftpixel.com/photos/2008/04/Dundas_Square_Pano_Fisheye_tunnel_crop.jpg" alt="" class="nice-image">
                </div>
                <footer class="card-content">
                    <p class="content">
                        <span>
                            Это моя статья.
                        </span>
                        <span>
                            И она {{article.slug}}.
                        </span><br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </p>
                </footer>
            </router-link>
        </div>        
    </div>
</template>


<script>
import db from '@/firebase/init'

export default {
  data() {
      return {
        articles: []
      }
  },
  created(){
    // fetch data from firestore
    db.collection('articles').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let article = doc.data()
        article.id = doc.id
        this.articles.push(article)
      })
    }).catch(err => {
        console.log(err)
    })
}
}
</script>

<style scoped>
time {
    color: teal;
}
.nice-image{
    max-width: 300px;
    max-height: 300px;
}
.card {
    margin: 2em;
    max-width: 300px;
    max-height: 400px;
    min-width: 300px;
    min-height: 400px;
}
.blog{
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.container{
    margin-bottom: 2em;
}
.content{
    padding: auto;
    font-size: 0.7em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
</style>
