import React from 'react';
import { Box, Heading, Text, Badge } from '@chakra-ui/react';
import Task from './Task';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description for Task 1',
    dueDate: '2023-07-10',
    status: 'Completed',
    assignedUser: 'John Doe',
  },
  {
      id: 2,
    title: 'Task 2',
    description: 'Description for Task 2',
    dueDate: '2023-07-15',
    status: 'In Progress',
    assignedUser: 'Jane Smith',
},
  
];

const Home = () => {
  return (
    <>
    <Task/>
    <Box maxW={['100%', '80%', '60%']} mx={['auto', 'auto', 'auto', 'auto']} mt={8} p={4}>
      <Heading size="lg" mb={4}>My Tasks</Heading>
      {tasks.map((task) => (
        <Box key={task.id} bg="gray.100" p={4} mb={4}>
          <Heading size="md" mb={2}>{task.title}</Heading>
          <Text mb={2}>{task.description}</Text>
          <Text><strong>Due Date:</strong> {task.dueDate}</Text>
          <Text><strong>Status:</strong> <Badge colorScheme={task.status === 'Completed' ? 'green' : 'yellow'}>{task.status}</Badge></Text>
          <Text><strong>Assigned User:</strong> {task.assignedUser}</Text>
        </Box>
      ))}
    </Box>
    </>
  );
};



export default Home;