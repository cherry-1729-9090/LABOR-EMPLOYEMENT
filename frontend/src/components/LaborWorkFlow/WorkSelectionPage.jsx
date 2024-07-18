import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'antd';

const WorkSelectionPage = () => {
  const [availableWorks, setAvailableWorks] = useState([]);

  useEffect(() => {
    // Simulated data fetch
    fetchAvailableWorks();
  }, []);

  const fetchAvailableWorks = () => {
    setAvailableWorks([
      { id: 1, title: 'Software Engineer', company: 'Tech Co', salary: '$5000/month' },
      { id: 2, title: 'Project Manager', company: 'Business Inc', salary: '$6000/month' },
      { id: 3, title: 'UI/UX Designer', company: 'Creative Labs', salary: '$4500/month' },
      { id: 4, title: 'Data Scientist', company: 'Data Corp', salary: '$7000/month' },
      { id: 5, title: 'Web Developer', company: 'Web Solutions', salary: '$5500/month' },
      { id: 6, title: 'Digital Marketing Specialist', company: 'Market Pros', salary: '$4000/month' },
      { id: 7, title: 'HR Manager', company: 'People Inc', salary: '$6000/month' },
      { id: 8, title: 'Sales Executive', company: 'Sales Force', salary: '$3500/month' },
      { id: 9, title: 'Content Writer', company: 'Content Creators', salary: '$3000/month' },
      { id: 10, title: 'Business Analyst', company: 'Analysis Group', salary: '$6500/month' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Available Work</h1>
      <List
        bordered
        className="w-full max-w-2xl bg-white shadow-md rounded-lg"
        dataSource={availableWorks}
        renderItem={work => (
          <List.Item className="border-b border-gray-200 last:border-b-0">
            <Link 
              to={`/work-info/${work.id}`} 
              className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
            >
              {work.title} at {work.company} - <span className="text-gray-600">{work.salary}</span>
            </Link>
          </List.Item>
        )}
      />
      <Button 
        onClick={() => window.history.back()} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2"
      >
        Back
      </Button>
    </div>
  );
};

export default WorkSelectionPage;
