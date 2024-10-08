import { getStudents } from "./_studentService";

export async function GET() {
  try {
    const students = await getStudents();
    return Response.json(students);
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
