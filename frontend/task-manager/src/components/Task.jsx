import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Select, Button, useToast } from '@chakra-ui/react';
import axios from "axios";

const Task = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const toast = useToast();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // let obj = {
    //   title,
    //   description,
    //   dueDate,
    //   assignedUser
    // }
    // await axios.post("http://localhost:8008/tasks/add",obj);


    toast({
      title: 'Task Created',
      description: 'Task has been successfully created.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignedUser('');
  };

  return (
    <Box maxW={['100%', '80%', '60%']} mx={['auto', 'auto', 'auto', 'auto']} mt={8} p={4}>
      <Heading size="lg" mb={4}>Create Task</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4}>
          <FormLabel>Title:</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description:</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="dueDate" mb={4}>
          <FormLabel>Due Date:</FormLabel>
          <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </FormControl>
        <FormControl id="assignedUser" mb={4}>
          <FormLabel>Assigned User:</FormLabel>
          <Select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue">Create Task</Button>
      </form>
    </Box>
  );
};





export default Task