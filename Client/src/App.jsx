import React from 'react'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Routes/Login'
import Register from './Routes/Register'
import Addincome from './Components/IncomeComponent/Addincome'
import Addbudget from './Components/Addbudget'
import Addexpense from './Components/expensecomponent/Addexpense'
import { IncomeProvider } from './Context/Income Context/incomeContext'
import { ExpenseProvider } from './Context/Expense Context/expenseContext'
import Navbar from './Components/navBar'
import Footer from './Components/footer'

// import PrivateRoute from './Components/Protected Route/PrivateRoute'

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }
  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/income',
          element: <Addincome />
        },
        {
          path: '/expense',
          element: <Addexpense />
        },
        {
          path: '/budget',
          element: <Addbudget />,
        },

      ]
    },

    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },

  ])
  return (
    <>
      <ExpenseProvider>
        <IncomeProvider>
          <RouterProvider router={router} />
        </IncomeProvider>
      </ExpenseProvider>
    </>
  )
}

export default App
