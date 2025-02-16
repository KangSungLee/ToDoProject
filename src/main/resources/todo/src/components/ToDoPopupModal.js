import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Input from './Input';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { subHours } from 'date-fns';

registerLocale('ko', ko);

const ToDoPopupModal = ({ show, handleClose, handleSave, date, categories = [], currentTodo, handleDeleted, handleCompleted }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  const [status, setStatus] = useState('PENDING');
  const [dueDate, setDueDate] = useState(date ? new Date(date) : new Date());

  // 기존 할 일 불러오기
  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title || '');
      setDescription(currentTodo.extendedProps.description || '');
      setCategory(currentTodo.extendedProps.categoryId || '');
      setPriority(currentTodo.extendedProps.priority || 'MEDIUM');
      setStatus(currentTodo.extendedProps.status || 'PENDING');
      setDueDate(currentTodo._instance.range.start 
        ? subHours(new Date(currentTodo._instance.range.start), 9) : new Date());
    } else {
      setTitle('');
      setDescription('');
      setCategory('');
      setPriority('MEDIUM');
      setStatus('PENDING');
      setDueDate(date ? new Date(date) : new Date());
    }
  }, [currentTodo, date]);

  const handleSaveClick = () => {
    if (!title.trim()) {
      alert('제목을 작성해 주세요!');
      return;
    }

    if (!description.trim()) {
      alert('내용을 작성해 주세요!');
      return;
    }
    if (!currentTodo){
      if (!category.trim()) {
        alert('카테고리를 지정해 주세요!');
        return;
      }
    }

    const updatedTodo = {
      id: currentTodo?.id,
      category,
      title,
      description,
      status,
      dueDate,
      priority
    };
    handleSave(updatedTodo);
  };

  const handleCloseModal = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('MEDIUM');
    setStatus('PENDING');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{currentTodo ? '할 일 수정' : '할 일 추가'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* 날짜 및 시간 선택 */}
        <div className="form-group mb-2">
          <label className="me-2">날짜 및 시간</label>
          <DatePicker
            selected={dueDate}
            onChange={setDueDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            className="form-control"
            locale="ko"
          />
        </div>

        {/* 제목 입력 */}
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="할 일 제목" />
        <div className="mb-2" />

        {/* 설명 입력 */}
        <div className="form-group mb-2">
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="할 일 설명"
          />
        </div>

        {/* 카테고리 선택 */}
        <div className="form-group mb-2">
          <label>카테고리</label>
          <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">카테고리 선택</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* 우선순위 선택 */}
        <div className="form-group mb-3">
          <label>우선순위</label>
          <select className="form-control" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="LOW">🌱 낮음</option>
            <option value="MEDIUM">⚖️ 보통</option>
            <option value="HIGH">🔥 높음</option>
          </select>
        </div>

        {/* 상태 선택 */}
        {currentTodo && (
          <div className="mb-3">
            <label>상태</label>
            <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="PENDING">대기</option>
              <option value="IN_PROGRESS">진행 중</option>
              <option value="COMPLETED">완료</option>
            </select>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer >
        {currentTodo && (
          <div className="me-auto">
            <Button variant="danger" onClick={() => handleDeleted(currentTodo.id)} className="me-2">
              일정취소
            </Button>
            {currentTodo.extendedProps.status =="IN_PROGRESS" &&(
              <Button variant="primary" onClick={() => handleCompleted(currentTodo.id)}>
                일정완료
              </Button>
            )}
          </div>
        )}
        <Button variant="secondary" onClick={handleCloseModal}>
          닫기
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ToDoPopupModal;
