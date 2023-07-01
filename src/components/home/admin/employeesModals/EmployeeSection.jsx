import PropTypes from 'prop-types';

import { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';

export function EmployeeSection({ employee }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(employee.displayName);
    const [email, setEmail] = useState(employee.email);
    const [branch, setBranch] = useState(employee.branch)
    const [phoneNumber, setPhoneNumber] = useState(employee.phoneNumber)
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleEdit = () => {
        setIsEditing(prev => !prev);
    };

    const handleSave = () => {
        // Perform save logic here
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(employee.displayName);
        setEmail(employee.email);
    };

    const handleLock = () => {
        setIsChangingPassword(prev => !prev);
    };

    const handleChangePassword = () => {
        // Perform change password logic here
        setIsChangingPassword(false);
        setNewPassword('');
    };

    return (
        <Card className='mb-2 '>
            <Card.Body>
                {isEditing ? (
                    <Form>
                        <Form.Group controlId="branch">
                            <Form.Control
                                type="text"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                placeholder='Branch'
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Control
                                type="number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder='Phone Number'
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                            />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={handleSave}>
                            Save
                        </Button>{' '}
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>                
                    </Form>
                ) : (
                    <>
                        <ListGroup className='mb-4'>
                            <ListGroupItem>
                                <strong>Name:</strong> {`${employee.branch}: ${employee.displayName}`}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Phone Number:</strong> {employee.phoneNumber}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Email:</strong> {employee.email}
                            </ListGroupItem>
                        </ListGroup>

                    </>
                )}
                {isChangingPassword && (
                    <div className="change-password-container">
                    <Form.Group controlId="currentPassword">
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="newPassword">
                      <Form.Control
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleChangePassword}>
                      Change Password
                    </Button>
                  </div>
                  
                )}
            </Card.Body>
            <Card.Footer className="icons-container d-flex align-items-center justify-content-between">
                <span onClick={handleEdit} >
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="icon me-2"
                    />
                    Edit
                </span>
                <span onClick={handleLock}>
                    <FontAwesomeIcon
                        icon={faLock}
                        className="icon me-2"
                    />
                    Change Password
                </span>
                <span>
                <FontAwesomeIcon
                icon={faTrash}
                        className="icon me-2"
                // Add delete functionality
                    />
                    Delete
                </span>
                

            </Card.Footer>
        </Card>
    );
}


EmployeeSection.propTypes = {
    employee: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        phoneNumber: PropTypes.number.isRequired,
        branch: PropTypes.string.isRequired
    }).isRequired
};
