const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

const tasks = [
  { id: 1, title: 'Morning run', status: 'todo', category: 'training' },
  { id: 2, title: 'Submit timesheet', status: 'in_progress', category: 'work' }
];

app.get('/', (req, res) => {
  res.send('FlowState API is running');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});