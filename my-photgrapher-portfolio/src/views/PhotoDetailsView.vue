<template>
    <div class="photo-detail">
      <img :src="photo.image" alt="Photo" class="photo-image" />
      <div class="photo-caption">
        <h2 class="title">{{ photo.title }}</h2>
        <div v-html="photo.caption" class="caption rich-text"></div>
        <p class="category">Category: {{ photo.category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import client from '@/contentful/contentful';
  
  export default {
    name: 'PhotoDetailsView',
    data() {
      return {
        photo: null,
      };
    },
    created() {
      this.fetchPhotoDetail();
    },
    methods: {
      async fetchPhotoDetail() {
        const photoId = this.$route.params.id; 
        try {
          const response = await client.getEntry(photoId);
          this.photo = {
            title: response.fields.title,
            image: response.fields.image.fields.file.url,
            caption: response.fields.caption,
            category: response.fields.category,
          };
        } catch (error) {
          console.error('Error fetching photo detail:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
  
  .photo-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .photo-caption {
    margin-top: 20px;
    text-align: center;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .caption {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  .category {
    font-size: 18px;
    color: #555;
  }
  </style>
  