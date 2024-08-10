import React, { useState } from 'react';
import Root from './Root/Root.jsx';
import Books from './pages/Books/Books.jsx'
import SignUp from './pages/SignUp/signup.jsx';
import SignIn from './pages/SignIn/signin.jsx';
import ManageFees from './pages/ManageFees';
import StudentsList from './pages/ShowingStudent/StudentsList.jsx'; // Adjust the import path as necessary
import PaymentHistory from './pages/PaymentHistory';
import Forgot from './pages/SignIn/forget.jsx';
import Protectrouters from './componets/protectrouters.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddStudents from './pages/AddStudent/AddStudents.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import ShowingBooks from './pages/ShowingB/ShwoingB.jsx';
import Navbar from './componets/Navbar.jsx';
import ContactPage from './pages/contact/contact.jsx';
import SearchBar from './pages/Home/SearchBar.jsx';
import BookList from './pages/Home/BookList';
import BookDetail from './pages/Home/BookDetail';
import LendBook from './pages/LendBook';
import BorrowedBooks from './pages/BorrowedBooks';
import Addbooks from './pages/Addbooks/AddBook.jsx';
import Students from './pages/Students/Students.jsx';
import axios from 'axios';
import './App.css';
export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: query },
    });
    setBooks(response.data.items);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/Forgot",
          element: <Forgot />
        },
        {
          path: "/SignIN",
          element: <SignIn />
        },
        {
          path: "/AddStudents",
          element: <AddStudents />
        },
        {
          path: "/lendBook",
          element: <LendBook />
        },
        {
          path: "/borrowedBooks",
          element: <BorrowedBooks />
        },
        {
          path: "/studentsList",
          element: <StudentsList />
        },
        {
          path: "/manage-fees",
          element: <ManageFees />
        },
        {
          path: "/payment-history",
          element: <PaymentHistory />
        },
        {
          path: "/Books",
          element: <Books />
        },
        {
          path: "/Students",
          element: <Students />
        },
        {
          path: "/ShowingBooks",
          element: <ShowingBooks />
        },
        {
          path: "/AddStudents",
          element: <AddStudents />
        },
        {
          path: "/SignUp",
          element: <SignUp />,
        },
        {
          path: "/Contact",
          element: <ContactPage />,
        },
        {
          path: "/Addbooks",
          element: <Addbooks />,
        },
        {
          path: "/",
          element: (
            <div>
              <SearchBar onSearch={handleSearch} />
              <BookList books={books} onSelectBook={handleSelectBook} />
              <BookDetail book={selectedBook} />
            </div>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}
