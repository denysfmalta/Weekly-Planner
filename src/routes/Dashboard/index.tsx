import { Outlet } from "react-router-dom"
import { ActionSection, Header } from "../../components"


export const Dashboard = () => {

    return (
        <div>
            <Header />
            <ActionSection />
            <Outlet />
        </div>
    )
}