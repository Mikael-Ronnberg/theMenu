"use client";

import MobileMenyBtn from "@/icons/MobileMenyBtn";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
//   import { navItems } from "../helpers";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        _hover={{
          bgColor: "transparent",
        }}
        color="brand.whiteGrey"
        fontSize="1rem"
        pt="1rem"
      >
        <MobileMenyBtn />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton rounded="sm" />
          <DrawerHeader p="2rem"></DrawerHeader>

          <DrawerBody bgColor="brand.whiteCream">
            <Box mb="2rem"></Box>
            {/* {navItems.map((navItem, i) => (
                <Link to={navItem.href} key={i}>
                  <Box
                    color="brand.primaryDarker"
                    p="0.5rem"
                    _hover={{
                      bgColor: "brand.primary",
                      color: "brand.whiteCream",
                    }}
                  >
                    {navItem.label}
                  </Box>
                </Link>
              ))} */}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              rounded="sm"
              size="sm"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
