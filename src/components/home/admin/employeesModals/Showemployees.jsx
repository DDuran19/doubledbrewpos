import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { firestoreDB } from "../../../../../firebase-config";
import { useUser } from "../../../../context/UserContext";
import { collection, getDoc } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { EmployeeSection } from "./EmployeeSection";

export function ShowEmployees() {
    const { user } = useUser();
    const query = collection(firestoreDB, `users/${user.uid}/employees`);
    const [employees, loading, error] = useCollectionData(query);
    const [employeeDetails, setEmployeeDetails] = useState([]);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            if (employees) {
                const details = await Promise.all(
                    employees.map(async (employee) => {
                        const userDetailsRef = employee.userDetailsReference;
                        const userDetailsSnapshot = await getDoc(userDetailsRef);
                        const userDetails = userDetailsSnapshot.data();
                        return userDetails;
                    })
                );
                setEmployeeDetails(details);
            }
        };

        fetchEmployeeDetails();
    }, [employees]);
    console.log(employeeDetails)
    return (
        <Card style={{height: "min(80vh,80svh)", overflowY: "scroll"}}>
            <Card.Header>Employees</Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-between">
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Loading...</span>}
                {employeeDetails && (
                    <ul>
                        {employeeDetails.map((employee) => (
                            <EmployeeSection  key={employee.uid} employee = {employee}/>
                        ))}
                    </ul>
                )}
            </Card.Body>
        </Card>
    );
}
