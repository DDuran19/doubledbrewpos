import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useUser } from "../../context/UserContext";

export function UserInfo() {
    const { user, getUserDetails, userDetails } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            setLoading(true);
            await getUserDetails(user.uid); // TODDDDOOSADASODJHASLDHKJASLDNHKJASHDKJASHDJKAHD
            setLoading(false);
        };

        fetchUserDetails();
    },[]);

    return (
        <Card className="mb-4">
            <Card.Header>User Information</Card.Header>
            <Card.Body className="position-relative">
                <div className="d-flex justify-content-center align-items-center">
                    {loading && (
                        <Spinner animation="border" role="status">
                        </Spinner>
                    )}
                </div>
                {!loading && (
                    <>
                        <Card.Text>
                            <strong>Name:</strong> {userDetails?.displayName}
                        </Card.Text>
                        <Card.Text>
                            <strong>Phone Number:</strong> {userDetails?.phoneNumber}
                        </Card.Text>
                        <Card.Text>
                            <strong>Branch:</strong> {userDetails?.branch}
                        </Card.Text>
                        <Card.Text>
                            <strong>Role:</strong> {userDetails?.role}
                        </Card.Text>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}
