<template>
  <div class="home text-center" v-if="!isLoading">
    <img src="../../assets/logo.png" alt="">
    <h1>Vue starter</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  mounted () {
    this.actionPreloader(true)
    setTimeout(() => {
      this.actionPreloader(false)
    }, 2000)
  },
  computed: {
    ...mapState({
      isLoading: state => state.preloader.isLoading
    })
  },
  methods: {
    ...mapActions(['actionPreloader'])
  }
}
</script>
