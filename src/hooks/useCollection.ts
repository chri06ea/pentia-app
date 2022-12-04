import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

/**
 * Returns an observable view of a firestore collection.
 * @param name Name of the collection
 * @param filter Optional filtering predicate.
 *
 */

export function useCollection<T>(
  name: string,
  // !TODO forward condss
  filter?: (item: T) => boolean,
) {
  const [items, setItems] = useState<T[]>([]);
  useEffect(() => {
    console.log('effect', Date.now());
    const unsubcribe = firestore()
      .collection(name)
      .onSnapshot(
        querySnapshot => {
          const updatedItems: T[] = [];
          querySnapshot.forEach(querySnapshotData => {
            // ? Assume key names match
            const item = querySnapshotData.data() as T;
            if (filter === undefined || filter(item)) {
              updatedItems.push(querySnapshotData.data() as T);
            }
          });
          setItems(updatedItems);
        },
        error => console.log(error),
      );
    return () => unsubcribe();
  }, [name]);
  const add = (item: T) => {
    firestore().collection(name).add(item);
  };
  return {items, add};
}
