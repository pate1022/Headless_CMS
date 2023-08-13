<template>
    <div class="home">
      <h1 class="title">Welcome to My Photographer Portfolio</h1>
      <div class="photo-list">
        <div v-for="photo in photos" :key="photo.id" class="photo-card">
          <router-link :to="{ name: 'photo-detail', params: { id: photo.id } }">
            <img :src="photo.image" alt="Photo" class="photo-image" />
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [], 
      };
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  .title {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .photo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .photo-card {
    margin: 10px;
  }
  
  .photo-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .photo-image:hover {
    transform: scale(1.1);
  }
  </style>
  