import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCzSm4UjGy3YlZXeGqvgEZoLaHf6ubFudg',
	authDomain: 'dropbox-clone-1768c.firebaseapp.com',
	projectId: 'dropbox-clone-1768c',
	storageBucket: 'dropbox-clone-1768c.appspot.com',
	messagingSenderId: '456340452270',
	appId: '1:456340452270:web:5f4a46b54501bdb0aace3f',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
