const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Fake database
let users = [];

/**
 * GET all users
 */
app.get('/users', (req, res) => {
    res.json(users);

});

/**
 * CREATE a new user
 */
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        ...req.body
    };

    users.push(newUser);
    res.status(201).json({
        message: 'User created',
        user: newUser
    });
});

/**
 * UPDATE a user
 */
app.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    Object.assign(user, req.body);
    res.json({ message: 'User updated', user });
});

/**
 * DELETE a user
 */
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    users = users.filter(u => u.id !== userId);

    res.json({ message: 'User deleted' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
