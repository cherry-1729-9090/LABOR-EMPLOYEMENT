import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const OngoingPage = () => {
  const [ongoingWork, setOngoingWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOngoingWork();
  }, []);

  const fetchOngoingWork = () => {
    setOngoingWork([
      { id: 1, title: 'Ongoing Project 1', date: '2024-07-15' },
      { id: 2, title: 'Ongoing Project 2', date: '2024-07-20' },
      { id: 3, title: 'Ongoing Project 3', date: '2024-07-25' },
      { id: 4, title: 'Ongoing Project 4', date: '2024-07-30' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Ongoing Projects
      </h1>
      <List
        bordered
        className="w-full max-w-3xl bg-white shadow-md rounded-lg"
        dataSource={ongoingWork}
        renderItem={work => (
          <List.Item className="border-b border-gray-200 py-4 px-6 last:border-b-0 mb-4">
            <Link 
              to={`/status/${work.id}`} 
              className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
            >
              {work.title} - <span className="text-gray-500">{work.date}</span>
            </Link>
          </List.Item>
        )}
      />
      <Button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-red-600 hover:bg-red-700 transition-colors text-lg font-semibold rounded-md shadow-lg px-4 py-2"
      >
        Back
      </Button>
    </div>
  );
};

export default OngoingPage;
