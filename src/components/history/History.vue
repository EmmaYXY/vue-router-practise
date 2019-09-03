<template>
  <div>
    The history mode of vue-router is a kind of application of (history.pushState) API.
    And because (history.pushState) and (history.replaceState) of H5 won't trigger page reload, history
    mode achieves URL navigation without reloading pages.
    When using this mode, your server should be corporate with your client side.Because if user presses F5
    or requests some URL directly, server will report 404.
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
</style>
