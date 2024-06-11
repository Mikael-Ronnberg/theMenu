import { Box, Flex, Stack } from "@chakra-ui/react";
import { mobileNavContainerStyles } from "./style";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileMenu />
        </Box>

        <Stack direction="row" spacing={1}></Stack>
      </Flex>
    </>
  );
}
