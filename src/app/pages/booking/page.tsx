import MobileNavbar from "@/components/navbar/MobileNavbar";
import { Center, Flex, Text } from "@chakra-ui/react";

export default function Booking() {
  return (
    <>
      <MobileNavbar />
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <Center>
          <Text>Booking A Table perhaps?!</Text>
        </Center>
      </Flex>
    </>
  );
}
