const axiosInstance = require('./axiosInstance');
const createEmployee = async (employee) => {
  try{
    const response = await axiosInstance.post('/employees', employee);
    return response.data;
  }
  catch(error){
    console.log(error);
  }
}

