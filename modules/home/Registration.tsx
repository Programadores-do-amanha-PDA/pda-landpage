// import { Button, Layout, Row, Text } from "@common/components";
// import React from "react";
// import styled, { useTheme } from "styled-components";

// import { HiXMark } from "react-icons/hi2";

// const Registration = ({ deviceMenuOpen }) => {
//   const [visible, setVisible] = React.useState(true);

//   return (
//     visible && (
//       <Layout
//         width={"100%"}
//         position={"absolute"}
//         top={deviceMenuOpen ? null : 80}
//         left={0}
//         right={0}
//         py="0px"
//         my={deviceMenuOpen ? 10 : null}
//         px={deviceMenuOpen ? 20 : "space_2xs_l"}
//       >
//         <Row
//           width="100%"
//           mx="auto"
//           zIndex={1}
//           backgroundColor="SchemesPrimaryContainer"
//           padding="space_2xs_xs"
//           borderBottomLeftRadius={16}
//           borderRadius={deviceMenuOpen ? 6 : null}
//           borderBottomRightRadius={16}
//           justifyContent="space-between"
//           alignItems="center"
//           style={{ boxShadow: "0 1px 4px 0 #0000005a" }}
//           gridGap={10}
//         >
//           <Text
//             fontFamily="IBM Plex Sans"
//             color="black"
//             fontSize="content"
//             textAlign="left"
//           >
//             <Redirect href="https://forms.gle/Sf93Zf5QmvASRFLp9">
//               Clique aqui
//             </Redirect>{" "}
//             para se inscrever para futuras turmas.
//           </Text>
//           <Button
//             variant="primary"
//             color="black"
//             bg={"transparent"}
//             padding={0}
//             onClick={() => setVisible(false)}
//             size={30}
//             display={"flex"}
//             style={{ alignItems: "center", justifyContent: "center" }}
//           >
//             <HiXMark size={25} strokeWidth={1} />
//           </Button>
//         </Row>
//       </Layout>
//     )
//   );
// };

// export default Registration;
