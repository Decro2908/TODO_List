// Importujte React a styled-components, a váš obrázek
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from './bejr.jpg';

// Vytvořte styled komponenty pro různé části aplikace
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat;
  font-family: Arial, sans-serif;
`;

const TodoContainer = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

// Vytvořte nový styled komponent pro element <h2>
const StyledH2 = styled.h2`
  color: red;
  font-weight: normal;
`;

// Definujte vaši React komponentu
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Vrátíte JSX s využitím nového styled komponentu pro <h2>
  return (
    <AppContainer>
      <TodoContainer>
        <h1>Todos Listos</h1>
        <StyledH2>by Bejrosák Dan</StyledH2>
        <InputContainer>
          <Input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Nový úkol"
          />
          <AddButton onClick={handleAddTask}>Přidat úkol</AddButton>
        </InputContainer>
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              {task.text}
              <RemoveButton onClick={() => handleRemoveTask(task.id)}>Odstranit</RemoveButton>
            </TaskItem>
          ))}
        </TaskList>
      </TodoContainer>
    </AppContainer>
  );
};

// Exportujte vaši React komponentu
export default TodoApp;
