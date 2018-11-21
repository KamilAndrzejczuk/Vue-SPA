<template>
    <div class="card">
                <div class="card-content">
                <!-- <h3>{{ post.title }}</h3> -->
                <slot name="title"></slot>
                <!-- {{ post.content }} -->
                <slot name="content"></slot> 
                </div>
                <footer class="card-footer">
                <a class="card-footer-item" :href="link" target="_blank">Read More</a>
                </footer>
            </div>
</template>

<script>
export default {

props: ['link']
}
</script>

<style scoped>
    .card {
        padding-bottom: 40px;
        /* height: 100%; */
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
    }
</style>

