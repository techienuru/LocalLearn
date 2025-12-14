import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentChat from "./pages/Student/Chat/Chat";
import Home from "./pages/Home/Home";
import { CourseList } from "./pages/CourseList/CourseList";
import { CourseDetails } from "./pages/CourseDetails/CourseDetails";
import Signup from "./pages/Signup/Signup";
import { LogIn } from "lucide-react";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course-details" element={<CourseDetails />} />

          {/* AUTH ROUTES */}
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />

          {/* STUDENT ROUTES */}
          {/* <Route path="/student/dashboard" element={} /> */}
          {/* <Route path="/student/course" element={} /> */}
          <Route path="/student/chat" element={<StudentChat />} />
          {/* <Route path="/student/profile" element={} /> */}
          {/* <Route path="*" element={Page404}/> */}

          {/* INSTRUCTOR ROUTES */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
