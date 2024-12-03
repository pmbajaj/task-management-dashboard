import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../features/tasks/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: task.completed ? 'primary.main' : 'secondary.main',
        borderRadius: 2,
        padding: 2,
        marginBottom: 2,
        backgroundColor: 'background.paper',
        boxShadow: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h6">{task.title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {task.description}
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', marginTop: 1 }}>
        Due: {task.dueDate}
      </Typography>
      <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color={task.completed ? 'primary' : 'secondary'}
          onClick={() => dispatch(toggleComplete(task.id))}
          sx={{
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            '&:hover': {
              backgroundColor: task.completed ? 'primary.dark' : 'secondary.dark',
              transform: 'scale(1.05)',
            },
          }}
        >
          {task.completed ? 'Completed' : 'Mark as Complete'}
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(deleteTask(task.id))}
          sx={{
            transition: 'color 0.3s ease, transform 0.2s ease',
            '&:hover': {
              color: 'white',
              backgroundColor: 'error.main',
              transform: 'scale(1.05)',
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Task;
