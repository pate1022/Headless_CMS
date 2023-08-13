<template>
    <div class="home">
      <h1 class="title">Welcome to My Photographer Portfolio</h1>
      <div class="photo-list">
        <div v-for="photo in photos" :key="photo.id" class="photo-card">
          <router-link :to="{ name: 'photo-detail', params: { id: photo.id } }">
            <img :src="photo.image" alt="Photo" class="photo-image" />
          </router-link>
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import client from '@/contentful/contentful';
  
  export default {
    name: 'HomeView',
    data() {
      return {
        photos: [],
      };
    },
    created() {
      this.fetchPhotos();
    },
    methods: {
      async fetchPhotos() {
        try {
          const response = await client.getEntries({
            content_type: 'photo', // Replace 'photo' with your actual content type ID
          });
          this.photos = response.items.map((item) => ({
            id: item.sys.id,
            title: item.fields.title,
            image: item.fields.image.fields.file.url,
          }));
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      },
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
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .photo-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .photo-title {
    font-size: 16px;
    margin-top: 5px;
  }
  </style>
  