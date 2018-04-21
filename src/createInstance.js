export default function createInstance (options = {}) {
  const {
    period = 1000,
    now = new Date().getTime(),
    format = (val) => new Date(val).toLocaleString()
  } = options
  const VueTimeFlows = {
    props: {
      period: {
        type: Number,
        default: period
      },
      now: {
        type: Number,
        default: now
      },
      format: {
        type: Function,
        default: format
      }
    },
    data () {
      return {
        currentTime: 0,
        timer: null
      }
    },
    created () {
      this.currentTime = this.now
      this.timer = setInterval(() => {
        this.currentTime += this.period
      }, this.period)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    render (h) {
      const time = this.format(this.currentTime)
      return h('span', {
        class: 'vue-time-flows'
      }, [
        time
      ])
    }
  }
  return VueTimeFlows
}
