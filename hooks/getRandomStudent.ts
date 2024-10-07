import { Student } from '../app/api/student/_studentModel'

export const getRandomStudent = async (url: string) => {
  return new Promise<Student>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
