import React from 'react';
import { ConfigProvider } from 'antd';
import RoleSelection from './components/RoleSelection';
import OtpVerification from './components/OtpVerification';
import UserDetails from './components/UserDetails';
import MachinesForRent from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesForRent';
import { AppProvider } from './components/GlobalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contractor Workflow
import AddProjectStep1 from './components/ContractorWorkFlow/AddProjectStep1';
import AddProjectStep2 from './components/ContractorWorkFlow/AddProjectStep2';
import AddProjectStep3 from './components/ContractorWorkFlow/AddProjectStep3';
import EmployeeDetails from './components/ContractorWorkFlow/EmployeeDetails';
import ProjectApplications from './components/ContractorWorkFlow/ProjectApplications';
import ProjectDetails from './components/ContractorWorkFlow/ProjectDetails';
import ProjectList from './components/ContractorWorkFlow/ProjectList';

// Labor Workflow
import AdditionalInfoPage from './components/LaborWorkFlow/AdditionalInfoPage';
import AppliedPage from './components/LaborWorkFlow/AppliedPage';
import CompletedPage from './components/LaborWorkFlow/CompletedPage';
import ContractPage from './components/LaborWorkFlow/ContractPage';
import EmployeePage from './components/LaborWorkFlow/EmployeePage';
import HomePage from './components/LaborWorkFlow/HomePage';
import JobListening from './components/LaborWorkFlow/JobListening';
import MainPage from './components/LaborWorkFlow/MainPage';
import OngoingPage from './components/LaborWorkFlow/OngoingPage';
import WorkInformationPage from './components/LaborWorkFlow/WorkInformationPage';
import WorkSelectionPage from './components/LaborWorkFlow/WorkSelectionPage';
import WorkStatusPage from './components/LaborWorkFlow/WorkStatusPage';

// Machines Workflow
import BrwMachineDetails from './components/MachinesWorkflow/BorrowerWorkFlow/BrwMachineDetails';
import BrwOwnerDetails from './components/MachinesWorkflow/BorrowerWorkFlow/BrwOwnerDetails';
import MachinesAvailable from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesAvailable';
import MachinesRented from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesRented';
import VendorDetails from './components/MachinesWorkflow/BorrowerWorkFlow/VendorDetails';

// Rentee Workflow
import AddMachine from './components/MachinesWorkflow/RenteeWorkflow/AddMachine';
import CurrentRentedMachines from './components/MachinesWorkflow/RenteeWorkflow/CurrentRentedMachine';
import MachineDetails from './components/MachinesWorkflow/RenteeWorkflow/MachineDetails';
import OwnerRentalInfo from './components/MachinesWorkflow/RenteeWorkflow/OwnerRentalInfo';
import RenteeDetails from './components/MachinesWorkflow/RenteeWorkflow/RenteeDetails';
import RenteeMachines from './components/MachinesWorkflow/RenteeWorkflow/RenteeMachines';
import LoginPage from './components/Loginpage';

function App() {
  return (
    <Router>
      <ConfigProvider>
        <AppProvider>
          <Routes>
            {/* Role Selection and User Details */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/user-details" element={<UserDetails />} />

            {/* Contractor Workflow */}
            <Route path="/contractor">
              <Route path="add-project-step1" element={<AddProjectStep1 />} />
              <Route path="add-project-step2" element={<AddProjectStep2 />} />
              <Route path="add-project-step3" element={<AddProjectStep3 />} />
              <Route path="employee-details" element={<EmployeeDetails />} />
              <Route path="project-applications" element={<ProjectApplications />} />
              <Route path="project-details" element={<ProjectDetails />} />
              <Route path="project-list" element={<ProjectList />} />
            </Route>

            {/* Labor Workflow */}
            <Route path="/labor">
              <Route path="additional-info" element={<AdditionalInfoPage />} />
              <Route path="applied" element={<AppliedPage />} />
              <Route path="completed" element={<CompletedPage />} />
              <Route path="contract" element={<ContractPage />} />
              <Route path="employee" element={<EmployeePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="ongoing" element={<OngoingPage />} />
              <Route path="work-information" element={<WorkInformationPage />} />
              <Route path="work-selection" element={<WorkSelectionPage />} />
              <Route path="work-status" element={<WorkStatusPage />} />
            </Route>

            {/* Machines Workflow */}
            <Route path="/machines">
              {/* Borrower */}
              <Route path="borrower">
                <Route path="machines-for-rent" element={<MachinesForRent />} />
                <Route path="brw-machine-details" element={<BrwMachineDetails />} />
                <Route path="brw-owner-details" element={<BrwOwnerDetails />} />
                <Route path="machines-available" element={<MachinesAvailable />} />
                <Route path="machines-rented" element={<MachinesRented />} />
                <Route path="vendor-details" element={<VendorDetails />} />
              </Route>

              {/* Rentee */}
              <Route path="rentee">
                <Route path="add-machine" element={<AddMachine />} />
                <Route path="current-rented-machines" element={<CurrentRentedMachines />} />
                <Route path="machine-details" element={<MachineDetails />} />
                <Route path="owner-rental-info" element={<OwnerRentalInfo />} />
                <Route path="rentee-details" element={<RenteeDetails />} />
                <Route path="rentee-machines" element={<RenteeMachines />} />
              </Route>

              
            </Route>
          </Routes>
        </AppProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
