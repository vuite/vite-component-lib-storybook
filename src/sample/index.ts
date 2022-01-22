import Sample from './Sample.vue'

Sample.name = 'UiSample'

Sample.install = (app) => {
  app.component(Sample.name, Sample)
}

export default Sample
