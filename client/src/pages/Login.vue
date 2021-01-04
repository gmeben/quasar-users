<template>
  <q-page class="bg-grey-3">
    <div class="full-width q-pa-lg">
      <div class="row justify-center">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="Login" />
            <q-tab name="register" label="Register" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated class="q-pa-lg">
            <q-tab-panel name="login">
              <login-register :tab="tab" />
            </q-tab-panel>

            <q-tab-panel name="register">
              <login-register :tab="tab" />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import LoginRegister from "../components/LoginRegister.vue";
import axios from 'axios';

export default {
  data() {
    return {
      tab: "login"
    };
  },
  methods: {
    getCsrfCookie() {
      axios.get('http://localhost:8080/sanctum/csrf-cookie').then(response => {
        console.log('cookie', response)
      });
    },
  },
  components: {
    LoginRegister
  },
  mounted() {
    this.getCsrfCookie()
  }
};
</script>
