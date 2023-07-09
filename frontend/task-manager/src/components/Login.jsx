import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={4}>
            <Heading size="lg" mb={4}>Login</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email:</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" mb={4}>
                    <FormLabel>Password:</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button type="submit" colorScheme="green">Login</Button>
            </form>
        </Box>
    );
};


export default Login


