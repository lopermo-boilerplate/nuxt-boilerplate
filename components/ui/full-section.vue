<template>
  <section id="full-section">
    <div :class="fullWidth ? 'container-fluid' : 'container'">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
#full-section {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7vw 0;
  @include media-breakpoint-down(md) {
    min-height: 100vh;
    padding: 0 1rem;
  }
  @include media-breakpoint-up(lg) {
    //padding: 10rem auto;
  }
  .container-fluid,
  .container {
    padding: 0;
  }
  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
