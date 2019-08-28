<template>
  <div>
    Named can set you free.
    <router-link :to="{name: 'details'}">Click to named nested views.</router-link>
    <router-view></router-view>
    <router-view name="Bar"></router-view>
    <router-view name="Content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Named'
}
</script>

<style lang="stylus">
</style>
