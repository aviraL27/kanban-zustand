# Kanban Task Board (Zustand)

A simple Kanban task board built with **React + TypeScript + Zustand** to learn global state management in modern React applications.

This project demonstrates how Zustand can replace heavier state management solutions like Redux for small to medium-sized apps.

---

## Tech Stack

* React
* TypeScript
* Vite
* Zustand
* CSS3

---

## Features

* Add new tasks
* Move tasks between columns (Todo → In Progress → Done)
* Delete tasks
* Global state management with Zustand
* State persistence using localStorage
* Clean component architecture

---

## Project Structure

```
src
│
├── components
│   ├── AddTask.tsx
│   ├── Board.tsx
│   ├── Column.tsx
│   └── TaskCard.tsx
│
├── store
│   └── taskStore.ts
│
├── types
│   └── task.ts
│
├── styles.css
├── App.tsx
└── main.tsx
```

---

## Zustand Store Concept

The global store manages the application state:

```
tasks: Task[]

addTask()
deleteTask()
moveTask()
```

Components subscribe to only the state they need:

```
const tasks = useTaskStore((state) => state.tasks)
```

This avoids prop drilling and keeps components simple.

---

## Local Development

Clone the repository:

```
git clone https://github.com/aviraL27/zustand-kanban-board.git
```

Go into the project:

```
cd zustand-kanban-board
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## Learning Goals

This project was built to understand:

* Zustand global state management
* React component architecture
* Selective state subscriptions
* Persistent state using middleware
* Building small React projects with Vite

---

## License

This project is for learning purposes.
