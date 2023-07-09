import React from 'react';
import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex bg="blue.500" color="white" p={4}>
            <Box>
                <Heading size="md">Settyl</Heading>
            </Box>
            <Spacer />
            <Box>
                <Link to={"/"}>
                <Button variant="link" mr={4} color="white">Home</Button>
                </Link>
                <Link to={"/login"}>
                <Button variant="link" mr={4} color="white">Login</Button>
                </Link>
                <Link to={"signup"}>
                <Button variant="link" mr={4} color="white">Signup</Button>
                </Link>
                <Link to={"admin"}>
                <Button variant="link" mr={4} color="white">Admin</Button>
                </Link>
            </Box>
        </Flex>
    );
};



export default Navbar