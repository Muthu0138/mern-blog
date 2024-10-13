import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
import DashPosts from "../components/DashPosts.jsx";
import DashUsers from "../components/DashUsers.jsx";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromUrl = urlParams.get("tab");
    if (tabfromUrl) {
      setTab(tabfromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />   {/* Sidebar */}
      </div>
      
      {tab === "profile" && <DashProfile />}  {/* profile... */}
      {tab === "posts" && <DashPosts />}    {/* posts... */}
      {tab === 'users' && <DashUsers />}    {/* users */}
    </div>
  );
}
