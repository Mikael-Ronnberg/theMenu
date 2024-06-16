"use client";
import { Center, Flex, Text } from "@chakra-ui/react";
import { outerWrapper } from "./pages/style";

import { trpc } from "@/server/client";

export default function Home() {
  const getUser = trpc.users.getUsers.useQuery();
  return (
    <>
      <Flex {...outerWrapper}>
        <Center>
          <Text>The Menu</Text>
          {JSON.stringify(getUser.data)}
        </Center>
      </Flex>
    </>
  );
}
