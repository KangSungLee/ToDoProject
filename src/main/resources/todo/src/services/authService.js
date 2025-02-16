import axios from 'axios';

// 회원가입
const User_API_URL = 'http://localhost:8080/todo/user';

export const signup = async (userName, email, password) => {
  try {
    const response = await axios.post(User_API_URL, {
      userName,
      email,
      password,
    });
    return response.data;  
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);  
    } else {
      throw new Error('회원가입 실패');  
    }
  }
};

// 로그인
export const login = async (email, password) => {
  try {
    const response = await axios.post(User_API_URL + '/login', { email, password });
    const token = response.data.token;

    // 받은 토큰을 localStorage에 저장
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiry', Date.now() + 3600000);
    
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error('로그인 실패');
    }
  }
};

// 할 일 목록 가져오기
const ToDoList_API_URL = 'http://localhost:8080/todo/todos';


export const getTodos = async (userToken) => {
  try {
    const response = await axios.get(ToDoList_API_URL, {
      params: { userToken }
    });    
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// 할 일 추가
export const addTodo = async (userToken, categoryId, title, description, status, due_date, priority) => {
  try {
    const response = await axios.post(ToDoList_API_URL, {
      userToken,
      categoryId,
      title,
      description,
      status,
      due_date,
      priority
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// 할 일 수정
export const updateTodo = async (id, updatedTodo) => {
  console.log(id);
  console.log(updatedTodo);
  try {
    const { title, description, category, priority, status, dueDate  } = updatedTodo;
    const response = await axios.put(ToDoList_API_URL, {
      id,
      title,
      description,
      categoryId: category,
      priority,
      status,
      due_date: dueDate
    });
    return response.data; 
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// 할 일 삭제 함수
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${ToDoList_API_URL}?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// 카테고리 목록 가져오기
const CategoryList_API_URL = 'http://localhost:8080/todo/categorys';

export const getCategorys = async () => {
  try {
    const response = await axios.get(CategoryList_API_URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
