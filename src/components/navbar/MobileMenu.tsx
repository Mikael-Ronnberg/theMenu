"use client";

import { navItems } from "@/helpers/helpers";
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
  Link,
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

          <DrawerBody bgColor="brand.whiteGrey">
            <Box mb="2rem"></Box>
            {navItems.map((navItem, i) => (
              <Link href={navItem.href} key={i}>
                <Box
                  color="brand.darkText"
                  p="0.5rem"
                  _hover={{
                    bgColor: "brand.primary",
                    color: "brand.primaryWhite",
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
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