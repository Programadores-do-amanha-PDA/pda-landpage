import { getBaseUrl } from "@/app/api/infra/utils/enviroment";
import { Student } from "../app/api/student/_studentModel";

export const getStudents = async (url: string) => {
  return new Promise<Student[]>((resolve, reject) => {
    const uri = `${getBaseUrl()}${url}`;
    fetch(uri)
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
