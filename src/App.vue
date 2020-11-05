<template>
  <div>
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>
<script>
import Bar from './components/Bar'
import Foo from './components/Foo'
export default {
  components: {
    Bar,
    Foo
  }
}
</script>
