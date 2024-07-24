import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const AppliedPage = () => {
  const [appliedWork, setAppliedWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppliedWork();
  }, []);

  const fetchAppliedWork = () => {
    setAppliedWork([
      { id: 1, title: 'Applied Project 1', date: '2024-07-10' },
      { id: 2, title: 'Applied Project 2', date: '2024-07-12' },
      // Add more applied projects as needed
    ]);
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8">
        Applied Projects
      </h1>
      <List
        bordered
        className="w-full max-w-3xl bg-white shadow-md rounded-lg border border-red-100"
        dataSource={appliedWork}
        renderItem={work => (
          <List.Item className="border-b border-red-100 py-4 px-6 last:border-b-0 mb-4">
            <Link 
              to={`/labor/work-status/${work.id}`} 
              className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
            >
              {work.title} - <span className="text-gray-500">{work.date}</span>
            </Link>
          </List.Item>
        )}
      />
      <Button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-6 py-3 text-white"
      >
        Back
      </Button>
    </div>
  );
};

export default AppliedPage;
