<template>
  <FullSection>
    <div class="d-flex flex-column justify-content-center my-auto">
      <div class="row">
        <div id="languages" class="col-lg-6">
          <h1>Locales</h1>
          <div>Test i18n: {{ $t('test') }}</div>
          <ul>
            <li v-for="(locale, index) in availableLocales" :key="locale.code">
              <nuxt-link exact :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div id="themes" class="col-lg-6">
          <div class="row">
            <div class="col-6 col-lg">
              <div class="box bg-primary"></div>
              Primary
            </div>
            <div class="col-6 col-lg">
              <div class="box bg-secondary"></div>
              Secondary
            </div>
            <div class="col-6 col-lg">
              <div class="box bg-light"></div>
              Light
            </div>
            <div class="col-6 col-lg">
              <div class="box bg-navy"></div>
              Navy
            </div>
            <div class="col-6 col-lg">
              <div class="box bg-google"></div>
              Google
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
.box {
  width: 40px;
  height: 40px;
  border-radius: 0.25rem;
}
</style>
