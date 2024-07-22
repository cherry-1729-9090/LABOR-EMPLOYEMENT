import React, { useEffect,useState } from 'react';
import { Button, Card, List, Typography, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getJobsByPostedById } from '../../calls/jobCalls';
import { useAppContext } from '../GlobalContext';

const { Title, Text } = Typography;

const ProjectList = () => {
  const {userId} = useAppContext();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    try {
      projects = getJobsByPostedById(userId);
    }
    catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }, []);

  const navigate = useNavigate();

  const handleStatusToggle = (index) => {
    const updatedProjects = [...projects];
    const projectStatus = updatedProjects[index].status;

    const confirmMessage = projectStatus === 'In progress'
      ? 'Are you sure you want to mark this project as completed?'
      : 'Are you sure you want to mark this project as in progress?';

    Modal.confirm({
      title: 'Confirm Action',
      content: confirmMessage,
      onOk: () => {
        updatedProjects[index].status = projectStatus === 'In progress' ? 'Completed' : 'In progress';
        // updateProjectStatus(updatedProjects);
      },
    });
  };

  const handleProjectClick = (index) => {
    if (projects[index].status === 'In progress') {
      navigate(`/project-details/${index}`);
    }
  };

  const handleAddProject = () => {
    navigate('/contractor/add-project-step2');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '16px', overflow: 'auto' }}>
        <Title level={2} style={{ textAlign: 'center' }}>Your Projects</Title>
        {projects.length > 0 ? (
          <List
            dataSource={projects}
            renderItem={(project, index) => (
              <List.Item
                key={index}
                actions={[
                  <Button
                    type={project.status === 'In progress' ? 'primary' : 'default'}
                    onClick={() => handleStatusToggle(index)}
                  >
                    {project.status === 'In progress' ? 'Mark as Completed' : 'Mark as In Progress'}
                  </Button>
                ]}
              >
                <Card
                  style={{ width: '100%' }}
                  title={
                    <a
                      onClick={() => handleProjectClick(index)}
                      style={{ cursor: 'pointer', color: '#1890ff' }}
                    >
                      {project.name}
                    </a>
                  }
                >
                  <Text
                    style={{
                      backgroundColor: project.status === 'In progress' ? '#faad14' : '#52c41a',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '12px',
                    }}
                  >
                    {project.status}
                  </Text>
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <div style={{ textAlign: 'center', color: '#999' }}>No projects available</div>
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
