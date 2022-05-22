<template>
    <div>
      <!-- <turnerings-test style="margin-bottom: 800px" /> -->
      <!-- <turnerings-compoent style="margin-bottom: 500px"/> -->
       <turnerings-component-dynamic style="margin-bottom: 550px"/>
    </div>
</template>

<script>
// import TurneringsComponent from '@/components/TurneringsComponent.vue'
import TurneringsComponentDynamic from '@/components/TurneringsComponentDynamic.vue'
// import TurneringTest from '@/components/TurneringTest.vue'

export default {
  name: 'HomeView',
  components: {
    // 'turnerings-compoent': TurneringsComponent,
    'turnerings-component-dynamic': TurneringsComponentDynamic,
    //'turnerings-test': TurneringTest,
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