import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { getDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../../firebase-config";
const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState('');

    const getUserDetails = async (uid) => {
        try {
            const userReference = doc(firestoreDB, "users", uid)
            const querySnapshot = await getDoc(userReference)
            console.log(querySnapshot)

            if (!querySnapshot.empty) {
                
                const userData = querySnapshot.data();
                
                const { phoneNumber, displayName, email, branch, role } = userData;
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
            setUser,
            getUserDetails
        }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};