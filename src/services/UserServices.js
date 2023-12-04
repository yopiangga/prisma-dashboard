import axios from "axios";
import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import { headers, headersFormData } from "./config";

export class UserServices {
  async myProfile() {
    try {
      const res = await axios.get(`${baseUrl}/user/me`, { headers });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async updateProfile({ name, image }) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    try {
      const res = await axios.put(`${baseUrl}/user/me`, formData, {
        headers: headersFormData,
      });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async getUsers() {
    try {
      const res = await axios.get(`${baseUrl}/user/users`, { headers });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async getUserById({ id }) {
    try {
      const res = await axios.get(`${baseUrl}/user/users/${id}`, { headers });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async createUser({ name, email, password, role, idHospital, image }) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("idHospital", idHospital);
    formData.append("image", image);

    try {
      const res = await axios.post(`${baseUrl}/user/users`, formData, {
        headers: headersFormData,
      });
      if (res.status === 201) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }

  async deleteUserById({ id }) {
    try {
      const res = await axios.delete(`${baseUrl}/user/users/${id}`, {
        headers,
      });
      if (res.status === 200) {
        return res.data;
      } else {
        handleOtherStatusCodes(res.status);
        return false;
      }
    } catch (err) {
      handleAxiosError(err);
      return false;
    }
  }
}
