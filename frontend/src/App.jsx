import { Routes, Route } from 'react-router'
import Chatpage from './pages/Chatpage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import { useAuthStore } from './store/authStore'

function App() {
  const { authUser, isloading, login } = useAuthStore();
  console.log("auth user", authUser);
  console.log("isloading", isloading);

  
  return (
    <div className ="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">

    <Routes>
     <Route path="/" element={<Chatpage />} />
     <Route path="/login" element={<Loginpage />} />
     <Route path="/signup" element={<Signuppage />} />
    </Routes>
   </div>
  )
}

export default App

