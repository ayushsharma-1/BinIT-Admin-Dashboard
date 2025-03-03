import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import ContactUS from "./pages/list/ContactUS";
import MailSubsrciption from "./pages/list/MailsSubs";
import NGOData from "./pages/list/NGOData";
import Report from "./pages/list/Report";
import Logout from "./pages/logout/logout";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Single from "./pages/single/Single";

import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./config";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        {user !== null ? (
          <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar />
              <div className="bodyContainer">
                <div className="backing">
                  <div className="widget">
                    <Routes>
                      <Route exact path="/">
                        {/* Protected routes */}
                        <Route exact path="dashboard" element={<Home />} />
                        <Route exact path="logout" element={<Logout />} />
                        <Route exact path="MailSubscription">
                          <Route index element={<MailSubsrciption />} />
                          <Route
                            exact
                            path=":mailsubsid"
                            element={<Single />}
                          />
                        </Route>
                        <Route exact path="Reports">
                          <Route index element={<Report />} />
                          <Route
                            exact
                            path=":reportid"
                            element={<Single />}
                          />
                        </Route>
                        <Route exact path="ContactUs">
                          <Route index element={<ContactUS />} />
                          <Route
                            exact
                            path=":contactid"
                            element={<Single />}
                          />
                        </Route>
                        <Route exact path="NGOdata">
                          <Route index element={<NGOData />} />
                          <Route
                            exact
                            path=":NGOid"
                            element={<Single />}
                          />
                          
                        </Route>
                        </Route>
                        <Route
                          path="*"
                          exact={true}
                          element={<Navigate to="/dashboard" />}
                        />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
