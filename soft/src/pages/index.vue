<template>
    <div class="cont">
        <!-- <head-nav></head-nav> -->
        <index-banner></index-banner>
        <index-main></index-main>
    </div>
</template>

<script>
import headNav from "../components/comon/headNav"
import indexBanner from "../components/index/indexBanner"
import indexMain from "../components/index/indexMain"
export default {
    name:"index",
    components:{
        headNav,
        indexBanner,
        indexMain
    }
}
</script>

<style scoped>

</style>
