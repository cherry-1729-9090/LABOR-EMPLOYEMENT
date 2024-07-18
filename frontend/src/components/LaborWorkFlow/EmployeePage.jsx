import { useState } from "react";
import { Form, Input, Button, Upload, Card, Image, message } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { RegisterEmployee } from "../calls/employees"; // API call to save employee details
import { useNavigate } from "react-router-dom"; // Import useNavigate

function EmployeePage({ contactNumber }) {
  const [employee, setEmployee] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const validatePhoto = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const validateAadhaar = (aadhaar) => {
    const aadhaarRegex = /^[0-9]{12}$/; // 12-digit numeric Aadhaar
    return aadhaarRegex.test(aadhaar);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    return nameRegex.test(name);
  };

  const onFinish = async (values) => {
    if (!validateAadhaar(values.aadhaar)) {
      message.error("Invalid Aadhaar number! Must be 12 digits.");
      return;
    }
    if (!validateName(values.name) || !validateName(values.lastName)) {
      message.error("Names can only contain letters and spaces.");
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      if (photo && photo.originFileObj) {
        formData.append("photo", photo.originFileObj);
      }

      const response = await RegisterEmployee(formData);
      if (response.success) {
        message.success(response.message);
        form.resetFields();
        setPhoto(null);
        setEmployee(response.data); // Update employee state with new data

        // Navigate to Additional Info page after successful registration
        navigate('/additional-info');
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handlePhotoUpload = ({ file }) => {
    if (validatePhoto(file)) {
      setPhoto(file);
    } else {
      return Upload.LIST_IGNORE; // Prevent the file from being added to the upload list
    }
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  return (
    <div className="employee-page-container p-5">
      <h1 id="heading" className="text-center text-2xl font-bold mb-10">Employee Details</h1>
      {employee ? (
        <div className="employee-details-container flex justify-center">
          <Card>
            <Image
              width={200}
              src={employee.photoUrl}
              alt={`${employee.name}'s photo`}
            />
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Aadhaar:</strong> {employee.aadhaar}</p>
            <p><strong>Specialization (if any):</strong> {employee.specialization}</p>
            <p><strong>Contact Number:</strong> {employee.contactNumber}</p>
          </Card>
        </div>
      ) : (
        <div className="employee-form-container flex justify-center items-center">
          <div className="form-content flex w-full max-w-4xl">
            <div className="photo-upload-container flex-shrink-0 w-52 mr-4 text-center">
              {photo ? (
                <div className="relative inline-block">
                  <Image width={200} src={URL.createObjectURL(photo)} alt="Photo" />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={handleDeletePhoto}
                    className="absolute top-0 right-0 bg-white border-none rounded-full"
                  />
                </div>
              ) : (
                <div className="photo-placeholder">
                  <Image width={200} src="/placeholder.png" alt="Placeholder" />
                </div>
              )}
              <Upload
                name="photo"
                listType="picture"
                beforeUpload={() => false} // Disable automatic upload
                onChange={handlePhotoUpload}
                maxCount={1}
                showUploadList={false} // Disable showing uploaded file list
              >
                <Button icon={<UploadOutlined />}>Upload Photo</Button>
              </Upload>
            </div>
            <div className="form-fields flex-grow ml-12">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ contactNumber }} // Auto-fill contact number
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Name is required!" }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: "Last name is required!" }]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>

                <Form.Item
                  label="Aadhaar"
                  name="aadhaar"
                  rules={[{ required: true, message: "Aadhaar is required!" }]}
                >
                  <Input placeholder="Enter your Aadhaar number" />
                </Form.Item>

                <Form.Item
                  label="Specialization (if any)"
                  name="specialization"
                  rules={[{ required: true, message: "Specialization is required!" }]}
                >
                  <Input placeholder="Enter the work you want to do" />
                </Form.Item>

                <Form.Item label="Contact Number" name="contactNumber">
                  <Input value={contactNumber} disabled />
                </Form.Item>
                

  

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save and Proceed
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeePage;
