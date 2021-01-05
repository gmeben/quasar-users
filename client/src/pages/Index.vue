<template>
  <q-page class="column items-center justify-evenly">
    <h1>Page Title</h1>
    <p>Message: {{ message }}</p>
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
