// import { VercelRequest, VercelResponse } from "@vercel/node";
// import { Student } from "./student/_studentModel";
// import {
//   addStudent,
//   getRandomStudent,
//   getStudent,
// } from "./student/_studentService";

// const Home = async (req: VercelRequest, res: VercelResponse) => {
//   if (req.method === "POST") {
//     if (
//       !req.headers.authorization ||
//       req.headers.authorization.indexOf("Basic ") === -1
//     ) {
//       res.status(401).json({ message: "Missing Authorization Header" });
//       return;
//     }

//     const base64Credentials = req.headers.authorization.split(" ")[1];
//     const credentials = Buffer.from(base64Credentials, "base64").toString(
//       "ascii"
//     );
//     const [username, password] = credentials.split(":");

//     if (
//       process.env.PDA_API_USERNAME !== username ||
//       process.env.PDA_API_PASSWORD !== password
//     ) {
//       res.status(401).json({ message: "invalid credentials" });
//       return;
//     }

//     const student: Student = {
//       name: req.body.name,
//       bio: req.body.bio,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       github: req.body.github,
//       class: req.body.class,
//       slug: req.body.slug,
//       city: req.body.city,
//       state: req.body.state,
//       linkedin: req.body.linkedin,
//     };

//     addStudent(student)
//       .then((student) => {
//         res
//           .status(201)
//           .json({
//             endpoint: `https://programadoresdoamanha.org/alunos/${student.slug}`,
//           });
//       })
//       .catch((err) => {
//         res.status(500).json({ message: err });
//       });
//   } else if (req.method === "GET") {
//     const { currentSlug } = req.query;
//     const { slug } = req.query;

//     if (currentSlug) {
//       getRandomStudent(currentSlug.toString())
//         .then((student) => {
//           res.status(200).json(student);
//         })
//         .catch((err) => {
//           res.status(500).json({ message: err });
//         });
//     }

//     if (slug) {
//       getStudent(slug.toString())
//         .then((student) => {
//           res.status(200).json(student);
//         })
//         .catch((err) => {
//           res.status(500).json({ message: err });
//         });
//     }
//   }
// };

// export default Home;
