<template>
  <div>
    <VueTimeFlows />
    <br />
    <VueTimeFlows :now="now" />
    <br />
    <VueTimeFlows :format="format" :period="2000" />
    <br />
    <Current />
    <br />
    <Before />
    <br />
    <Formatter />
  </div>
</template>

<script>
  import { createInstance } from '../src/'
  import { DateTime } from 'luxon'

  function format (val) {
    return DateTime.fromMillis(val).toFormat('yyyy-LLL-dd HH:mm:ss')
  }

  export default {
    components: {
      Current: createInstance(),
      Before: createInstance({
        now: new Date('2017-01-01').getTime()
      }),
      Formatter: createInstance({
        format: (val) => DateTime.fromMillis(val).toFormat('yyyy LLL dd hh:mm:ss')
      })
    },
    data () {
      return {
        now: new Date('2000-04-18').getTime(),
        format
      }
    }
  }
</script>
