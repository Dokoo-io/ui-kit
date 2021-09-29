<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    <v-main>
      <div class="pa-3">
        <v-row>
          <v-col md="4">
            <v-card>
              <v-card-title>
                Example 1
              </v-card-title>
              <v-card-text>
                <y-btn>
                  Hello World
                </y-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card>
              <v-card-title>
                Form Example
              </v-card-title>
              <v-card-text>
                <form-example />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import FormExample from "./components/FormExample";
export default {
  components: {
    FormExample
  },
  name: 'App',
  data: () => ({

  })
};
</script>
