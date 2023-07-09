import { firestoreDB, milkteaFlavorsRef } from "../../firebase-config";
import { onValue } from 'firebase/database';
import { collection, doc, setDoc } from 'firebase/firestore';

export function CreateBranchDocument(branch){ 

    const createBranchDocument = async (data) => {
        try {
            const branchRef = doc(collection(firestoreDB, 'branches'), branch);
            await setDoc(branchRef, data);
    
            console.log('Branch document created successfully.');
          } catch (error) {
            console.error('Error creating branch document:', error);
          }
        };

    const fetchTemplateData = async () => {
        try {
            onValue(milkteaFlavorsRef, (snapshot) => {
            const data = snapshot.val();
    
            // Call the function to create the branch document
            createBranchDocument(data);
            });
        } catch (error) {
            console.error('Error fetching template data:', error);
        }
        };

    fetchTemplateData();
}
