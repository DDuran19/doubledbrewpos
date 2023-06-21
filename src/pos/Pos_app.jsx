import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  firestore } from "../../firebase-config.js"

export default function Pos_app({ user }) {
    const actualUser = user.uid
    const [flavors, setFlavors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkExistingData = async () => {
            try {
                const docSnapshot = await firestore.firestore().collection('posData').doc(actualUser).get();

                if (docSnapshot.exists) {
                    // Data already exists for the user
                    console.log('Existing data found:', docSnapshot.data());
                } else {
                    // Data doesn't exist for the user
                    console.log('No existing data found.');
                }
            } catch (error) {
                console.error('Error checking existing data:', error);
            }
        };

        // Fetch the flavors for stocking
        const fetchFlavors = async () => {
            try {
                const flavorsSnapshot = await firestore.firestore().collection('flavors').get();
                const flavorsData = flavorsSnapshot.docs.map((doc) => doc.data());
                setFlavors(flavorsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching flavors:', error);
                setLoading(false);
            }
        };

        // Perform the necessary checks and fetch flavors
        if (user) {
            checkExistingData();
            fetchFlavors();
        }
    }, [user, actualUser]);

    const handleStockFlavor = async (flavor) => {
        try {
            const userFlavorsRef = firestore.firestore().collection('posData').doc(user.uid).collection('flavors');

            // Check if the flavor already exists for the user
            const existingFlavor = await userFlavorsRef.where('flavor', '==', flavor.flavor).limit(1).get();

            if (existingFlavor.empty) {
                // Flavor doesn't exist for the user, stock it
                await userFlavorsRef.add(flavor);
                console.log('Flavor stocked:', flavor);
            } else {
                console.log('Flavor already stocked:', flavor);
            }
        } catch (error) {
            console.error('Error stocking flavor:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Stock Flavors</h2>
            <ul>
                {flavors.map((flavor) => (
                    <li key={flavor.flavor}>
                        {flavor.flavor} - {flavor.series}
                        <button onClick={() => handleStockFlavor(flavor)}>Stock</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Pos_app.propTypes = {
    user: PropTypes.shape({
        uid: PropTypes.string.isRequired,
    }).isRequired,
};