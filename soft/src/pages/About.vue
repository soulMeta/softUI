<template>
    <main class="about-main">
        <about-banner></about-banner>
        <about-us></about-us>
        <about-team></about-team>
        <phone-us></phone-us>
        <about-footer></about-footer>
    </main>
</template>

<script>

    import AboutBanner from "../components/about/AboutBanner";
    import AboutUs from "../components/about/AboutUs";
    import AboutTeam from "../components/about/AboutTeam";
    import PhoneUs from "../components/about/PhoneUs";
    import AboutFooter from "../components/about/AboutFooter";
    export default {
        name: "About",
      components: {AboutFooter, PhoneUs, AboutTeam, AboutUs,AboutBanner}
    }
</script>

<style scoped>
.about-main{
    height:100%;
}
</style>
