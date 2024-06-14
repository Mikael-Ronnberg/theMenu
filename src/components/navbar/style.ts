import { BoxProps, FlexProps, LinkProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "brand.primaryDark",
  color: "brand.primaryLight",
  mb: "1rem",
  zIndex: 10,
};

export const desktopNavStyles: FlexProps = {
  //   width: "100%",
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottomWidth: "1px",
  borderColor: "brand.whiteBlue",
  display: { base: "none", lg: "flex" },
};

export const textSectionStyles: StackProps = {
  width: "100%",
  direction: "row",
  alignItems: "center",
  justifyContent: "space-around",
  borderColor: "brand.lightText",
  marginLeft: "2rem",
  marginRight: "2rem",
  display: { base: "none", lg: "flex" },
};

export const navbarLinkStyles: LinkProps = {
  _hover: {
    color: "brand.primaryDark",
    cursor: "pointer",
  },
};

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "0.5rem",
  py: "0.5rem",
  borderBottom: "1px",
  borderColor: "red",
  display: { base: "flex", lg: "none" },
  bgColor: "brand.primaryDark",
};
