import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase-config";
const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        const saveUserOffline = async () => {
            console.log("saveUserOffline is called, current userREF");
    
            if (userDetails !== null) {
                // Open the IndexedDB database
                const openDBRequest = indexedDB.open('userDetails', 1);
    
                openDBRequest.onerror = (event) => {
                    console.error('Error opening IndexedDB database:', event.target.error);
                };
    
                openDBRequest.onsuccess = (event) => {
                    const db = event.target.result;
    
                    // Create or retrieve the object store
                    const transaction = db.transaction(['users'], 'readwrite');
                    const objectStore = transaction.objectStore('users');
    
                    const clearRequest = objectStore.clear();
    
                    clearRequest.onerror = (event) => {
                        console.error('Error getting user details from IndexedDB:', event.target.error);
                    };
    
                    clearRequest.onsuccess = () => {
                        addUserDetails()
                    };
    
                    transaction.oncomplete = () => {
                        db.close();
                    };
                };
            }
        };
    
        const addUserDetails = () => {
            // Open the IndexedDB database
            const openDBRequest = indexedDB.open('userDetails', 1);
    
            openDBRequest.onerror = (event) => {
                console.error('Error opening IndexedDB database:', event.target.error);
            };
    
            openDBRequest.onupgradeneeded = (event) => {
                const db = event.target.result;
    
                // Create or retrieve the object store
                const objectStore = db.createObjectStore('users', { keyPath: 'email' });
    
                const addRequest = objectStore.add(userDetails);
    
                addRequest.onerror = (event) => {
                    console.error('Error adding user details to IndexedDB:', event.target.error);
                };
    
                addRequest.onsuccess = () => {
                    console.log('User details saved offline successfully.');
                };
            };
    
            openDBRequest.onsuccess = (event) => {
                const db = event.target.result;
    
                // Create or retrieve the object store
                const transaction = db.transaction(['users'], 'readwrite');
                const objectStore = transaction.objectStore('users');
    
                const addRequest = objectStore.add(userDetails);
    
                addRequest.onerror = (event) => {
                    console.error('Error adding user details to IndexedDB:', event.target.error);
                };
    
                addRequest.onsuccess = () => {
                    console.log('User details saved offline successfully.');
                };
    
                transaction.oncomplete = () => {
                    db.close();
                };
            };
        };
    
        saveUserOffline();
    }, [userDetails]);
    
    


    const getUserDetails = async (uid) => {
        try {
            const userReference = doc(firestoreDB, "users", uid)
            const querySnapshot = await getDoc(userReference)
            console.log(querySnapshot)

            if (!querySnapshot.empty) {

                const userData = querySnapshot.data();

                const { phoneNumber, displayName, email, branch, role } = userData;
                setUserDetails({
                    "branch":branch,
                    "displayName":displayName,
                    "email":email,
                    "phoneNumber":phoneNumber,
                    "role":role
                })

                return { phoneNumber, displayName, email, branch, role };
            } else {

                console.log("User document not found.");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
            return null;
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            setUser,getUserDetails,
            userDetails, setUserDetails
        }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};