<template>
  <div>
    <div class="dynamic_notes">
      <p>
        Three main methods, router.push, router.replace and router.go, can all be called this.$router inside Vue
        component.
      </p>
      <p>
        Method router.push will push a new entry into the history stack.It either takes a string path or a location
        descriptor object as its argument.Some points should be put attention to.
        <ul>
          <li>
            Once (path) is provided, (pramas) will be ignored, but (query) won't.
          </li>
          <li>
            If in the navigation, only (pramas) are changed, the component rendered before and after it
            is the same one, lifecycle hooks wouldn't be invoked.
          </li>
          <li>
            router.push and router.replace have 2nd and 3rd argument.The former will be called when the navigation
            successfully completed, otherwise, the latter.
          </li>
        </ul>
      </p>
      <p>
        Method router.replace has just one difference from router.push.It replaces current entry in the history stack.
      </p>
      <p>
        Method router.go takes an integer to show by how many steps to go forwards or backwards in the history
        stack.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Programmatic'
}
</script>

<style lang="stylus">
</style>
