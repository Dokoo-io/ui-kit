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
                <y-btn @click="openForm">
                  Open Modal
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
    <interactions />
  </v-app>
</template>

<script>
import FormExample from "./components/FormExample";
import {Interactions} from '@dokoo/ui-kit'
export default {
  components: {
    FormExample,
    Interactions
  },
  name: 'App',
  data: () => ({

  }),
  methods: {
    openForm () {
      console.log('helloos')
      this.$kit.formModal({
        inputs: [
          {
            type: 'text',
            key: 'test',
            options: {
              label: 'Oui monsieur'
            }
          }
        ],
        onValidate: (data) => {
          alert(JSON.stringify(data, null, 2))
        }
      })
    }
  }
};
</script>
