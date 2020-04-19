<template>
  <FullSection>
    <div class="d-flex flex-column justify-content-center my-auto">
      <div class="row">
        <div id="languages" class="col-lg-6">
          <h1>{{ homeContent.title }}</h1>
          <!-- <h1>{{ $prismic.asText(homeContent.title) }}</h1> -->
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
import FullSection from '~/components/ui/full-section'

export default {
  components: {
    FullSection
  },
  /* Prismic loading */
  async asyncData({ $prismic, app, error }) {
    try {
      const locale = app.i18n.locales.filter((i) => i.code === app.i18n.locale)[0] // Get actual locale
      const homeContent = (
        await $prismic.api.getSingle('homepage', {
          lang: locale.prismic
        })
      ).data
      return { homeContent }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
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
}
</script>

<style lang="scss" scoped>
.box {
  width: 40px;
  height: 40px;
  border-radius: 0.25rem;
}
</style>
