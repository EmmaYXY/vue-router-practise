<template>
  <div>
    <h1>{{ msg }}</h1>
    <main class="content_links">
      <ul class="content">
        <li>
          <span>Go to dynamic route match.<br/>Type a route corresponding to the patten: '/dynamic/:name', like
            '/dynamic/EmmaYXY' or '/dynamic/Shania', they will get the same component rendering.
          </span>
          <van-cell-group>
            <van-field v-model="dynamicRoute"/>
          </van-cell-group>
          <van-button class="button" @click="goToDynamicRoute" plain size="small" type="info">click</van-button>
        </li>
        <li>
          <span @click="goToNestedRoutes">In real development, nested components are usually needed,
            so the routes should correspond to the special structure of components, too.</span>
        </li>
        <li>
          <span @click="goToProgrammaticNavigation">
            We are talking about navigation with tags (router-link) until now, in vue-router, there is another
            way to navigate, programmatic navigation.It enables navigation with the router's instance methods.
          </span>
        </li>
        <li>
          <span @click="goToNamedViews">
            Sometimes named routes perform navigation better, either by tags or programmatic navigation.The programmatic difference
            between named routes and named views is the former names routes in constructor configuration, and the latter
            names (router-view) and (components), not (component) configuration should be correspond to it.
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'welcome to vue-router-practise',
      dynamicRoute: '/dynamic/EmmaYXY'
    }
  },
  methods: {
    goToDynamicRoute () {
      this.$router.push(this.dynamicRoute)
    },
    goToNestedRoutes () {
      this.$router.push('/nested')
    },
    goToProgrammaticNavigation () {
      this.$router.push('/programmatic')
    },
    goToNamedViews () {
      this.$router.push({name: 'named'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
h1
  text-align center
.content_links
  margin 0 10px
  text-align left
  .content
    .button
      margin-top 10px
</style>
