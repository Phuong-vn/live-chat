import { ref, watchEffect } from "vue";
import { projectFirestore } from '@/firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  const unsubscribe = projectFirestore
    .collection(collection)
    .orderBy('createdAt')
    .onSnapshot(snap => {
      let results = [];
      snap.docs.forEach((doc) => {
        if (doc.data().createdAt) {
          results.push({
            ...doc.data(),
            id: doc.id
          });
        }
      })
      documents.value = results;
    }, err => {
      error.value = err.message;
      console.log(error.value);
    });

  watchEffect(onInvalidate => { onInvalidate(unsubscribe); });

  return { documents, error };
};

export default getCollection;