import React from "react";
import {
  Button,
  Flex,
  useColorMode,
  extendTheme,
  useStyleConfig,
  forwardRef,
  chakra,
  HTMLChakraProps,
  ThemingProps
} from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

// 1. define component configuration
const components: Record<string, StyleConfig> = {
  CustomBadge: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "green.300" : "green.500",
      color: colorMode === "dark" ? "gray.800" : "white",
      textTransform: "uppercase",
      fontWeight: "semibold",
      letterSpacing: "0.02em",
      padding: "4px",
      borderRadius: "2px",
      fontSize: "12px"
    }),
    variants: {
      custom: ({ colorMode }) => ({
        bg: colorMode === "dark" ? "blue.200" : "blue.500",
        padding: "8px"
      })
    }
  }
};

// 2. Call 'extendTheme' and pass your custom values
export const customTheme = extendTheme({ components });

export interface CustomBadgeProps
  extends HTMLChakraProps<"span">,
    ThemingProps {}

// 3. Use it in your components
export const CustomBadge = forwardRef<CustomBadgeProps, "span">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("CustomBadge", { size, variant });

  return <chakra.span ref={ref} __css={styles} {...rest} />;
});
