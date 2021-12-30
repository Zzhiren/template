import request from '@/services/request';

export const login = ({ jsCode }: Login.LoginParams): Promise<Login.LoginResponse> => {
  return request.get(`${GATEWAY}/oosWebApp/small/appletLogin`, { jsCode });
};