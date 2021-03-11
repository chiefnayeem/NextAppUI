import React from "react";
import { Sidebar } from "../../layouts/dashboard/Sidebar";

class Dashboard extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <Sidebar />
                Dashboard
            </div>
        )
    }
}
  
export default Dashboard;