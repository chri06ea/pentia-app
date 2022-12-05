import storage from '@react-native-firebase/storage';
import {useEffect, useState} from 'react';

export default function useResource(name: string) {
  const [loadedResourceUrl, setLoadedResourceUrl] = useState<
    string | undefined
  >();
  useEffect(() => {
    storage()
      .ref(name)
      .getDownloadURL()
      .then(res => setLoadedResourceUrl(res))
      .catch(err => console.log(err));
  }, [name]);
  return {url: loadedResourceUrl};
}
