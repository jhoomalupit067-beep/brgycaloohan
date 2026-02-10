import { Routes, Route, Navigate } from 'react-router-dom'
import CurfewLogsPage from './pages/CurfewLogsPage'
import BlacklistedPage from './pages/BlacklistedPage'
import ArchivedPage from './pages/ArchivedPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/curfew-logs" replace />} />
      <Route path="/curfew-logs" element={<CurfewLogsPage />} />
      <Route path="/blacklisted" element={<BlacklistedPage />} />
      <Route path="/archived" element={<ArchivedPage />} />
    </Routes>
  )
}

export default App
