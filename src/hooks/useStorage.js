import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // useEffect(() => {
  //   // references
  //   const storageRef = projectStorage.ref(file.name);
  //   const collectionRef = projectFirestore.collection('designs');

  //   storageRef.put(file).on('state_changed', (snap) => {
  //     let percentage = 
  //   });
  // });
};