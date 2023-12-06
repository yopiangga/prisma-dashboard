import axios from "axios";
import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import { headers, headersFormData } from "./config";

export class HospitalServices {
  async getHospitals() {
    try {
      const response = await axios.get(`${baseUrl}/hospitals`, { headers });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getHospital(id) {
    try {
      const response = await axios.get(`${baseUrl}/hospitals/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async createHospital(name, description, address, noTelp, image) {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("address", address);
    data.append("noTelp", noTelp);
    data.append("image", image);

    try {
      const response = await axios.post(`${baseUrl}/hospitals`, data, {
        headersFormData,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async updateHospital(id, name, description, address, noTelp, image) {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("address", address);
    data.append("noTelp", noTelp);
    data.append("image", image);

    try {
      const response = await axios.put(`${baseUrl}/hospitals/${id}`, data, {
        headersFormData,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async deleteHospital(id) {
    try {
      const response = await axios.delete(`${baseUrl}/hospitals/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
