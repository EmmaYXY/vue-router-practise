<template>
  <div>
    <p class="chapter_wrapper">
      It's a meta field.
    </p>
    <p class="chapter_wrapper">
      <span>This is a piece of that: {{$route.meta.slogan}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Meta',
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
