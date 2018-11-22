<template>
<div>
    <app-header></app-header>
    <section class="section main-section">
        <div class="container content">
            
            <br>       <!-- <app-category></app-category> -->
            <hr>
            <router-view></router-view>
        </div>
    </section>
    <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
export default {
	components: {
		'app-header': AppHeader,
		'app-footer': AppFooter,
	},
};
</script>

<style lang="scss" >
@import '~bulma';

.columns {
	flex-wrap: wrap;
}

.center-text {
    text-align: center;
}
.button {
    margin-top: 5px;
}
</style>

