import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentChat from "./pages/Student/Chat/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}

          {/* AUTH ROUTES */}

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
