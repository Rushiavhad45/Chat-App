import React from 'react'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Chatpage />} />
    <Route path="/login" element={<NavigatorLoginpage />} />
    <Route path="/signup" element={<Signuppage />} />
   </Routes>
  )
}

export default App

