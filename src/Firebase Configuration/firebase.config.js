import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBRVAUPWhEZg181becT5CvhbfoY-M2RaGY',
  authDomain: 'auth-router-context-two.firebaseapp.com',
  projectId: 'auth-router-context-two',
  storageBucket: 'auth-router-context-two.appspot.com',
  messagingSenderId: '627438429745',
  appId: '1:627438429745:web:a7e399d12ea896ce44d710',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
