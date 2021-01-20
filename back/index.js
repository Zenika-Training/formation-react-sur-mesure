var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    firstName: "Bilbo",
    lastName: "Baggins",
    password: "my_precious",
    karma: 150,
  },
  {
    id: 2,
    firstName: "Frodo",
    lastName: "Baggins",
    password: "Sam!",
    karma: 300,
  },
  {
    id: 3,
    firstName: "Gandalf",
    lastName: "The grey",
    password: "run_you_fool",
    karma: 1200,
  },
  {
    id: 4,
    firstName: "Theoden",
    lastName: "Thengel's son",
    password: "is-that-all-your-magic-can-do?",
    karma: 100,
  },
];

let tasks = [
  {
    id: 1,
    priority: 1,
    name: "Destroy the ring",
    subTasks: [
      { name: "Leave the county", done: true },
      { name: "Seek help at Rivendel", done: true },
      { name: "Go through moria", done: true },
      { name: "Reach Gondor", done: false },
      { name: "Climb Mount Doom", done: false },
      { name: "Throw it into it the fire", done: false },
    ],
  },
  {
    id: 2,
    priority: 2,
    name: "Help Bilbo and the dwarfs",
    subTasks: [
      { name: "Leave the county", done: true },
      { name: "Avoid Trolls", done: true },
      { name: "Avoid Orcs", done: false },
      { name: "Avoid Goblins", done: false },
      { name: "Avoid Elfs", done: false },
      { name: "Avoid Humans", done: false },
    ],
  },
  {
    id: 3,
    priority: 3,
    name: "Kill Voldemort",
    subTasks: [
      { name: "Don't get catch by ministry of magic", done: true },
      { name: "Gather Deathly hallows", done: true },
      { name: "Ensure we are in the right book", done: false },
    ],
  },
];

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const [, username, password] = `${req.headers.authorization}`.match(
      /Bearer (.*):(.*)/
    );
    const user = users.find(
      (u) => u.firstName === username && u.password === password
    );

    if (user) {
      req.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

app.post("/login", function (req, res) {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.firstName === username && u.password === password
  );

  if (user) {
    res.send(`${username}:${password}`);
  } else {
    res.sendStatus(401);
  }
});

app.get("/users/current", auth, function (req, res) {
  res.send(req.user);
});

app.get("/tasks", auth, function (req, res) {
  res.send(tasks);
});

app.get("/tasks/:id", auth, function (req, res) {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    res.sendStatus(404);
    return;
  }

  res.send(task);
});

app.post("/tasks", auth, function (req, res) {
  const id = Math.max(...tasks.map((t) => t.id)) + 1;
  const task = { ...req.body, id };
  tasks.push(task);
  res.send(task);
});

app.put("/tasks/:id", auth, function (req, res) {
  const id = parseInt(req.params.id);
  const task = req.body;
  tasks = tasks.map((t) => {
    if (t.id === id) {
      return { ...task, id };
    } else {
      return t;
    }
  });

  const updatedTasks = tasks.find((t) => t.id === id);
  console.log(updatedTasks);
  if (!updatedTasks) {
    res.sendStatus(404);
    return;
  }

  if (updatedTasks.subTasks.every((st) => st.done)) {
    req.user.karma += 50;
  }

  res.send(updatedTasks);
});

app.patch("/tasks/:id/done", auth, function (req, res) {
  const id = parseInt(req.params.id);

  const updatedTasks = tasks.find((t) => t.id === id);
  if (!updatedTasks) {
    res.sendStatus(404);
    return;
  }

  updatedTasks.subTasks.forEach((st) => (st.done = true));
  req.user.karma += 50;

  res.send(updatedTasks);
});

app.listen(4000, () => console.log("Server started"));
