<template>
    <div>
       <cup-component style="margin-bottom: 550px"/>
    </div>
</template>

<script>
import cupComponent from '@/components/cupComponent.vue'

export default {
  name: 'HomeView',
  components: {
    'cup-component': cupComponent,
  }
}
</script>

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
