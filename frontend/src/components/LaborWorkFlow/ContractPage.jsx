import React, { useState } from 'react';
import { Button, Checkbox, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const ContractPage = () => {
  const [userAgreed, setUserAgreed] = useState(false);
  const [contractorAgreed, setContractorAgreed] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    contact: '',
    position: '',
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userAgreed && contractorAgreed) {
      // Logic to update job status (from applied to ongoing)
      message.success('Contract agreed! Job is now in the ongoing section.');
      // Navigate back to main page or specific page
      navigate('/main-page');
    } else {
      message.error('Both parties must agree to the contract.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 font-sans">
      <h1 className="text-2xl font-bold text-red-700 mb-8">Contract Agreement</h1>
      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 mb-6">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <Input 
          placeholder="Name" 
          value={userInfo.name} 
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} 
          className="mb-4" 
        />
        <Input 
          placeholder="Contact Number" 
          value={userInfo.contact} 
          onChange={(e) => setUserInfo({ ...userInfo, contact: e.target.value })} 
          className="mb-4" 
        />
        <Input 
          placeholder="Position" 
          value={userInfo.position} 
          onChange={(e) => setUserInfo({ ...userInfo, position: e.target.value })} 
          className="mb-4" 
        />
      </div>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contract Guidelines</h2>
        <p>Please agree to the following terms:</p>
        <Checkbox 
          checked={userAgreed} 
          onChange={(e) => setUserAgreed(e.target.checked)} 
          className="mb-4"
        >
          I agree to the terms and conditions
        </Checkbox>
        
        <Checkbox 
          checked={contractorAgreed} 
          onChange={(e) => setContractorAgreed(e.target.checked)} 
          className="mb-4"
        >
          Contractor agrees to the terms and conditions
        </Checkbox>
      </div>

      <Button 
        onClick={handleSubmit} 
        className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold"
      >
        Submit Agreement
      </Button>
    </div>
  );
};

export default ContractPage;
