import {BrowserRouter,Routes,Route} from "react-router-dom";
import Feed from "./components/Feed";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar"; 
import UpdateForm from "./components/UpdateForm";
import CreateForm from "./components/CreateForm";
const App=()=>{
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000", maxWidth:"100%",height:"100vh"}}>

    <Navbar/>
    <Routes>

      <Route path="/" element={<Feed/>}/>
      <Route path="/update/:id" element={<UpdateForm/>}/>
      <Route path="/create" element={<CreateForm/>}/>
    </Routes>

    </Box>
   
    </BrowserRouter>
  )
}

export default App;