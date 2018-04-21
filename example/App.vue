<template>
  <div class="markdown-body">
    <GitHubBadge slug="lazzzis/vue-time-flows" />
    <h1>Vue Time Flows</h1>
    <h2>Introduction</h2>
    <code>vue-time-flows</code> is a zero-dependency vue component for displaying date time. It supports auto-update and format-customize.
    <h2>Quick Start</h2>
    <pre><code>npm i -S vue-time-flows // or: yarn add vue-time-flows</code></pre>
    <h2>Basic Usage</h2>
    <VueTimeFlows />
    <Highlight :code="codes['BasicUsage']" />
    <Highlight :code="codes['BasicUsageImport']" />

    <h2>Define Start Time</h2>
    <b>starts on 2017-01-01 (UTC-Time)</b> <VueTimeFlows :now="now" />
    <Highlight :code="codes['BasicDefineInitialTime']" />

    <h2>Define Format Function</h2>
    <VueTimeFlows :format="format" />
    <p><VueTimeFlows :format="httpFormat" /> (<b>HTTP Format</b>) </p>
    <Highlight :code="codes['BasicDefineFormatFunction']" />

    <h2>Define Update Interval</h2>
    <b>Update on every 2 seconds</b> <VueTimeFlows :period="2000" />
    <Highlight :code="codes['BasicDefineFormatFunction']" />

    <h2>Set Default Values</h2>
    <Highlight :code="codes['SetDefaultValuesImport']" />
    <Highlight :code="codes['SetDefaultValues']" />
    <p>Without further configureation, components auto update on 2 second in default and set time to http format</p>
    <!-- Here is an exception, but I confirm that the code on demo page can work -->
    <VueTimeFlows :period="2000" :format="httpFormat"/>

    <h2>Create Instances</h2>
    <p><code>createInstance</code> could help you create various components with different default Values</p>
    <Highlight :code="codes['CreateInstance']" />
    <Update2Seconds /> <br>
    <ISOFormat /> <br>
    <ISOFormat :now="new Date('2020-01-01').getTime()" />
  </div>
</template>

<script>
  import { createInstance } from '../src/'
  import { DateTime } from 'luxon'
  import 'github-markdown-css'
  import hljs from 'highlight.js'
  import Highlight from 'vue-highlight-component'
  import 'highlight.js/styles/atom-one-light.css'
  import GitHubBadge from 'vue-github-badge'

  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

  const codes = {
    BasicUsage: `<VueTimeFlows />`,
    BasicUsageImport: `
    import Vue from 'vue'
    import VueTimeFlows from 'vue-time-flows'

    Vue.use(VueTimeFlows)`,
    BasicDefineInitialTime: `
    <template>
      <VueTimeFlows :now="now" />
    </template>
    <script>
      export default {
        data () {
          return {
            now: new Date('2017-01-01').getTime()
          }
        }
      }
    <\/script>`,
    BasicDefineFormatFunction: `
    <template>
      <VueTimeFlows :format="format" /> <br>
      <VueTimeFlows :format="httpFormat" />
    </template>
    <script>
      import { DateTime } from 'luxon'
      export default {
        data () {
          return {
            format: (val) => DateTime.fromMillis(val).toFormat('yyyy LLL dd hh:mm:ss'),
            httpFormat: (val) => DateTime.fromMillis(val).toHTTP()
          }
        }
      }
    <\/script>
    `,
    BasicDefineUpdateInterval: `<VueTimeFlows :period="2000" />`,
    SetDefaultValuesImport: `
    import Vue from 'vue'
    import VueTimeFlows from 'vue-time-flows'
    import { DateTime } from 'luxon'

    Vue.use(VueTimeFlows, {
      period: 2000,
      format: (val) => DateTime.fromMillis(val).toHTTP()
    })
    `,
    SetDefaultValues: `<VueTimeFlows />`,
    CreateInstance: `
    <template>
      <div>
        <Update2Seconds /> <br>
        <ISOFormat /> <br>
        <ISOFormat :now="new Date('2020-01-01').getTime()" />
      </div>
    </template>
    <script>
      import { createInstance } from 'vue-time-flows'
      import { DateTime } from 'luxon'
      const Update2Seconds = createInstance({
        period: 2000
      })
      const ISOFormat = createInstance({
        format: (val) => DateTime.fromMillis(val).toISO()
      })
      export default {
        components: {
          Update2Seconds,
          ISOFormat
        }
      }
    <\/script>
    `
  }

  const Update2Seconds = createInstance({
    period: 2000
  })
  const ISOFormat = createInstance({
    format: (val) => DateTime.fromMillis(val).toISO()
  })

  export default {
    components: {
      Update2Seconds,
      ISOFormat,
      Highlight,
      GitHubBadge
    },
    data () {
      return {
        now: new Date('2017-01-01').getTime(),
        format: (val) => DateTime.fromMillis(val).toFormat('yyyy LLL dd hh:mm:ss'),
        httpFormat: (val) => DateTime.fromMillis(val).toHTTP(),
        codes
      }
    }
  }
</script>

<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
  .vue-time-flows {
    font-size: 1.5em;
  }
</style>
