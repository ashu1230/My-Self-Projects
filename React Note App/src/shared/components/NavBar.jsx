import {NavLink} from 'react-router-dom';
export const NavBar = ()=>{
    return (<div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/add"> Add Note </NavLink>
        <NavLink to="/view-all"> View All </NavLink>
        <NavLink to="/sort-notes">Sort Notes</NavLink>
        <NavLink to="/Search">Search</NavLink>
        
        {/* <NavLink to="/delete"> Delete Notes </NavLink>
        <NavLink to="/view-all"> View All </NavLink>
        <NavLink to="/search"> Search Notes </NavLink> */}
    </div>)
}