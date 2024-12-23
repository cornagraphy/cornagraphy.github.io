import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { mockTrades } from './data/mockData'

function App() {
  const [trades, setTrades] = useState(mockTrades)
  const [currentView, setCurrentView] = useState('dashboard')

  const handleAddTrade = (newTrade) => {
    setTrades([...trades, { ...newTrade, id: Date.now() }])
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar trades={trades} onAddTrade={handleAddTrade} />
        <Dashboard 
          trades={trades} 
          setTrades={setTrades}
          currentView={currentView} 
        />
      </div>
    </div>
  )
}

export default App
