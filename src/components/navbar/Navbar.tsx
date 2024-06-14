import { Box } from "@chakra-ui/react";
import { navbarStyles } from "./style";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <Box h="auto">
        <Box {...navbarStyles}>
          <DesktopNavbar />
          <MobileNavbar />
        </Box>
      </Box>
    </>
  );
}
