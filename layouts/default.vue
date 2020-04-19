<template>
  <div>
    <loaderlang :loading="loading"></loaderlang>
    <nuxt />
  </div>
</template>

<script>
import loaderlang from '~/components/ui/loader'

export default {
  components: {
    loaderlang
  },
  data: () => ({
    loading: false,
    changed: true
  }),
  mounted() {
    // beforeLanguageSwitch called right before setting a new locale
    this.$i18n.beforeLanguageSwitch = () => {
      this.start()
    }
    // onLanguageSwitched called right after a new locale has been set
    this.$i18n.onLanguageSwitched = () => {
      setTimeout(() => (this.loading = false), 800)
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(function() {
        this.loading = false
      }, 500)
    }
  },
  head() {
    return this.$nuxtI18nSeo()
  }
}
</script>
