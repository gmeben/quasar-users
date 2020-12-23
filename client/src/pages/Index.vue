<template>
  <q-page class="column items-center justify-evenly">
    <h1>Page Title</h1>
    <p>Message: {{ message }}</p>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
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
          console.log('res', res)
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
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
