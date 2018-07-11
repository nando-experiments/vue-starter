<template>
  <div>
    <c-preloader v-if="isLoading" :isLoading="isLoading" bgcolor="rgba(3,3,3,0.9)"/>
    <c-nav/>
    <b-container class="mt-4 d-flex justify-content-center">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cNav from '@/components/Nav.vue'
import cPreloader from '@/components/Preloader.vue'

export default {
  components: {
    cNav,
    cPreloader
  },
  computed: {
    ...mapState({
      isLoading: state => state.preloader.isLoading
    })
  }
}
</script>
