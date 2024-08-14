import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LeftSideBarClinicalInfor from "./pages/LeftSideBarClinicalInfor";
import Homepage from "./components/MemberReg/Homepage";
import EmailLogin from "./components/Logins/EmailLogin";
import EmailSignup from "./components/Logins/EmailSignup";
import Login from "./components/Logins/Login";
import AllTasks from "./components/BarsPopup/AllTasks"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LeftSideBarClinicalInfor />} />
      <Route path="/new" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<EmailSignup />} />
      <Route path="/email/login" element={<EmailLogin />} />
      <Route path="/all/tasks" element={<AllTasks />} />

      <Route path="*" element={<div>Not Found</div>} />


    </Routes>
  );
}
export default App;
