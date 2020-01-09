<template>
  <div id="app">
    <h1>cliverSnail's blog</h1>
    <button @click="showHide">show it </button>
    <BlogPost v-for="blogPost in visibileBlogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
  import BlogPost, {Post} from "./components/BlogPost.vue";
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      BlogPost
    }
  })

  export default class App extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'my first blogPost ever!',
        body: 'welcome to my blog',
        author: 'snall',
        datePosted: new Date(2020, 0, 7)
      },
      {
        title: 'my second blogPost ever!',
        body: 'welcome to my blog',
        author: 'snall',
        datePosted: new Date(2020, 1, 7),
        highlighted: true
      },
      {
        title: 'my third blogPost ever!',
        body: 'welcome to my blog',
        author: 'snall',
        datePosted: new Date(2020, 2, 7)
      }
    ]
    public showHighlighted: boolean = true
    get visibileBlogPosts(){
      return this.blogPosts.filter((post:Post)=>post.highlighted === undefined||post.highlighted===this.showHighlighted)
    }
    public showHide () {
      this.showHighlighted = !this.showHighlighted
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>