import axios from "axios";
import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class UsersServices {
  async SignIn({ email, password }) {
    try {
      const res = await axios.post(`${baseUrl}/users/sign_in`, {
        api_user: {
          email: email,
          password: password,
        },
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
