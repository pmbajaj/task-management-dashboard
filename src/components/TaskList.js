import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {/* Wrap tasks with AnimatePresence to enable exit animations */}
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 50 }} // Start position
            animate={{ opacity: 1, y: 0 }} // Enter animation
            exit={{ opacity: 0, y: 50 }} // Exit animation
            transition={{ duration: 0.5 }} // Timing for animation
            style={{ marginBottom: '1rem' }} // Spacing between tasks
          >
            <Task task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
