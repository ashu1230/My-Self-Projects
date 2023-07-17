import { Route, Routes } from "react-router-dom"
import { Home } from "../../notes/components/Home"
import { Add } from "../../notes/components/Add"
import { List } from "../../notes/components/List"
import { Sort } from "../../notes/components/Sort"  
import {Search} from "../../notes/components/Search"

export const Main = ()=>{
    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/view-all" element={<List/>}/>
            <Route path="/sort-notes" element={<Sort/>}/>
            <Route path="/Search" element={<Search />} />
        </Routes>
    </>)
}