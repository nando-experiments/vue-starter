<template>
  <div class="about text-center" v-if="!isLoading">
    <img src="../../assets/logo.png" alt="">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'About',
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
