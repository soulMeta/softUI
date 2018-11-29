<template>
  <main>
    <case-main></case-main>
  </main>
</template>

<script>
  import "../assets/css/base.css"
  import CaseMain from "../components/case/CaseMain";
    export default {
        name: "Case",
      components: {CaseMain}
    }
</script>

<style scoped>
  main{
    overflow: auto;
  }






</style>
