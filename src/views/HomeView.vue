<template>
    <div>
      <turnerings-compoent style="margin-bottom: 500px"/>
      <turnerings-component-dynamic/>
    </div>
</template>

<script>
import TurneringsComponent from '@/components/TurneringsComponent.vue'
import TurneringsComponentDynamic from '@/components/TurneringsComponentDynamic.vue'

export default {
  name: 'HomeView',
  components: {
    'turnerings-compoent': TurneringsComponent,
    'turnerings-component-dynamic': TurneringsComponentDynamic,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#grass_image {
    position: absolute;
    bottom: 0px;
    left: 0%;
}
</style>

    TurneringsComponent