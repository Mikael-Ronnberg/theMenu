import { Center, Flex, Text } from "@chakra-ui/react";
import { outerWrapper } from "./pages/style";

export default function Home() {
  return (
    <>
      <Flex {...outerWrapper}>
        <Center>
          <Text>The Menu</Text>
        </Center>
      </Flex>
    </>
  );
}
