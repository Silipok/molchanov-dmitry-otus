<template>
<v-app>
  <hellocard></hellocard>
</v-app>
</template>
<script>
  import hellocard from "./components/hellocard";

  export default {
    name: "App",
    components: {hellocard}
  }
</script>