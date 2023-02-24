import { Box, Input, Button, Link, chakra, FormControl, FormHelperText, InputGroup, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react"
import { login } from "../services/login"
import { useState } from "react"
import { LoginButton } from "./Button/LoginButton"
import { FaUserAlt, FaLock } from "react-icons/fa";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Card = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    return (
      <>         
                    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                        <form>
                            <Stack
                                spacing={4}
                                p="40px"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="email" placeholder="email address" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormHelperText textAlign="right">
                                        <Link>forgot password?</Link>
                                    </FormHelperText>
                                </FormControl>
                                <LoginButton onClickEvent={ login } />
                            </Stack>
                        </form>
                    </Box>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" href="#">
                        Sign Up
                    </Link>
                </Box>
      </>
    );
}
