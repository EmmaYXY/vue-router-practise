<template>
  <div>
      <span>
        The value of this (props: {{ params }}) is as same as ($route.params.params: {{ $route.params.params }}).
        There are three modes for you to choose.
      </span>
      <p>
        1. Boolean Mode.Configuration (props) is true means ($route.params) will be set as component props.
      </p>
      <p>
        2. Object Mode. When configuration (props) is Object, this object will be the value of component props.
      </p>
      <p>
        3. When configuration (props) is Function, pass the route as parameter, and return props.That enables you to process
        the route.
      </p>
  </div>
</template>

<script>
export default {
  name: 'Props',
  props: ['params'],
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
