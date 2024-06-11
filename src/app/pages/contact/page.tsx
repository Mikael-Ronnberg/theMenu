import MobileNavbar from "@/components/navbar/MobileNavbar";
import { Center, Flex, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <MobileNavbar />
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <Center>
          <Text>Contact?!</Text>
        </Center>
      </Flex>
    </>
  );
}
