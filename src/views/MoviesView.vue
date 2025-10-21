<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';

const isLoading = ref(false);

const genres = ref ([]);


const movies = ref([]);

  const listMovies = async (genreId) => {
      const response = await api.get('discover/movie', {
          params: {
              with_genres: genreId,
              language: 'pt-BR'
          }
      });
      movies.value = response.data.results
  };



onMounted(async () => {

const response = await api.get('genre/movie/list?language=pt-BR');


genres.value = response.data.genres;



});


</script>

<template>

<div>
    <h1>Gêneros de filmes</h1>
    <ul>
      <li v-for="genre in genres"
      :key="genre.id"
       class="genre-item">


      {{ genre.name }}</li>
    </ul>

    <loading v-model:active="isLoading" is-full-page />

  </div>



</template>

<style scoped>

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;

  .genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}
}

</style>
