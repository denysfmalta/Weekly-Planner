import { Outlet } from "react-router-dom"
import { Header } from "../../components"


export const Dashboard = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}