
import React, { useState, useEffect, useRef } from 'react';
import './taskboard.css';
import Header from './Header';
// import Kanban from './kanban';
// import User from './user';



const taskData = [
  {
    status: 'BackLog',
    tasks: [
      { id: 'CAM-5', title: 'Add Multi-Language Support - Enable multi-language support within the...', type: 'Feature Request' },
      { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', type: 'Feature Request' },
    ]
  },
  {
    status: 'Todo',
    tasks: [
      { id: 'CAM-4', title: 'Add Multi-Language Support', type: 'Feature Request' },
      { id: 'CAM-2', title: 'Implement Email Notification System', type: 'Feature Request' },
      { id: 'CAM-1', title: 'Update User Profile Page UI', type: 'Feature Request' },
    ]
  },
  {
    status: 'In Progress',
    tasks: [
      { id: 'CAM-3', title: 'Optimize Database Queries for Performance', type: 'Feature Request' },
    ]
  },
  {
    status: 'Done',
    tasks: [
      { id: 'CAM-6', title: 'Enhance Search Functionality', type: 'Feature Request' },
      { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', type: 'Feature Request' },
      { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', type: 'Feature Request' },
      { id: 'CAM-10', title: 'Upgrade Server Infrastructure', type: 'Feature Request' },
      { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', type: 'Feature Request' },
    ]
  },
  {
    status: 'Canceled',
    tasks: []
  }
];

const TaskCard = ({ task }) => (
  <div className="task-card">
    <div className="task-header">
      <span className="task-id">{task.id}</span>
      <span className="task-avatar">
        {task.id === 'CAM-5' ? (
          <img 
            src="https://cdn.icon-icons.com/icons2/159/PNG/96/dictionary_letters_a_22352.png" 
            alt="Avatar for CAM-5" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-3' ? (
          <img 
            src="https://cdn.icon-icons.com/icons2/472/PNG/48/low_priority-48_45725.png" 
            alt="Avatar for CAM-3" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-2' ? (
          <img 
            src="https://icon-icons.com/icon/avatar-people-person-business-tie-boy-child-brown-hair/120516" 
            alt="Avatar for CAM-2" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-10' ? (
          <img 
            src="https://cdn.icon-icons.com/icons2/159/PNG/96/dictionary_letters_a_22352.png" 
            alt="Avatar for CAM-10" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-9' ? (
          <img 
            src="https://cdn.icon-icons.com/icons2/864/PNG/512/Dictionary_Translate_Letters_Words_Translation_icon-icons.com_67899.png" 
            alt="Avatar for CAM-9" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-11' ? (
          <img 
            src="https://cdn.icon-icons.com/icons2/41/PNG/128/WordswithFriends_keyboard_letters_7012.png" 
            alt="Avatar for CAM-11" 
            className="avatar-img"
          />
        ) : task.id === 'CAM-6' ? (
                <img 
                  src=" https://cdn.icon-icons.com/icons2/4029/PNG/96/twitter_x_new_logo_x_round_circle_blue_icon_256074.png" 
                  alt="Avatar for CAM-6" 
                  className="avatar-img"
                />
              ) : 
                task.id === 'CAM-7' ? (
                    <img 
                      src=" https://cdn.icon-icons.com/icons2/2201/PNG/512/slack_logo_round_icon_134010.png" 
                      alt="Avatar for CAM-7" 
                      className="avatar-img"
                    />
                  ) : 

                    task.id === 'CAM-1' ? (
                        <img 
                          src=" https://cdn.icon-icons.com/icons2/4029/PNG/96/twitter_x_new_logo_x_round_circle_blue_icon_256074.png" 
                          alt="Avatar for CAM-6" 
                          className="avatar-img"
                        />
                      ) : 
                        task.id === 'CAM-4' ? (
                            <img 
                              src=" https://cdn.icon-icons.com/icons2/2201/PNG/96/gmail_logo_round_icon_134018.png" 
                              alt="Avatar for CAM-6" 
                              className="avatar-img"
                            />
                          ) : 
                          task.id === 'CAM-8' ? (
                            <img 
                              src=" https://cdn.icon-icons.com/icons2/806/PNG/96/chat-43_icon-icons.com_65949.png" 
                              alt="Avatar for CAM-6" 
                              className="avatar-img"
                            />
                          ) : (
           
                            // <div className="status-dot"></div> 
          <span className="task-placeholder">---</span>
        )}
         <div className="status-dot"></div> 
      </span>
    </div>
    <h3 className="task-title">{task.title}</h3>
    <div className="task-footer">
      <div className="task-type-box">
        {task.id === 'CAM-1' ? (
          <>
            <img 
              src="https://cdn.icon-icons.com/icons2/472/PNG/48/low_priority-48_45725.png" 
              alt="Low Priority" 
              className="task-priority-img"
            />
          </>
        ) : (
          <span className="task-placeholder">---</span>
        )}
        <span className="task-type">{task.type}</span>
      </div>
    </div>
  </div>
);


const TaskColumn = ({ status, tasks, grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="task-column">
      {status === 'BackLog' && (
        <div className="dropdown-file" ref={dropdownRef}>
          <span className="dropdown-title" onClick={toggleDropdown}>
           
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                <li className="dropdown-item" onClick={() => console.log('File 1 selected')}>File 1</li>
                <li className="dropdown-item" onClick={() => console.log('File 2 selected')}>File 2</li>
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="column-header">
        <h2>
        {status === 'BackLog' && (
            <img
              src="https://cdn.icon-icons.com/icons2/4026/PNG/96/loading_icon_256009.png"
              alt="Status Circle"
              className="status-circle-img"
            />
          )}
           {status === 'Todo' && (
            <img
              src="https://cdn.icon-icons.com/icons2/520/PNG/96/Circle_icon-icons.com_52186.png"
              alt="Done Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'In progress' && (
            <img
              src="https://cdn.icon-icons.com/icons2/854/PNG/96/12_icon-icons.com_67657.png"
              alt="In Progress Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'Done' && (
            <img
              src="https://cdn.icon-icons.com/icons2/2760/PNG/96/correct_apply_done_icon_176355.png"
              alt="Canceled Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'Canceled' && (
            <img
              src="https://cdn.icon-icons.com/icons2/3106/PNG/96/cross_wrong_close_delete_icon_191608.png"
              alt="Canceled Status Circle"
              className="status-circle-img"
            />
          )}
          {status} ({tasks.length})
        </h2>
        <button className="add-task">+</button>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
// const TaskBoard = () => {
//   const handleUserClick = () => {
//   };
//   const handlePriorityClick = () => {
//   };
//   const [currentPage, setCurrentPage] = useState('status'); 
//   const [grouping, setGrouping] = useState('status');
//  const [sorting, setSorting] = useState('priority');
  

//   const handlePageChange = (page) => {
//       setCurrentPage(page);
//   };

//   const renderPage = () => {
//       switch (currentPage) {
//           case 'kanban':
//               return <Kanban />;
//           case 'user':
//               return <User />;
//           default:
//               return (
//                   <div>
                      
//                       <button onClick={() => handlePageChange('kanban')}>Priority</button>
//                       <button onClick={() => handlePageChange('user')}>User</button>
//                   </div>
//               );
//       }
//   };

//   return (
//       <div className="task-board">
//           <div className="board-header">
//           <Header onUserClick={handleUserClick} onPriorityClick={handlePriorityClick} />
//           {/* <Header 
//          grouping={grouping} 
//          sorting={sorting} 
//          onGroupingChange={setGrouping} 
//          onSortingChange={setSorting} 
//        /> */}
//           </div>
//           <div className="board-content">
//               {renderPage()}
//           </div>
//       </div>
//   );
// };

// export default TaskBoard;

const TaskBoard = () => {
  
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  return (
    <div className="task-board">
       <Header 
        grouping={grouping} 
        sorting={sorting} 
        onGroupingChange={setGrouping} 
        onSortingChange={setSorting} 
      />
      <div className="board-header">
       
      </div>
      <div className="board-columns">
        {taskData.map((column) => (
          <TaskColumn 
            key={column.status} 
            status={column.status} 
            tasks={column.tasks} 
            grouping={grouping}
            sorting={sorting}
            onGroupingChange={setGrouping}
            onSortingChange={setSorting}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;

