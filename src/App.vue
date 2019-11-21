<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn text to="/">
        <span>NAC02-FernandaGarroux</span>    
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="reloadPage">
        <v-icon>Enviar</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {

  name: 'App',
  components: {
   },

  methods: {
    reloadPage(){
      window.location.reload()
    }
  },

  data: () => ({
    //
  }),
};
</script>