import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo, getCategorys } from '../services/authService';
import Calendar from '../components/Calendar';
import ToDoPopupModal from '../components/ToDoPopupModal';
import '../styles/calendarPage.css';
import { Button } from 'react-bootstrap';

const ToDoPage = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [currentTodo, setCurrentTodo] = useState(null);
  const userId = localStorage.getItem('token');

  // 할 일 목록 불러오기
  useEffect(() => {
    if (!userId) return;
    fetchTodos();
  }, [userId]);

  const fetchTodos = () => {
    getTodos(userId)
      .then((data) => {
        const formattedEvents = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          description: todo.description,
          date: todo.due_date,
          priority: todo.priority,
          status: todo.status,
          categoryId: todo.categoryId
        }));
        setEvents(formattedEvents);
      })
      .catch((err) => console.error(err));
  };

  // 카테고리 목록 불러오기
  useEffect(() => {
    getCategorys()
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // 할 일 저장
  const handleSave = (updatedTodo) => {
    if (updatedTodo.id) {
      // 업데이트
      const updatedEvents = events.map((event) =>
        event.id === updatedTodo.id ? updatedTodo : event
      );
      setEvents(updatedEvents);

      updateTodo(updatedTodo.id, updatedTodo)
        .then(() => setModalOpen(false))
        .catch((err) => console.error(err));
    } else {
      // 새 할 일 추가
      addTodo(
        userId,
        updatedTodo.category,
        updatedTodo.title,
        updatedTodo.description,
        updatedTodo.status,
        updatedTodo.dueDate,
        updatedTodo.priority
      )
        .then((newTodo) => {
          setEvents([...events, { ...newTodo, due_date: newTodo.dueDate }]);
          setModalOpen(false);
        })
        .catch((err) => console.error(err));
    }
    window.location.reload();
  };

  // 날짜 클릭 시 모달 열기
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setCurrentTodo(null);
    setModalOpen(true);
  };

  // 할 일 수정 시 모달 열기
  const handleEdit = (event) => {
    setCurrentTodo(event);      
    setModalOpen(true);
  };
  
  // 할 일 삭제
  const handleDeleted = (todoId) => {
    deleteTodo(todoId)
      .then(() => {
        const remainingEvents = events.filter((event) => event.id !== todoId);
        setEvents(remainingEvents);
        setModalOpen(false);
      })
      .catch((err) => console.error(err));
    setModalOpen(false);
    window.location.reload();
  };

  // 할 일 완료: status를 'COMPLETED'로 변경하고 업데이트
  const handleCompleted = (todoId) => {
    const updatedTodo = {
      status: 'COMPLETED'
    };  
    updateTodo(todoId, updatedTodo);
    setModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📅 할 일 캘린더</h2>
      <div style={{ display: 'flex' }}>
        <Button style={{ marginLeft: 'auto' }} onClick={(e)=>handleEdit(e.event)}>일정 추가</Button>
      </div>
      <Calendar events={events} dateClick={handleDateClick} handleEdit={handleEdit} />
      <ToDoPopupModal
        show={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSave={handleSave}
        date={selectedDate}
        currentTodo={currentTodo}
        categories={categories}
        handleDeleted={() => currentTodo && handleDeleted(currentTodo.id)}
        handleCompleted={() => currentTodo && handleCompleted(currentTodo.id)}
      />
    </div>
  );
};

export default ToDoPage;
