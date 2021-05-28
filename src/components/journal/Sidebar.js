import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import JournalEntries from "./JournalEntries";


const Sidebar = () => {

    const dispatch = useDispatch()
    const { name } = useSelector( (estado) => estado.auth  )

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar_navbar">
                <h3><i className="far fa-moon mt-5"></i> <span>{ name }</span></h3>

                <button className="btn" onClick={ handleLogout }>Logout</button>
            </div>

            <div className="journal__new_entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-1">New entry</p>     
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar;
