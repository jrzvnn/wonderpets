import firebase_app from "@/app/firebase/config";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from 'uuid';

const db = getFirestore(firebase_app);
const storage = getStorage();

// submit application data
export async function submitApplication(appData) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = (new Date());

    appData.status = 'pending';
    const applicationDocRef = await addDoc(collection(db, "applications"), {
        address: appData.address.trim(),
        birthdate: appData.birthdate.trim(),
        contact: appData.contact.trim(),
        eligibility: appData.eligibility.trim(),
        email: appData.email.trim(),
        environment: appData.environment.trim(),
        image: await uploadImage(appData.image),
        name: appData.name.trim(),
        occupation: appData.occupation.trim(),
        ownerUid: appData.ownerUid.trim(),
        petUid: appData.petUid.trim(),
        responsibility: appData.responsibility.trim(),
        sex: appData.sex.trim(),
        status: appData.status.trim(),
        submitDate: `${months[date.getMonth()]} ${date.getDate()}`
    });

    // set pet uid
    await updateDoc(applicationDocRef, {
        applicationUid: applicationDocRef.id
    })
}

// upload image to storage
export async function uploadImage(file) {
    let imageId = "images/" + uuid();
    if (file.type == "image/jpg") {
        imageId += ".jpg";
    } else if (file.type == "image/jpeg") {
        imageId += '.jpeg';
    } else if (file.type == "image/png") {
        imageId += '.png'
    }

    const imageRef = ref(storage, imageId);

    try {
        uploadBytes(imageRef, file).then((snapshot) => {
            //console.log("file successfully uploaded!");
            console.log();
        });
    } catch {
        //console.log('something is wrong in uploading the file');
        return "images/none.jpg";
    }
    return imageRef.fullPath;
}

