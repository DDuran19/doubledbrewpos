import { Container } from "react-bootstrap";
import { useUser } from "../context/UserContext.jsx";
import { useEffect, useState } from "react";

export function Home() {
    const { user, getUserDetails } = useUser();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const details = await getUserDetails(user.email);
            setUserDetails(details);
        };

        fetchUserDetails();
    }, [user, getUserDetails]);

    console.log(userDetails); // This might show 'null' or 'undefined' in the first render

    return (
        <>
            <Container>
                User: <br></br>
                Name: {userDetails?.displayName} <br />
                Phone Number: {userDetails?.phoneNumber} <br />
                Branch: {userDetails?.branch}<br />
                Role: {userDetails?.role}<br />
            </Container>
        </>
    )
}
