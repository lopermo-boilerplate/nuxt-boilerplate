<template>
  <FullSection>
    <div class="d-flex flex-column justify-content-center my-auto">
      <h1>Idiomas</h1>
      <h2>{{ $t('test') }}</h2>
      <ul>
        <li v-for="(locale, index) in availableLocales" :key="locale.code">
          <nuxt-link exact :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </FullSection>
</template>

<script>
import Vue from 'vue'
import FullSection from '~/components/ui/full-section'

export default Vue.extend({
  components: {
    FullSection
  },
  computed: {
    availableLocales() {
      /* To include the current language */
      return this.$i18n.locales

      /* To hide the current language */
      // return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  },
  /* SEO */
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Title',
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Title'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Description'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'facebookTitle',
          property: 'og:title',
          content: 'Fb title'
        },
        {
          hid: 'facebookDescription',
          property: 'og:description',
          content: 'Fb desc'
        },
        {
          hid: 'facebookUrl',
          property: 'og:url',
          content: process.env.BASE_URL + this.$route.fullPath
        },
        ...i18nSeo.meta
      ]
    }
  }
})
</script>

<style lang="scss" scoped></style>
