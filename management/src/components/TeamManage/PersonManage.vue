<template>
    <main class="manage-main">
        <entry></entry>
        <search></search>
      <team-humanbeing></team-humanbeing>
    </main>
</template>

<script>
    import TeamHumanbeing from "./TeamHumanbeing";
    import Search from "./Search";
    import Entry from "./Entry";
    export default {
        name: "PersonManage",
      components: {Entry, Search, TeamHumanbeing}
    }
</script>

<style scoped>
.manage-main{
    height:100%;
    padding-left:20%;
    padding-bottom: 40px;
}
</style>
