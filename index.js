const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

const students = [
    { id: 0, name: 'Zidan', fee: 1000, class: '4', gender: 'Male' },
    { id: 1, name: 'Sagar', fee: 4000, class: '7', gender: 'Male' },
    { id: 2, name: 'Lamia', fee: 1500, class: '7', gender: 'Female' },
    { id: 3, name: 'Sajjat', fee: 2500, class: '10', gender: 'Male' },
    { id: 4, name: 'Ibrahim', fee: 2500, class: '10', gender: 'Male' },
    { id: 5, name: 'Raisa', fee: 2000, class: '5', gender: 'Female' },
    { id: 6, name: 'Yasin', fee: 1500, class: '8', gender: 'Male' },
    { id: 7, name: 'Shanto', fee: 1500, class: '8', gender: 'Male' },
    { id: 8, name: 'Ruhi', fee: 4500, class: '8', gender: 'Female' },
    { id: 9, name: 'Shaina', fee: 6000, class: '10', gender: 'Female' },
    { id: 10, name: 'Redowan', fee: 2500, class: '4', gender: 'Male' }
];

app.get('/', (req, res) => {
    res.send('Bismilillah. I am learning Node js and express js');
})

app.get('/students', (req, res) => {

    // implement search queary
    const search = req.query.search;
    if (search) {
        const searchResults = students.filter(student => student.name.toLowerCase().includes(search));
        res.send(searchResults);
    }
    else {
        res.send(students);
    }
});

// post METHOD
app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length;
    students.push(newStudent);
    // res.send(JSON.stringify(newStudent))
    res.json(newStudent)
})

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const user = students[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
});