import firebase_app from "@/app/firebase/config";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

// get pets data according to its category
export async function getPets(category) {
  let petsData = [];

  // query based on category and open for adoption availability
  const q = query(
    collection(db, "pets"),
    where("category", "==", category),
    where("availability", "==", "open")
  );
  const querySnap = await getDocs(q);
  querySnap.forEach((pet) => {
    petsData.push(pet.data());
  });

  return petsData;
}

// get pets data according to its category
export async function getPet(petUid) {
  const petRef = doc(db, "pets", petUid);
  const petSnap = await getDoc(petRef);
  if (petSnap.exists()) {
    return petSnap.data();
  } else {
    console.log("pet not found");
  }
  return petsData;
}
