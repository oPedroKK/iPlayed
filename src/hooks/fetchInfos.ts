import {db} from "../firebaseConfig"
import { collection, getDocs } from "firebase/firestore"

export type Game = {
    name: string
    category: string
    plataform: string
    coverId: string
    description: string
    id: string
};

export const fetchInfos = async (): Promise<Game[]> => {
    const infoCollection = collection(db, "Games");
    const infoPreview = await getDocs(infoCollection);
    return infoPreview.docs.map(doc => ({ id: doc.id, ...doc.data() } as Game))
}