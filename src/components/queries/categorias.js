import { collection, getDocs} from 'firebase/firestore';

const COLLECCION_CATEGORIAS = 'categorias';

export const getAllCategories = (db) => {

    const collectionRef = collection(db, COLLECCION_CATEGORIAS);
    return getDocs(collectionRef)
      .then((snapshot) => {
        const categorias = [];
        snapshot?.docs?.forEach((item) => {
            categorias.push({
            id: item.id,
            ...item.data()
          })
        })
        return categorias;
      })
      .catch((error) => {
        return error;
      })
  }