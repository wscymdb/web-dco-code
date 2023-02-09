<script>
export default {
  render() {
    return (
      <div class="container">
        <button onClick={this.increment}>+1</button>
        <span>{this.counter}</span>
        <button>-1</button>
      </div>
    )
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
}
</script>
