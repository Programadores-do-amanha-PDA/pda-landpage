import { getStudentBySlug, updateStudent } from '../student/_studentRepository'
import { Event } from './_eventModel'

export const addEvent = async (event: Event, studentSlug: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const studentExistsBySlug = await getStudentBySlug(studentSlug)

    if (!studentExistsBySlug) {
      reject('Invalid slug')
      return
    }

    event.createdAt = new Date()

    if (!studentExistsBySlug.events) {
      studentExistsBySlug.events = new Array()
    }

    studentExistsBySlug.events.push(event)

    await updateStudent(studentExistsBySlug)

    return resolve()
  })
}
