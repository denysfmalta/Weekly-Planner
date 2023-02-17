import { Outlet } from "react-router-dom"
import { Header } from "../../components"
import { ActionSection } from "../../components/ActionSection"
import { Board } from "../../components/Board"

export const Dashboard = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <ActionSection />
            <Board />
        </div>
    )
}