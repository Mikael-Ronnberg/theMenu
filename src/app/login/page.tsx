"use client";

import { ChangeEvent, useState } from "react";
import { outerWrapper } from "../pages/style";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

interface LoginProps {}
export default function Login({}: LoginProps) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Flex {...outerWrapper}>
        <FormControl>
          <VStack>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              value={input.email}
              onChange={handleChange}
            />
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              value={input.password}
              onChange={handleChange}
            />
          </VStack>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              // Login(input);
              console.log(input);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Flex>
    </>
  );
}
