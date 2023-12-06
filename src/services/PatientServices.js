import axios from "axios";
import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import { headers, headersFormData } from "./config";

export class PatientServices {
  async getPatients() {
    try {
      const response = await axios.get(`${baseUrl}/patients`, { headers });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getPatient(id) {
    try {
      const response = await axios.get(`${baseUrl}/patients/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async createPatient(name, address, noTelp, image, nik) {
    const data = new FormData();
    data.append("name", name);
    data.append("address", address);
    data.append("noTelp", noTelp);
    data.append("image", image);
    data.append("nik", nik);

    try {
      const response = await axios.post(`${baseUrl}/patients`, data, {
        headersFormData,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async updatePatient(id, name, address, noTelp, image, nik) {
    const data = new FormData();
    data.append("name", name);
    data.append("address", address);
    data.append("noTelp", noTelp);
    data.append("image", image);
    data.append("nik", nik);

    try {
      const response = await axios.put(`${baseUrl}/patients/${id}`, data, {
        headersFormData,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async deletePatient(id) {
    try {
      const response = await axios.delete(`${baseUrl}/patients/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
