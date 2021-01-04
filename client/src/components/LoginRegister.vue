<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      :value="loginUsername"
      @input="setLoginUsername"
      type="text"
      label="Username"
      input-style="font-size: 16px"
      :disable="isLoading"
      class="q-mb-md"
      outlined
    />
    <q-input
      v-if="tab == 'register'"
      :value="loginName"
      @input="setLoginName"
      type="text"
      label="Name (optional)"
      input-style="font-size: 16px"
      :disable="isLoading"
      class="q-mb-md"
      outlined
    />
    <q-input
      :value="loginEmail"
      @input="setLoginEmail"
      type="email"
      label="Email Address"
      input-style="font-size: 16px"
      :disable="isLoading"
      class="q-mb-md"
      outlined
    />
    <q-input
      :value="loginPassword"
      @input="setLoginPassword"
      type="password"
      label="Password"
      input-style="font-size: 16px"
      :disable="isLoading"
      class="q-mb-md"
      outlined
    />
    <q-banner
      v-if="loginErrorStatus"
      inline-actions
      class="text-white bg-negative rounded-borders"
      dense
    >
      <q-icon name="warning" /> {{ loginErrorMessage }}
    </q-banner>
    <q-btn
      class="full-width q-mt-lg"
      :label="tab"
      type="submit"
      color="primary"
    ></q-btn>
  </q-form>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: ["tab"],
  methods: {
    ...mapActions("login", ["authenticateUser", "registerUser"]),
    ...mapMutations("login", [
      "setIsLoading",
      "setLoginUsername",
      "setLoginName",
      "setLoginEmail",
      "setLoginPassword",
    ]),
    submitForm() {
      this.setIsLoading(true);

      let name = this.loginName;
      let email = this.loginEmail;
      let password = this.loginPassword;

      if (this.tab === "login") {
        this.authenticateUser({ email, password });
      } else {
        this.registerUser({ name, email, password });
      }
    },
  },
  computed: {
    ...mapGetters("login", [
      "isLoading",
      "loginUsername",
      "loginName",
      "loginEmail",
      "loginPassword",
      "loginErrorStatus",
      "loginErrorMessage",
    ]),
  },
};
</script>
