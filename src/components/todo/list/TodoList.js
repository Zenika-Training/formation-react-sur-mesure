import Todo from "./Todo";

const tasks = [
  {
    id: 1,
    priority: 1,
    name: "Destroy the ring",
    subTasks: [
      { name: "Leave the Shire", done: true },
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
      { name: "Leave the Shire", done: true },
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

function TodoList() {
  return (
    <div>
      <Todo {...tasks[0]} />
    </div>
  );
}

export default TodoList;
