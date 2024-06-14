import { navItems } from "@/helpers/helpers";
import { desktopNavStyles, navbarLinkStyles, textSectionStyles } from "./style";
import { Box, Flex, Link, Stack } from "@chakra-ui/react";

export default function DesktopNavbar() {
  return (
    <>
      <Flex {...desktopNavStyles}>
        {/* <Flex flex="33%"></Flex>
        <Flex flex="33%" justifyContent="center">
          <NavLogo />
        </Flex>
        <Flex flex="33%" justifyContent="flex-end"></Flex> */}
        <Stack {...textSectionStyles}>
          {navItems.map((navItem) => (
            <Box p="1rem" key={navItem.label}>
              <Link {...navbarLinkStyles} href={navItem.href}>
                {navItem.label}
              </Link>
            </Box>
          ))}
        </Stack>
      </Flex>
    </>
  );
}
