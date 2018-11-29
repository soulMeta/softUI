<template>
    <main class="about-main">
        <about-main></about-main>
        <about-us></about-us>
        <about-team></about-team>
        <phone-us></phone-us>
        <!-- <about-footer></about-footer> -->
    </main>
</template>

<script>

    import AboutMain from "../components/about/AboutBanner";
    import AboutUs from "../components/about/AboutUs";
    import AboutTeam from "../components/about/AboutTeam";
    import PhoneUs from "../components/about/PhoneUs";
    import AboutFooter from "../components/about/AboutFooter";
    export default {
        name: "About",
      components: {AboutFooter, PhoneUs, AboutTeam, AboutUs, AboutMain}
    }
</script>

<style scoped>
.about-main{
    height:100%;
}
</style>
