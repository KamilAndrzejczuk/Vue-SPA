<template>
<div>
    <app-header></app-header>
    <section class="section main-section">
        <div class="container content">
            <app-category></app-category>
        </div>
    </section>
    <app-footer></app-footer>
</div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppFooter from './AppFooter.vue';
    import AppCategory from './Category.vue';
    export default {
        components: {
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'app-category': AppCategory
        },
        
    };
</script>

<style lang="scss" >
@import '~bulma';

.columns {
    flex-wrap: wrap;
}
</style>

