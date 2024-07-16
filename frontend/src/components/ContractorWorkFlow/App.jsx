import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './ProjectList';
import AddProjectStep1 from './AddProjectStep1';
import AddProjectStep2 from './AddProjectStep2';
import AddProjectStep3 from './AddProjectStep3';
import ProjectDetails from './ProjectDetails';
import ProjectApplications from './ProjectApplications';
import EmployeeDetails from './EmployeeDetails';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [role, setRole] = useState('');
  const [projectDetails, setProjectDetails] = useState({});
  const [applications, setApplications] = useState([
    { name: 'John Doe', rating: '4.5', mobile: '123-456-7890', location: 'City', wage: '$100/day', specialization: 'Electrician' },
    { name: 'Jane Smith', rating: '4.0', mobile: '987-654-3210', location: 'Town', wage: '$90/day', specialization: 'Plumber' }
    // Add more applications as needed
  ]);

  const addProject = (ownerDetails) => {
    const newProject = {
      ...projectDetails,
      ...ownerDetails,
      role,
      status: 'In progress'
    };
    setProjects([...projects, newProject]);
  };

  const updateProjectStatus = (updatedProjects) => {
    setProjects(updatedProjects);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList projects={projects} updateProjectStatus={updateProjectStatus} />} />
        <Route path="/add-project-step1" element={<AddProjectStep1 setRole={setRole} />} />
        <Route path="/add-project-step2" element={<AddProjectStep2 setProjectDetails={setProjectDetails} />} />
        <Route path="/add-project-step3" element={<AddProjectStep3 addProject={addProject} />} />
        <Route path="/project-details/:projectId" element={<ProjectDetails projects={projects} />} />
        <Route path="/project-applications" element={<ProjectApplications applications={applications} />} />
        <Route path="/employee-details/:employeeId" element={<EmployeeDetails applications={applications} />} />
      </Routes>
    </Router>
  );
};

export default App;
