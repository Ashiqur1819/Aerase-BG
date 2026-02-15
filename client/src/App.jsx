import React from 'react'
import AppRoutes from './router/AppRoutes'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='min-h-screen bg-slate-50'>
        <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
