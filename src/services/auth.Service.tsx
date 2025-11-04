import BaseRequestService from "./baseRequest.service";

const API_URL = import.meta.env.VITE_BACKEND_URL;

class AuthService extends BaseRequestService {
  googleLogin() {
    window.location.href = `${API_URL}/api/auth/google`;
  }
  loginUser(data: any) {
    return this.post(`${API_URL}/api/auth/login`, data);
  }

  signUpUser(data: any) {
    return this.post(`${API_URL}/api/auth/signup`, data);
  }

  forgotPassword(data: any) {
    return this.post(`${API_URL}/api/auth/forgot-password`, data);
  }

  recoverPassword(data: any) {
    return this.post(`${API_URL}/api/auth/recover-password`, data);
  }

  logoutUser() {
    return this.get(`${API_URL}/api/auth/logout`);
  }

}

export default new AuthService();
