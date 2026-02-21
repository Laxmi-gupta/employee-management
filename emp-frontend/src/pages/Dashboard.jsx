import "./Dashboard.css";
import { useState,useEffect } from "react";

// Import icons properly (Vite-safe)
import logo from "../assets/icons/idms_logo.svg";
import employeeIcon from "../assets/icons/employee.svg"
import leavesIcon from '../assets/icons/leaves.svg'
import holidaysIcon from '../assets/icons/holidays.svg'
import outdoorIcon from '../assets/icons/outdoor_duty.svg'
import expenseIcon from '../assets/icons/expense.svg'
import attendanceIcon from '../assets/icons/attendance.svg'
import itIcon from '../assets/icons/it_computation.svg'
import salaryIcon from '../assets/icons/salary.svg'
import documentsIcon from '../assets/icons/documents.svg'
import trainingIcon from '../assets/icons/training.svg'
import performanceIcon from '../assets/icons/performance.svg'
import policiesIcon from '../assets/icons/policies.svg'
import reportsIcon from '../assets/icons/reports.svg'
import supportIcon from '../assets/icons/support.svg'
import userAvatar from '../assets/icons/user_avatar.svg'
import searchIcon from '../assets/icons/search_icon.svg'
import noRecords from '../assets/icons/no_records.svg'
import photoIcon from '../assets/icons/photo.svg'
import actionIcon from '../assets/icons/action.svg'
import createIcon from '../assets/icons/create.svg'
import api from "../../../frontend/src/services/api";
import { CreateEmployeeModel } from "../components/CreateEmployeeModel";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");
      console.log(res); 
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
}, []);

  const menuItems = [
  { name: 'Employee',        icon: employeeIcon },
  { name: 'Leaves',          icon: leavesIcon },
  { name: 'Holidays',        icon: holidaysIcon },
  { name: 'Outdoor Duty',    icon: outdoorIcon },
  { name: 'Expense',         icon: expenseIcon },
  { name: 'Attendance',      icon: attendanceIcon },
  { name: 'IT Computation',  icon: itIcon },
  { name: 'Salary',          icon: salaryIcon },
  { name: 'Documents',       icon: documentsIcon },
  { name: 'Training & Dev.', icon: trainingIcon },
  { name: 'Performance',     icon: performanceIcon },
  { name: 'HR Policies',     icon: policiesIcon },
  { name: 'Reports',         icon: reportsIcon },
  { name: 'Support',         icon: supportIcon },
]

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="IDMS Logo" className="logo-img" />

        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className={index === 0 ? "active" : ""}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          
          <img src={userAvatar} alt="User" className="profile-icon" />
        </header>

        <div className="content-area">
            <div className="page-title">
              <h2>Employee Setup</h2>
            </div>

            {/* Search + Create */}
            <div className="toolbar">
              <div className="search-box">
                <img src={searchIcon} alt="Search" />
                <input type="text" placeholder="Search..." />
              </div>
            
              <img src={createIcon} alt="Create" className="create-icon"  onClick={() => setOpenModal(true)}/>
                
            </div>

           {/* Table */}
          <div className="table-container">
            {employees.length === 0 ? (
              <div>
                <img src={noRecords} alt="No Records" width="120" className="no-records"/>
                <div>No Records to be displayed</div>
                </div>
             ) : (
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>

                <tbody>
                
                  {employees.map((emp, index) => (
                    <tr key={index}>
                      <td>{emp.fullName}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.gender}</td>
                      <td> {new Date(emp.dateOfBirth).toLocaleDateString("en-GB")}</td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td>
                        {emp.photo ? (
                          <img
                            src={photoIcon}
                            alt="Employee"
                            className="icon-small"
                            style={{ cursor: "pointer" }}
                            onClick={() => setPreviewImage(emp.photo)}
                          />
                        ) : (
                          <img src={photoIcon} alt="No Photo" className="icon-small" />
                        )}
                      </td>
                      <td>
                        <img src={actionIcon} alt="Action" className="icon-small" />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )}
          </div>
        </div>

        {/* Footer */}
       <div className="footer">
          <div className="records-box">
            Total Records → {employees.length}
          </div>
          <div className="pagination-box">
            &lt; Page 1 &gt;
          </div>
        </div>
      </div>

       {openModal && (
        <CreateEmployeeModel
          onClose={() => setOpenModal(false)}
          onSuccess={fetchEmployees}
        />
      )}

      {previewImage && (
        <div className="image-preview-overlay" onClick={() => setPreviewImage(null)}>
          <div className="image-preview-box">
            <img src={previewImage} alt="Employee" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;