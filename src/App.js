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
import AllTasks from "./components/BarsPopup/AllTasks";
import AllMembers from "./components/BarsPopup/AllMembers";
import AllAppointments from "./components/BarsPopup/AllAppointments";
import MyTasks from "./components/Tasks/MyTasks";
import { auth } from "./components/Firebase";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]',
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  const addFavicon = () => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/path/to/favicon.ico";
    document.head.appendChild(link);
  };

  useEffect(() => {
  document.title = "Nawiri by Carecall";
    addFavicon();

  }, []);

  return (
    <Routes>
      <Route path="/" element={<LeftSideBarClinicalInfor />} />
      <Route path="/new" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<EmailSignup />} />
      <Route path="/email/login" element={<EmailLogin />} />
      <Route path="/all/tasks" element={<AllTasks />} />
      <Route path="/all/members" element={<AllMembers />} />
      <Route path="/all/appointments" element={<AllAppointments />} />
      <Route path="/mytasks" element={<MyTasks  />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
export default App;
