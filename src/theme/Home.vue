<template>
<div>

    <h1 class="text-center">Latest news!</h1>
    <div class="columns">
        <div class="column is-one-third" v-for="(post) in posts" v-bind:key="post.id">
            <app-post :link="post.url">
                <h3 slot= "title">{{post.title}}</h3>
                <span slot= "content">{{post.description}}</span>
            </app-post>

        </div>

    </div>
</div>
</template>

<script>
import Post from './Post.vue'
import appService from '../app.service.js'
export default {

    props: ['link'],

    components: {
        'app-post': Post
    }, data() {
        return {
            posts: []
        }
    },
    methods: {
        getPosts() {
            appService.getLatestNews().then((res) => {
                console.log(res.data.articles)
                this.posts = res.data.articles.filter((article) => {
                    return (article.description && article.title)
                })
            })
        }
    },
        created () {
            this.getPosts();
        }
}
</script>

<style scoped>

    .column {
	display: flex;
}
</style>
