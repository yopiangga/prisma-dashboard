import axios from "axios";
import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import { headers, headersFormData } from "./config";

export class MedicalRecordServices {
  async getMedicalRecords() {
    try {
      const response = await axios.get(`${baseUrl}/medical-records`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async getMedicalRecord(id) {
    try {
      const response = await axios.get(`${baseUrl}/medical-records/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async createMedicalRecord(
    patientId,
    image,
    diagnosisAi,
    diagnosisDoctor,
    description,
    diagnoseTime,
    idDoctor,
    idOperator,
    idHospital
  ) {
    const data = new FormData();
    data.append("patientId", patientId);
    data.append("image", image);
    data.append("diagnosisAi", diagnosisAi);
    data.append("diagnosisDoctor", diagnosisDoctor);
    data.append("description", description);
    data.append("diagnoseTime", diagnoseTime);
    data.append("idDoctor", idDoctor);
    data.append("idOperator", idOperator);
    data.append("idHospital", idHospital);

    try {
      const response = await axios.post(`${baseUrl}/medical-records`, data, {
        headersFormData,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async updateMedicalRecord(
    id,
    patientId,
    image,
    diagnosisAi,
    diagnosisDoctor,
    description,
    diagnoseTime,
    idDoctor,
    idOperator,
    idHospital
  ) {
    const data = new FormData();
    data.append("patientId", patientId);
    data.append("image", image);
    data.append("diagnosisAi", diagnosisAi);
    data.append("diagnosisDoctor", diagnosisDoctor);
    data.append("description", description);
    data.append("diagnoseTime", diagnoseTime);
    data.append("idDoctor", idDoctor);
    data.append("idOperator", idOperator);
    data.append("idHospital", idHospital);

    try {
      const response = await axios.put(
        `${baseUrl}/medical-records/${id}`,
        data,
        {
          headersFormData,
        }
      );
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }

  async deleteMedicalRecord(id) {
    try {
      const response = await axios.delete(`${baseUrl}/medical-records/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      handleOtherStatusCodes(error);
    }
  }
}
