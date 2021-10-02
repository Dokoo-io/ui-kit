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
              <v-card-text>
                <app-code>{{ nuxt1 }}</app-code>
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
import AppCode from "@dokoo/ui-kit/src/helpers/AppCode";
import {Interactions} from '@dokoo/ui-kit'
export default {
  components: {
    FormExample,
    Interactions,
    AppCode
  },
  name: 'App',
  data: () => ({
    nuxt1: `export default {
  ...
  modules: [
    '@dokoo/nuxt'
  ],
  dokoo: {
    clients: {
      marin: {
        spaceId: '8e458923-64c8-402e-a6a5-48b1be4677ff',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiZWNjZDNlZmItYWE5MC00MTFmLWE4OTEtYmE3MjkxNWJhZmY4Iiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsImlhdCI6MTYzMTYyOTkxNX0.lkeyrQ6CCj5Tl_rBhovKLsm2o-9z_WEPp_ITA078_P8'
      }
    }
  }
  ...
}`
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
