import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading size="lg" mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email:</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password:</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="red">Register</Button>
      </form>
    </Box>
  );
}

export default Signup