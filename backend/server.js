const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

// In-memory data (temporary)
const tasks = [
  { id: 1, title: 'Morning run', status: 'todo', category: 'training' },
  { id: 2, title: 'Submit timesheet', status: 'in_progress', category: 'work' }
];

// Root route
app.get('/', (req, res) => {
  res.send('FlowState API is running');
});

// Health check (important for DevOps)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Create a task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});