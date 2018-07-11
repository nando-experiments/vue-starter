<template>
  <span v-if="isLoading" class="spinner" :class="{ 'spinner--small': isSmall }">
    <svg class="spinner__container" viewBox="0 0 52 52">
      <circle class="spinner__path" cx="26px" cy="26px" r="20px" fill="none" :stroke="color" stroke-width="4px"></circle>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#343434'
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  &, &__container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  &__container {
    width: 36px;
    height: 36px;
    animation: spinnerRotate 2s linear infinite;
  }

  &__path {
    animation: spinnerDash 1.5s ease-in-out infinite;
    line-height: 1;
  }

  &--small .spinner__container {
    width: 18px;
    height: 18px;
  }
}

@keyframes spinnerRotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinnerDash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
