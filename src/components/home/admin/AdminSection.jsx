import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { ShowEmployees } from "./employeesModals/Showemployees";

export function AdminSection() {
    const [showEmployeesModal, setShowEmployeesModal] = useState(false);
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
    const [showViewEditEmployeeModal, setShowViewEditEmployeeModal] = useState(false);
    const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);

    const openEmployeesModal = () => setShowEmployeesModal(true);
    const closeEmployeesModal = () => setShowEmployeesModal(false);

    const openAddEmployeeModal = () => setShowAddEmployeeModal(true);
    const closeAddEmployeeModal = () => setShowAddEmployeeModal(false);

    const openManageEmployeesModal = () => setShowViewEditEmployeeModal(true);
    const closeManageEmployeesModal = () => setShowViewEditEmployeeModal(false);

    const openDeleteEmployeeModal = () => setShowDeleteEmployeeModal(true);
    const closeDeleteEmployeeModal = () => setShowDeleteEmployeeModal(false);

    return (
        <Card>
            <Card.Header>Admin Section</Card.Header>
            <Card.Body>
                <Button onClick={openEmployeesModal} variant="primary">
                    See Employees
                </Button>{" "}
                <Button onClick={openAddEmployeeModal} variant="success">
                    Add Employee
                </Button>{" "}
                <Button onClick={openManageEmployeesModal} variant="info">
                    Manage Permissions
                </Button>{" "}
                <Button onClick={openDeleteEmployeeModal} variant="danger">
                    Delete Employee
                </Button>{" "}
            </Card.Body>

            <Modal show={showEmployeesModal} onHide={closeEmployeesModal} centered >
                {<ShowEmployees/>}
            </Modal>

            <Modal show={showAddEmployeeModal} onHide={closeAddEmployeeModal} centered >
                {"ADD EMPLOYEES"}
            </Modal>

            <Modal show={showViewEditEmployeeModal} onHide={closeManageEmployeesModal} centered >
                {"MANAGE PERMISSIONS"}
            </Modal>

            <Modal show={showDeleteEmployeeModal} onHide={closeDeleteEmployeeModal} centered >
                {"DELETE EMPLOYEES"}
            </Modal>
        </Card>
    );
}
