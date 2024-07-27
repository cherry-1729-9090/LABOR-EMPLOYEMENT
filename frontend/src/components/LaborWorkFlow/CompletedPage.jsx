import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const CompletedPage = () => {
  const [completedWork, setCompletedWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompletedWork();
  }, []);

  const fetchCompletedWork = () => {
    setCompletedWork([
      { id: 1, title: 'Completed Project 1', date: '2024-07-01' },
      { id: 2, title: 'Completed Project 2', date: '2024-07-05' },
      // Add more completed projects as needed
    ]);
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-10 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-6 sm:mb-8">
        Completed Projects
      </h1>
      <List
        bordered
        className="w-full max-w-md sm:max-w-3xl bg-white shadow-lg rounded-lg border border-red-100"
        dataSource={completedWork}
        renderItem={work => (
          <List.Item className="border-b border-red-100 py-3 px-4 sm:py-4 sm:px-6 last:border-b-0 mb-3 sm:mb-4">
            <Link 
              to={`/labor/work-status/${work.id}`} 
              className="text-red-600 hover:text-red-700 transition-colors text-base sm:text-lg font-medium"
            >
              {work.title} - <span className="text-gray-500">{work.date}</span>
            </Link>
          </List.Item>
        )}
      />
      <Button 
        onClick={() => navigate(-1)} 
        className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 transition-colors text-base sm:text-lg font-semibold rounded-md shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-white"
      >
        Back
      </Button>
    </div>
  );
};

export default CompletedPage;
