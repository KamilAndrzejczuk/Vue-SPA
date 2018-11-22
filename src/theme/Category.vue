<template>
<div>

	<div class="field">
			<h2 class="label center-text ">Search for news</h2>
			<div class="control">
				<input class="input is-secondary" v-model="quote" type="text" placeholder="Type category of news">
				<input v-on:click="loadPost(quote)" class="button is-primary is-fullWidth" type="button" value="Search">
			</div>
	</div>
	<div v-if="posts.length">

     <div class="columns">
            <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
                <app-post :link="post.url">
                <h3 slot= "title">{{post.title}}</h3>
                <span slot= "content">{{post.description}}</span>
                </app-post>
            </div>
        </div>
	</div>
	<div v-else>
		<br>
		<h2 class="center-text">
			No articles found, try another keyword 
		</h2>
	</div>
</div>
</template>
<script>
import Post from './Post.vue';
import appService from '../app.service.js'

export default {
	components: {
		'app-post': Post,
	},

	data() {
		return {
			quote :'',
			id: this.$route.params.id,
			posts: [],
		};
	},
	watch: {
		$route(to, from) {
			this.id = to.params.id;
			this.loadPost(this.id);
		},
	},

	methods: {
		loadPost(id) {
			if(id !== ''){

				appService.getNews(id).then((res) => {
					this.posts = res.data.articles.filter((article) => {
						return (article.description && article.title)
					})
				})
			}else{
					appService.getLatestNews().then((res) => {
						this.posts = res.data.articles.filter((article) => {
							return (article.description && article.title)
						})
					})
			}
	}},
		created() {
					appService.getNews(this.id).then((res) => {
						this.posts = res.data.articles.filter((article) => {
							return (article.description && article.title)
						})
					})
		}
}
</script>
<style scoped>
.column {
	display: flex;
}
</style>


