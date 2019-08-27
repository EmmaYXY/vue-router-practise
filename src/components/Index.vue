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
