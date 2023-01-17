import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/NavBar/Home.js'
import NavBar from './Components/NavBar/NavBar.js'
import MakeupIndex from './Pages/Index/IndexMakeup.js'
import PerfumeIndex from './Pages/Index/IndexPerfume.js'
import MakeupShow from  './Pages/Show/ShowMakeup.js'
import PerfumeShow from './Pages/Show/ShowPerfume.js'
import MakeupEdit from  './Pages/Edit/EditMakeup.js'
import PerfumeEdit from './Pages/Edit/EditPerfume.js'
import MakeupNew from './Pages/New/NewMakeup.js'
import PerfumeNew from './Pages/New/NewPerfume.js'
// import UserFavorites from './Pages/UserFavoritesPage.js'
// import TableData from './Components/TableData.js'
import PageNotFound from './Components/Modal.js'


function App() {
  return (
    <div>
      <NavBar />
   
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/makeups" element={<MakeupIndex />}></Route>
        <Route path="/perfumes" element={<PerfumeIndex />}></Route>
        <Route path="/makeups/:id" element={<MakeupShow />}></Route>
        <Route path="/perfumes/:id" element={<PerfumeShow />}></Route>
        <Route path="/makeups/:id/edit" element={<MakeupEdit />}></Route>
        <Route path="/perfumes/:id/edit" element={<PerfumeEdit />}></Route>
        <Route path="/makeups/new" element={<MakeupNew />}></Route>
        <Route path="/perfumes/new" element={<PerfumeNew />}></Route>
        {/* <Route path="/userfavorites" element={<UserFavorites />}></Route>
        <Route path="/tabledata" element={<TableData />}></Route> */}
  
        <Route path="*" element={<PageNotFound />}></Route>
      
      </Routes>
    </div>
  )
}

export default App;
