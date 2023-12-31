import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { ShowEmployees } from "./employeesModals/Showemployees";

export function AdminSection() {
    const [showEmployeesModal, setShowEmployeesModal] = useState(false);
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

    const openEmployeesModal = () => setShowEmployeesModal(true);
    const closeEmployeesModal = () => setShowEmployeesModal(false);

    const openAddEmployeeModal = () => setShowAddEmployeeModal(true);
    const closeAddEmployeeModal = () => setShowAddEmployeeModal(false);


    return (
        <Card>
            <Card.Header>Admin Section</Card.Header>
            <Card.Body>
                <Button onClick={openEmployeesModal} variant="primary">
                    Manage Employees
                </Button>{" "}
                <Button onClick={openAddEmployeeModal} variant="success">
                    Add Employee
                </Button>{" "}
            </Card.Body>

            <Modal show={showEmployeesModal} onHide={closeEmployeesModal} centered >
                {<ShowEmployees/>}
            </Modal>

            <Modal show={showAddEmployeeModal} onHide={closeAddEmployeeModal} centered >
                {"ADD EMPLOYEES"}
            </Modal>

        </Card>
    );
}
