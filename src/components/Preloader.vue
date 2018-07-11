<template>
  <div class="preloader" :style="{ 'background-color': bgcolor }">
    <b-container fluid>
      <c-spinner :isLoading="isLoading" color="#f1f2f3"/>
      <p>This will only take 2 seconds...</p>
    </b-container>
  </div>
</template>

<script>
import cSpinner from '@/components/Spinner.vue'

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    bgcolor: {
      type: String,
      default: 'rgba(#fff, .9)'
    }
  },
  components: {
    cSpinner
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;
  // background: rgba(#2f3137, .9);
  text-align: center;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  p {
    color: rgba(#fff, .75);
    margin-top: 15px;
  }
}
</style>
