import { headers } from "next/headers";
import { addStudent, getStudents } from "./_studentService";
import { Student } from "./_studentModel";

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

export async function POST(req: Request) {
  const authorization = req.headers.get("authorization");

  if (!authorization || !authorization.startsWith("Basic ")) {
    return new Response(
      JSON.stringify({ message: "Missing Authorization Header" }),
      { status: 401 }
    );
  }
  const base64Credentials = authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  console.log(username, password);
  console.log(process.env.PDA_API_USERNAME, process.env.PDA_API_PASSWORD);

  if (
    process.env.PDA_API_USERNAME !== username ||
    process.env.PDA_API_PASSWORD !== password
  ) {
    return new Response(JSON.stringify({ message: "invalid credentials" }), {
      status: 401,
    });
  }

  const body = await req.json();

  const student: Student = {
    name: body.name,
    class: body.class,
    technologies: body.technologies,
    email: body.email,
    mobile: body.mobile,
    github: body.github,
    linkedin: body.linkedin,
  };

  try {
    await addStudent(student);
    return Response.json({ message: "Student added successfully" });
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
