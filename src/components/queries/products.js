import { collection, doc, getDoc, getDocs, where, query, deleteDoc} from 'firebase/firestore';

const PRODUCT_COLLECTION = 'items';

export const getAllProducts = (db) => {
  const collectionRef = collection(db, PRODUCT_COLLECTION);
  return getDocs(collectionRef)
    .then((snapshot) => {
      const products = [];
      snapshot?.docs?.forEach((item) => {
        products.push({
          id: item.id,
          ...item.data()
        })
      })
      return products;
    })
    .catch((error) => {
      return error;
    })
}

export const getProductById = (db, id) => {
    const documentRef = doc(db, 'items', id)
    return getDoc(documentRef)
      .then((dataFB) => {
        if (dataFB.exists){
            return {
                id: dataFB.id,
                ...dataFB.data()
            }
        }
      })
}

export const getProductsByCategory = (db, category_id) => {
    const collectionRef = query(collection(db, PRODUCT_COLLECTION), 
    where('category', '==', category_id)
    )
    return getDocs(collectionRef)
      .then((snapshot) => {
        const products = [];
        snapshot?.docs?.forEach((item) => {
          products.push({
            id: item.id,
            ...item.data()
          })
        })
        return products;
      })
      .catch((error) => {
        return error;
      })
  }

export const deleteProductById = (db, id) => {
  return deleteDoc(doc(db, PRODUCT_COLLECTION, id))

}