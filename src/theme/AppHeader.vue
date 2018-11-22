<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <router-link to="/" >
            <img src="http://bit.ly/vue-img"
                alt="Vue SPA" />
            </router-link>
            <router-link class="navbar-item is-tab" to= "/" exact >Home</router-link>
            <router-link class="navbar-item is-tab" :to= " { name: 'category', params: { id: 'front-end' } }" >Front-end</router-link>
            <router-link class="navbar-item is-tab" :to= " { name: 'category', params: { id: 'mobile' } }" >Mobile</router-link>
            <router-link class="navbar-item is-tab" to= "/login">Login</router-link>
        </div>
    </nav>
</template>
