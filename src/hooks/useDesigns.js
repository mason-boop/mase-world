import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { useState, useEffect } from 'react';

export const useDesigns = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'designs')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDesigns(newData);
    });
  }, []);

  return { designs };
};
