import PropTypes from 'prop-types';

export function EmployeeSection({ employee }) {
  return (
    <>
      <li>
        <strong>Name:</strong> {employee.displayName}<br />
        <strong>Email:</strong> {employee.email}<br />
        <strong>Role:</strong> {employee.role}
      </li>
    </>
  );
}

EmployeeSection.propTypes = {
  employee: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired
};
