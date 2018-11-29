<template>
      <div class="all">
        <soft-start-banner></soft-start-banner>
        <soft-start-main></soft-start-main>
        <soft-start-footer></soft-start-footer>
      </div>
</template>

<script>
    import SoftStartBanner from "../components/softStart/softStartBanner";
    import SoftStartMain from "../components/softStart/softStartMain";
    import SoftStartFooter from "../components/softStart/softStartFooter";
    export default {
        name: "softStart",
      components: {SoftStartFooter, SoftStartMain, SoftStartBanner}
    }
</script>

<style scoped>
  .all{
    width: 100%;
    height: 100%;
  }
</style>
