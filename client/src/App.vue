<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("user/whoAmI")
    },
};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
