import { collection, doc, getDoc, getDocs} from 'firebase/firestore';

const ORDERS_COLLECTION = 'orders';

export const getAllOrders = (db) => {
    const collectionRef = collection(db, ORDERS_COLLECTION);
    return getDocs(collectionRef)
      .then((snapshot) => {
        const orders = [];
        snapshot?.docs?.forEach((item) => {
            orders.push({
            id: item.id,
            ...item.data()
          })
        })
        return orders;
      })
      .catch((error) => {
        return error;
      })
  }

export const getOrderById = (db, id) => {
    const documentRef = doc(db, 'orders', id)
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
