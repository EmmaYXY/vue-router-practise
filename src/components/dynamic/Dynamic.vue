<template>
  <div>
    <div class="dynamic_notes">
      <p class="chapter_wrapper">
        1. If a route is matched, the dynamic segments will be exposed as (this.$route.params).eg:
        <span>{{$route.params.name}}</span>
      </p>
      <p class="chapter_wrapper">
        2. When user navigates from (/dynamic/one) to (/dynamic/two), they have the same patten, and it's
        an efficient way to reuse the component but that lead to the lifecycle hool will stay uninvoked.
        To react the params changes in the same component, you could watch '$route' object or use 'beforeRouteUpdate'.
      </p>
      <p class="chapter_wrapper">
        3. Asterisk(*) could make you to match anything.
        Type route with '/aste-*' patten, like '/aste-EmmaYXY'.
        <span class="dynamic_field">
          <van-cell-group>
            <van-field size="small" v-model="asteValue"/>
          </van-cell-group>
          <van-button class="button" @click="goToAste" plain size="small" type="warning">click</van-button>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      asteValue: '/aste-EmmaYXY'
    }
  },
  created () {
    console.info(this.$route.params)
  },
  methods: {
    goToAste () {
      this.$router.push(this.asteValue)
    }
  }
}
</script>

<style lang="stylus">
.dynamic_notes {
  text-align: left;
}
</style>
