<template>
    <div class="content">
			<div v-if="isAuthenticated">
				<h2>You are logged in.</h2>
				
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button v-on:click="logout()" class="button is-primary">
				Logout
			  </button>
			</div>
		  </div>
		</div>
			</div>
			<div v-else>

	<h2>Login</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="username" class="input" type="text" 
			  placeholder="Your username">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label  class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="password" class="input" type="password" 
			  placeholder="Your password">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button v-on:click="login()" class="button is-primary">
				Login
			  </button>
			</div>
		  </div>
		</div>
	</div>
</div>
</div>
</template>
<script>
import appService from '../app.service.js';
import fakeUserService from '../fakeuser.service.js';
export default {
	data() {
		return {
			username: '',
			password: '',
			isAuthenticated: false,
		};
	},
	methods: {
		login() {
			fakeUserService
				.login({ username: this.username, password: this.password })
				.then(res => {
					window.localStorage.setItem('token', data.token);
					window.localStorage.setItem('tokenExpiration', data.expiration);
					this.isAuthenticated = true;
					this.username = ''
					this.password = ''
				})
				.catch(err => {
					window.alert('Could not login.');
				});
		},
		logout() {
			fakeUserService.logout().then((res) => {
				this.isAuthenticated = false;
			}).catch(err => {
				console.log(err);
			})
		},
	},
	created() {
		let expiration = window.localStorage.getItem('tokenExpiration');
		let timestamp = new Date().getTime() / 1000;
		if (!expiration !== null && parseInt(expiration) - timestamp > 0) {
			this.isAuthenticated = true;
		}
	},
};
</script>
