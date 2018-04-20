# Vue Time Flows

## Introduction

`vue-time-flows` is a zero-dependency vue component for displaying date time. It supports auto-update and format-customize.

## Installation

```bash
npm i -S vue-time-flows
# or yarn: yarn add vue-time-flows
```

## Quick Start

```js
import Vue from 'vue'
import VueTimeFlows from 'vue-time-flows'

Vue.use(VueTimeFlows)
```

```html
<template>
  <div>
    <p>Begins at Now:  <VueTimeFlows> </p>
    <p>Begins at 2017-01-01:  <VueTimeFlows> </p>
  </div>
</template>
<script>
  export default {
    data: () => ({
      now: new Date('2017-01-01').getTime()
    })
  }
</script>
```

## Demo and Advanced Usage

[Demo and Advanced Usage](https://lazzzis.github.io/vue-time-flows)

## API

### props
|Prop|Type|Default|Description|
|-|-|-|-|
|now|Number|`Date.now()`|the initial time|
|period|Number|`1000`|the update interval (unit: ms)|
|format|Function: (Number) => String| `(val) => new Date(val).toLocaleString()`| the format method, accepting a timestamp as an argument and returning a string|

### Vue.use options

```js
Vue.use(VueTimeFlows, {
  name: 'VueTimeFlows', // name of the component, 'VueTimeFlows' in default
  now: Date.now(), // same as `now` in props api
  period: 1000, // same as `period` in props api
  format: (val) => new Date(val).toLocaleString() // same as `format` in props api
})
```

# License

MIT &copy; [lazzzis](https://github.com/lazzzis)
