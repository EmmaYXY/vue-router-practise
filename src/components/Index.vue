<template>
  <div>
    <h1>{{ msg }}</h1>
    <main class="content_links">
      <ul class="content">
        <li>
          <span>Go to dynamic route match.<br/>Type a route corresponding to the patten: '/dynamic/:name', like
            '/dynamic/EmmaYXY' or '/dynamic/Shania', they will get the same component rendering.
          </span>
          <div class="dynamic_field">
            <van-cell-group>
              <van-field size="small" v-model="dynamicRoute"/>
            </van-cell-group>
            <van-button class="button" @click="goToDynamicRoute" plain size="small" type="warning">click</van-button>
          </div>
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
        <li>
          <span @click="goToRedirect">
            Sometimes we need to redirect from one route to another.That can simply be achieved in the routes configuration.
            For example, we go to '/from', and end up '/named' in address bar.
          </span>
          <span @click="goToAlias">
            The difference between redirection and alias is alias just another symbol of some route.Like, we
            go to '/alias', and end up '/alias' in address bar but actually components corresponded to '/named' are rendered.
          </span>
        </li>
        <li>
          <span @click="goToPassProps">
            To decouple component and route when using ($route), there is an alternate way to pass parameters related to
            specific route.Passing props to route component.
          </span>
        </li>
        <li>
          <span @click="goToHistoryMode">
            History Mode
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    from: {
      type: String
    }
  },
  data () {
    return {
      msg: 'welcome to vue-router-practise',
      dynamicRoute: '/dynamic/EmmaYXY'
    }
  },
  created () {
    console.info(this.from)
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
    },
    goToRedirect () {
      this.$router.push('/from')
    },
    goToAlias () {
      this.$router.push('/alias')
    },
    goToPassProps () {
      this.$router.push('/props/shaw')
    },
    goToHistoryMode () {
      this.$router.push({name: 'history'})
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
  padding-bottom 20px
  text-align left
  .content
    .button
      margin-top 10px
    li
      background: #fff8dc
      padding 10px
      border-radius 10px
      margin-top 10px
      cursor pointer
      .dynamic_field
        display flex
        margin-top 10px
        .van-cell-group
          width 36%
          margin-right 10px
</style>
