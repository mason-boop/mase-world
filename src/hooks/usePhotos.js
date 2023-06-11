import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { useState, useEffect } from 'react';

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'photos')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPhotos(newData);
    });
  }, []);

  return { photos };
};
