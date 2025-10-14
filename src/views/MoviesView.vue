<script setup>
import { ref, onMounted } from 'vue';
import api from @/plugins/axios';

const genre = ref ([]);


onMounted(async () => {

  const response = await api.get ('genre/movie/list?language=pt-BR');
  genres.value = response.data.genres;



});


</script>

<template>

<h1>filmes</h1>

</template>
