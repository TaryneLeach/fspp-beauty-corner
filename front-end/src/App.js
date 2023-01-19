import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/NavBar/Home.js'
import NavBar from './Components/NavBar/NavBar.js'

// INDEX ROUTES
import MakeupIndex from './Pages/Index/IndexMakeup.js'
import PerfumeIndex from './Pages/Index/IndexPerfume.js'
import SkincareIndex from "./Components/Index/SkincareIndex.js"

// SINGLE ITEM ROUTES
import MakeupShow from  './Pages/Show/ShowMakeup.js'
import PerfumeShow from './Pages/Show/ShowPerfume.js'

// EDIT ROUTES
import MakeupEdit from  './Pages/Edit/EditMakeup.js'
import PerfumeEdit from './Pages/Edit/EditPerfume.js'

// NEW ROUTES
import MakeupNew from './Pages/New/NewMakeup.js'
import PerfumeNew from './Pages/New/NewPerfume.js'

import PageNotFound from './Components/Modal.js'


function App() {
  return (
    <div>
      <NavBar />
   
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* INDEX ROUTES */}
        <Route path="/makeups" element={<MakeupIndex />}></Route>
        <Route path="/perfumes" element={<PerfumeIndex />}></Route>
        <Route path="/skincare" element={<SkincareIndex />}></Route>

        {/* SINGLE ITEM ROUTES */}
        <Route path="/makeups/:id" element={<MakeupShow />}></Route>
        <Route path="/perfumes/:id" element={<PerfumeShow />}></Route>

        {/* EDIT ROUTES */}
        <Route path="/makeups/:id/edit" element={<MakeupEdit />}></Route>
        <Route path="/perfumes/:id/edit" element={<PerfumeEdit />}></Route>

        {/* NEW ROUTES */}
        <Route path="/makeups/new" element={<MakeupNew />}></Route>
        <Route path="/perfumes/new" element={<PerfumeNew />}></Route>

  
        <Route path="*" element={<PageNotFound />}></Route>
      
      </Routes>
    </div>
  )
}

export default App;
