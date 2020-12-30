<template>
  <q-page class="column items-center justify-evenly">
    <h1>Page Title</h1>
    <p>Message: {{ message }}</p>
    <input v-on:click="signIn()" type="button" value="Sign In"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import axios from 'axios';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    signIn() {
      axios.get('http://localhost:8080/sanctum/csrf-cookie').then(response => {
        console.log(response)
      });
    },
    loadData() {
      axios
        .get('http://localhost:8080/api/hello')
        .then(res => {
          this.message = res.data
        })
        .catch(error => {
          console.log('error', error)
        })
      }
  },
  mounted() {
    this.loadData()
  },
  setup() { }
});
</script>
