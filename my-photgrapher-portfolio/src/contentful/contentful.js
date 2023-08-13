import { createClient } from 'contentful';

const client = createClient({
  space: 'contentful id', // 
  accessToken: 'TOKEN',
});

export default client;
