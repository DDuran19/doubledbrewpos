import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { usersCollectionRef } from "../../firebase-config";
import { query, where, getDocs } from "firebase/firestore";

const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState('');

    const getUserDetails = async (uid) => {
        try {
            const q = query(usersCollectionRef, where('email', "==", uid));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // User document found, return the data
                const userData = querySnapshot.docs[0].data();
                // console.log(userData.displayName);
                const { phoneNumber, displayName, email, branch, role } = userData;
                return { phoneNumber, displayName, email, branch, role };
            } else {
                // User document not found
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