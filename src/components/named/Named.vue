<template>
  <div>
    <p class="chapter_wrapper">
      Named can set you free.
    </p>
    <router-link :to="{name: 'details'}">Click to named nested views.</router-link>
    <p>
      <router-view></router-view>
    </p>
    <p>
      <router-view name="Bar"></router-view>
    </p>
    <p>
      <router-view name="Content"></router-view>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Named'
}
</script>

<style lang="stylus">
</style>
