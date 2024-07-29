import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/GlobalContext';
import LoginPage from './components/Loginpage';
import RoleSelection from './components/RoleSelection';
import OtpVerification from './components/OtpVerification';
import UserDetails from './components/UserDetails';
import MachinesForRent from './components/MachinesWorkflow/BorrowerWorkFlow/MachinesForRent';

// Contractor Workflow
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
// import JobListening from './components/LaborWorkFlow/JobListening';
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

function App() {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <Router>
      <ConfigProvider>
        <AppProvider>
          <Routes>
            {/* Role Selection and User Details */}
            <Route path="/" element={<LoginPage mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/user-details" element={<UserDetails />} />

            {/* Contractor Workflow */}
            <Route path="/contractor/add-project-step2" element={<AddProjectStep2 />} />
            <Route path="/contractor/add-project-step3" element={<AddProjectStep3 />} />
            <Route path="/contractor/employee-details" element={<EmployeeDetails />} />
            <Route path="/contractor/project-applications" element={<ProjectApplications />} />
            <Route path="/contractor/project-details" element={<ProjectDetails />} />
            <Route path="/contractor/project-list" element={<ProjectList />} />

            {/* Labor Workflow */}
            <Route path="/labor/additional-info" element={<AdditionalInfoPage />} />
            <Route path="/labor/applied" element={<AppliedPage />} />
            <Route path="/labor/completed" element={<CompletedPage />} />
            <Route path="/labor/contract" element={<ContractPage />} />
            <Route path="/labor/employee" element={<EmployeePage />} />
            <Route path="/labor/main" element={<MainPage />} />
            <Route path="/labor/ongoing" element={<OngoingPage />} />
            <Route path="/labor/work-information" element={<WorkInformationPage />} />
            <Route path="/labor/work-selection" element={<WorkSelectionPage />} />
            <Route path="/labor/work-status" element={<WorkStatusPage />} />

            {/* Machines Workflow */}
            <Route path="/machines/borrower/machines-for-rent" element={<MachinesForRent />} />
            <Route path="/machines/borrower/brw-machine-details" element={<BrwMachineDetails />} />
            <Route path="/machines/borrower/brw-owner-details" element={<BrwOwnerDetails />} />
            <Route path="/machines/borrower/machines-available" element={<MachinesAvailable />} />
            <Route path="/machines/borrower/machines-rented" element={<MachinesRented />} />
            <Route path="/machines/borrower/vendor-details" element={<VendorDetails />} />

            {/* Rentee Workflow */}
            <Route path="/machines/rentee/add-machine" element={<AddMachine />} />
            <Route path="/machines/rentee/current-rented-machines" element={<CurrentRentedMachines />} />
            <Route path="/machines/rentee/machine-details" element={<MachineDetails />} />
            <Route path="/machines/rentee/owner-rental-info" element={<OwnerRentalInfo />} />
            <Route path="/machines/rentee/rentee-details" element={<RenteeDetails />} />
            <Route path="/machines/rentee/rentee-machines" element={<RenteeMachines />} />
          </Routes>
        </AppProvider>
      </ConfigProvider>
    </Router>
  );
}

export default App;
