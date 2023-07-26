import firebase_app from "@/app/firebase/config";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";

const db = getFirestore(firebase_app);
const storage = getStorage();

// Submit donation data
export async function submitDonation(donationData) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();

  donationData.status = "pending";

  // Handle in-cash donations
  if (donationData.donationType === "incash") {
    donationData.petFood = 0;
    donationData.cleaningSupply = 0;
    donationData.toysTreats = 0;
    donationData.medications = 0;
  }
  // Handle in-kind donations
  else if (donationData.donationType === "inkind") {
    donationData.amount = 0;
  }

  const donationDocRef = await addDoc(collection(db, "donations"), {
    name: donationData.name.trim(),
    sex: donationData.sex.trim(),
    birthdate: donationData.birthdate.trim(),
    address: donationData.address.trim(),
    contact: donationData.contact.trim(),
    email: donationData.email.trim(),
    donationType: donationData.donationType.trim(),
    inCash: donationData.amount || 0,
    inKind: {
      petFood: donationData.petFood || 0,
      cleaningSupply: donationData.cleaningSupply || 0,
      toysTreats: donationData.toysTreats || 0,
      medications: donationData.medications || 0,
    },
    message: donationData.message.trim(),
    image: await uploadImage(donationData.image),
    ownerUid: donationData.ownerUid.trim(),
    petUid: donationData.petUid.trim(),
    submitDate: `${months[date.getMonth()]} ${date.getDate()}`,
    status: donationData.status.trim(),
  });

  // Set donation uid
  await updateDoc(donationDocRef, {
    donationUid: donationDocRef.id,
  });
}

// Upload image to storage
export async function uploadImage(file) {
  let imageId = "images/" + uuid();
  if (file.type === "image/jpg") {
    imageId += ".jpg";
  } else if (file.type === "image/jpeg") {
    imageId += ".jpeg";
  } else if (file.type === "image/png") {
    imageId += ".png";
  }

  const imageRef = ref(storage, imageId);

  try {
    await uploadBytes(imageRef, file);
    return imageRef.fullPath;
  } catch {
    console.error("Something went wrong in uploading the file");
    return "images/none.jpg";
  }
}
