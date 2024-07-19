// src/calls/employees.js

export const GetEmployeeDetails = async () => {
    // Mock API call
    return {
      success: true,
      data: {
        name: "John Doe",
        aadhaar: "1234-5678-9012",
      specialization: "farmer",
        preferredDailyLocation: "City Center",
        preferredLongTermLocation: "Downtown",
        photoUrl: "https://via.placeholder.com/200"
      },
      message: "Employee details fetched successfully"
    };
  };
  
  export const RegisterEmployee = async (employeeData) => {
    // Mock API call
    return {
      success: true,
      data: employeeData,
      message: "Employee registered successfully"
    };
  };