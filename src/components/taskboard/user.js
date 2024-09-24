import React, { useState, useEffect, useRef } from 'react';
import './user.css';
import Header from './Header';

const taskData = [
  {
    status: 'Anoodip maithy ',
    tasks: [
      { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', type: 'Feature Request' },
    ],
  },
  {
    status: 'Akansha Punjabi',
    tasks: [
      { id: 'CAM-5', title: 'Add Multi-Language Support - enable multilingual support within the...', type: 'Feature Request' },
    ],
  },
  {
    status: 'Anoop sharma',
    tasks: [
      { id: 'CAM-4', title: 'Add Multi-Language Support', type: 'Feature Request' },

    ],
  },
  {
    status: 'Arbazz sayyad',
    tasks: [
      { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', type: 'Feature Request' },
      { id: 'CAM-2', title: 'Implement Email Notification System', type: 'Feature Request' },
    ],
  },
  {
    status: 'arsha navani',
    tasks: [
      { id: 'CAM-1', title: 'Update User Profile Page UI', type: 'Feature Request' },
      
    ],
  },
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
                            <></>
                          )};   
      </span>
    </div>
    <h3 className="task-title">{task.title}</h3>
    <div className="task-body">
      <div className="circle"></div> 
    </div>
    <div className="task-footer">
      <div className="task-type-box">
        {task.id === 'CAM-1' ? (
            <>
             {/* <img 
                src="https://cdn.icon-icons.com/icons2/472/PNG/48/low_priority-48_45725.png"
               alt="Low Priority"
              className="task-priority-img"
             /> */}
          </>
         ) : (
          <></>
         )}
        <span className="task-type">{task.type}</span>
      </div>
    </div>
  </div>
);

const TaskColumn = ({ status, tasks }) => {
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
      {status === 'No priority' && (
        <div className="menu-bar">
          <img
            src="https://cdn.icon-icons.com/icons2/1960/PNG/512/menulines_122795.png"
            alt="Display Icon"
            className="display-icon"
          />
          <span className="menu-title" onClick={toggleDropdown}>
            Display
          </span>
          <img
            src="https://cdn.icon-icons.com/icons2/3257/PNG/96/arrow_drop_down_icon_206159.png"
            alt="Dropdown Icon"
            className="dropdown-icon"
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  Grouping
                  <span className="bordered status-text">Status</span>
                </li>
                <li className="dropdown-item">
                  Ordering
                  <span className="bordered status-text">Priority</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="column-header">
        <h2>
          {status === 'No priority' && (
            <img
              src="https://cdn.icon-icons.com/icons2/953/PNG/96/more-button-of-three-dots_icon-icons.com_74259.png"
              alt="Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'Urgent' && (
            <img
              src="https://media.istockphoto.com/id/1166034171/vector/exclamation-point-on-the-box-of-red-words-showing-shock-popup-event-notification-on.jpg?b=1&s=170x170&k=20&c=FEU_l1wWL91K5Ps69uVBWHcojloQ3NUPS7Now0L2et4="
              alt="Done Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'High' && (
            <img
              src="https://cdn.icon-icons.com/icons2/1883/PNG/512/volumecontrol_120585.png"
              alt="In Progress Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'Medium' && (
            <img
              src="https://cdn.icon-icons.com/icons2/2985/PNG/96/bar_chart_bar_graph_statistics_diagram_icon_187100.png"
              alt="Canceled Status Circle"
              className="status-circle-img"
            />
          )}
          {status === 'Low' && (
            <img
              src="https://cdn.icon-icons.com/icons2/1489/PNG/96/lowbattery_102674.png"
              alt="Canceled Status Circle"
              className="status-circle-img"
            />
          )}
          {status} {tasks.length}
        </h2>
        <button className="add-task">+</button>
        <img
          src="https://cdn.icon-icons.com/icons2/2715/PNG/96/dots_three_icon_172496.png"
          alt="Add Task"
          className="add-task-img"
        />
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

const TaskBoard = () => (
  <div className="task-board">
    <div className="board-header">
      <div className="board-controls">
        <div className="control-group">
          {/* Placeholder for any additional controls */}
        </div>
      </div>
    </div>
    <div className="board-columns">
      {taskData.map((column) => (
        <TaskColumn key={column.status} status={column.status} tasks={column.tasks} />
      ))}
    </div>
  </div>
);

export default TaskBoard;