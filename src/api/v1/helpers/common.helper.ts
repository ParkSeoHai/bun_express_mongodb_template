import { IApiResponse } from "../interfaces/apiresponse.interface";

// Định dạng ngày tháng theo format dd/mm/yyyy
export const formatDate = (date: Date): string => {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

// Định dạng response api
export const formatApiResponse = (
  status: string,
  message: string,
  data: any
): IApiResponse<any> => {
  const response: IApiResponse<typeof data> = {
    status: status,
    message: message,
    data: data,
  };

  return response;
};
