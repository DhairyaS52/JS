const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' }
];

// PATCH API - Update user name by ID
app.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send({ message: 'User not found' });

  user.name = name;
  res.status(200).send(user);
});

// DELETE API - Delete user by ID
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).send({ message: 'User not found' });

  users.splice(index, 1);
  res.status(200).send({ totalCount: users.length });
});

app.listen(3000, () => console.log('Server running on port 3000'));