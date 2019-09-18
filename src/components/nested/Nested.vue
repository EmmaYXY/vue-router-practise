<template>
  <div>
      <p class="chapter_wrapper">
          1. Do you remember the tags (router-view) of App.vue, components will be rendered inside those tags,
          similarly, other component can also contain its (router-view) tags in order to get some components rendered
          inside it.
      </p>
      <p class="chapter_wrapper">
          2. Besides that, children option in constructor config would be needed.
      </p>
      <p class="chapter_wrapper">
          3. It ought to be noted that if nested path starts with '/', it will be treated as a root path and an
          empty nested path '' represents the root path of its parent.
      </p>
      <p class="chapter_wrapper">
          Let's just take a look: an component inside the this component.
          <van-button class="button nest_button" @click="toNestedRoute" plain size="small" type="info">click</van-button>
      </p>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Nested',
  methods: {
    toNestedRoute () {
      this.$router.push('/nested/hope')
    }
  }
}
</script>

<style lang="stylus">
.nest_button
  border-color #ffffff
  color #c5be9f
</style>
