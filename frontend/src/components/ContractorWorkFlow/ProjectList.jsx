import React, { useEffect, useState } from 'react';
import { Button, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getJobsByPostedById } from '../../calls/jobCalls';
import { useAppContext } from '../GlobalContext';

const { Text } = Typography;

const ProjectList = () => {
  const { userId, setProjectId, contractorId } = useAppContext();
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getJobsByPostedById(contractorId);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchProjects();
  }, [contractorId]);

  const handleProjectClick = (index) => {
    setProjectId(projects[index]._id);
    navigate(`/contractor/project-details`);
  };

  const handleAddProject = () => {
    navigate('/contractor/add-project-step2');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '16px', overflow: 'auto' }}>
        <h1>Your Projects</h1>
        {projects.length > 0 ? (
          <List
            dataSource={projects}
            renderItem={(project, index) => (
              <List.Item key={index}>
                <div style={{ width: '100%' }} onClick={() => handleProjectClick(index)}>
                  <a
                    style={{ cursor: 'pointer', color: '#1890ff', fontSize: '18px', fontWeight: 'bold' }}
                  >
                    {project.name}
                  </a>
                  <div>
                    <Text strong>Job Type:</Text> {project.jobType}
                  </div>
                  <div>
                    <Text strong>Location:</Text> {project.location}
                  </div>
                  <div>
                    <Text strong>Pay Rate:</Text> {project.payRate}
                  </div>
                  <Text
                    style={{
                      backgroundColor: project.status === 'In progress' ? '#faad14' : project.status === 'Open' ? '#1890ff' : '#52c41a',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      marginTop: '8px',
                      display: 'inline-block',
                    }}
                  >
                    {project.status}
                  </Text>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <div>No projects found.</div>
        )}
      </div>
      <div style={{ padding: '16px', backgroundColor: '#fff', borderTop: '1px solid #e8e8e8' }}>
        <Button
          type="primary"
          style={{ width: '100%' }}
          onClick={handleAddProject}
        >
          Add Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectList;
