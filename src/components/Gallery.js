import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { useState } from 'react';
import { useDesigns } from '../hooks/useDesigns';
import { usePhotos } from '../hooks/usePhotos';

export default function Gallery({type}) {
  const [index, setIndex] = useState(-1);
  const { designs } = useDesigns();
  const { photos } = usePhotos();

  return (
    <>
      <PhotoAlbum
        layout="columns"
        spacing="10"
        columns="3"
        photos={type === 'designs' ? designs : photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={type === 'designs' ? designs : photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Thumbnails]}
      />
    </>
  );
}
