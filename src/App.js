// import logo from './logo.svg';
import './App.css';
import TaskBoard from './components/taskboard/taskboard';
// import './components/taskboard/taskboard.css'; 
function App() {
  return (
    <div className="App">
      <TaskBoard/>
    </div>
  );
}

export default App;
// src/components/TaskBoard/TaskBoard.js


 
    
// const priorityLabels = {
//   4: 'Urgent',
//   3: 'High',
//   2: 'Medium',
//   1: 'Low',
//   0: 'No priority'
// };

// const statusIcons = {
//   'Todo': '🔵',
//   'In Progress': '🟡',
//   'Done': '🟢',
//   'Canceled': '⚪'
// };

// const initialData = [
//   { id: 'CAM-5', title: 'Add Multi-Language Support - Enable multi-language support within the...', status: 'Todo', priority: 5, user: 'John Doe' },
//   { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', status: 'Todo', priority: 5, user: 'Jane Smith' },
//   { id: 'CAM-4', title: 'Add Multi-Language Support', status: 'Todo', priority: 3, user: 'Bob Johnson' },
//   { id: 'CAM-2', title: 'Implement Email Notification System', status: 'Todo', priority: 3, user: 'Alice Brown' },
//   { id: 'CAM-1', title: 'Update User Profile Page UI', status: 'Todo', priority: 3, user: 'Charlie Wilson' },
//   { id: 'CAM-3', title: 'Optimize Database Queries for Performance ', status: 'In Prograss', priority: 1, user: 'David Lee' },
//   { id: 'CAM-6', title: 'Enhance Search Functionality', status: 'Done', priority: 5, user: 'Eva Green' },
//   { id: 'CAM-7', title: 'Integrate Third-party Payment Gateway', status: 'Done', priority: 5, user: 'Grace Hall' },
//   { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', status: 'Done', priority: 5, user: 'Grace Hall' },
//   { id: 'CAM-10', title: 'Upgrade Server Infrastructure', status: 'Done', priority: 4, user: 'Henry Ford' },
//   { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', status: 'Done', priority: 4, user: 'Ivy Chen' }
// ];

// const Avatar = ({ name }) => {
//   const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
//   return <div className="avatar">{initials}</div>;
// };

// const TaskCard = ({ task }) => (
//   <div className="task-card">
//     <div className="task-header">
//       <span className="task-id">{task.id}</span>
//       <Avatar name={task.user} />
//     </div>
//     <h3 className="task-title">{task.title}</h3>
//     <div className="task-footer">
//       <span className="task-type">Feature Request</span>
//       <span className="task-priority">{priorityLabels[task.priority]}</span>
//     </div>
//   </div>
// );

// const Column = ({ title, tasks, icon }) => (
//   <div className="column">
//     <h2 className="column-title">
//       {icon} {title} {tasks.length}
//     </h2>
//     {tasks.map(task => <TaskCard key={task.id} task={task} />)}
//   </div>
// );

// const KanbanBoard = () => {
//   const [tasks, setTasks] = useState(initialData);
//   const [grouping, setGrouping] = useState('status');

//   const groupTasks = () => {
//     switch (grouping) {
//       case 'status':
//         return {
//           'Todo': tasks.filter(t => t.status === 'Todo'),
//           'In Progress': tasks.filter(t => t.status === 'In Progress'),
//           'Done': tasks.filter(t => t.status === 'Done'),
//           'Canceled': tasks.filter(t => t.status === 'Canceled')
//         };
//       case 'user':
//         return tasks.reduce((acc, task) => {
//           acc[task.user] = [...(acc[task.user] || []), task];
//           return acc;
//         }, {});
//       case 'priority':
//         return {
//           'Urgent': tasks.filter(t => t.priority === 4),
//           'High': tasks.filter(t => t.priority === 3),
//           'Medium': tasks.filter(t => t.priority === 2),
//           'Low': tasks.filter(t => t.priority === 1),
//           'No priority': tasks.filter(t => t.priority === 0)
//         };
//       default:
//         return {};
//     }
//   };

//   const groupedTasks = groupTasks();

//   return (
   
//     <div className="kanban-board">
//       <div className="board-header">
//         <h1>Frontend Assignment</h1>
//         <div className="controls">
//           <div className="select-wrapper">
//             <select onChange={(e) => setGrouping(e.target.value)} value={grouping}>
//               <option value="status">Status</option>
//               <option value="user">User</option>
//               <option value="priority">Priority</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="board-columns">
//         {Object.entries(groupedTasks).map(([key, tasks]) => (
//           <Column key={key} title={key} tasks={tasks} icon={statusIcons[key] || '📌'} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;
