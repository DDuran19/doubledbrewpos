import { useEffect } from 'react';
import { get } from 'firebase/database';
import { milkteaFlavorsRef } from '../../firebase-config';
import { openDB } from 'idb';

export const Startup = () => {
    useEffect(() => {
        // Check IndexedDB for the record and store template data if needed
        // checkAndStoreData();
        testGetFunction();

    }, []);

    const testGetFunction = () => {
        get(milkteaFlavorsRef)
            .then((snapshot) => {
                const data = snapshot.val();
                console.log('Data from get function:', data);
            })
            .catch((error) => {
                console.error('Error retrieving data:', error);
            });




        const checkAndStoreData = async () => {
            const dbName = 'milkteaFlavors'; // Specify your IndexedDB database name
            const dbVersion = 1; // Specify your IndexedDB database version
            const objectStoreName = 'milkteaFlavors'; // Specify the object store name

            const db = await openDB(dbName, dbVersion, {
                upgrade(db) {
                    // Create the object store within the version change event
                    db.createObjectStore(objectStoreName);
                },
            });
            const snapshot = await get(milkteaFlavorsRef);
            const transaction = db.transaction(objectStoreName, 'readwrite');
            console.log("Transaction: ", transaction)
            const objectStore = transaction.objectStore(objectStoreName);
            console.log("ObjectStore: ", objectStore)
            try {
                const data = await objectStore.getAll();
                console.log("This is the data: ", data)
                if (data.length === 0) {
                    // Retrieve template data from the Firebase Realtime Database
                    const snapshot = await get(milkteaFlavorsRef);
                    console.log("Snapshot from Firebase:", snapshot);
                    const data = snapshot.val();
                    console.log("This is the NEW data: ", data);

                    // Store template data in IndexedDB
                    const addTransaction = db.transaction(objectStoreName, 'readwrite');
                    const addObjectStore = addTransaction.objectStore(objectStoreName);
                    await addObjectStore.add(data);

                    console.log('Template data stored in IndexedDB');
                } else {
                    console.log('Data already exists in IndexedDB');
                }
            } catch (error) {
                console.error('Error accessing object store:', error);
            }
        };

        return null; // Return null as this component doesn't need to render any content
    };

// export default Startup;
