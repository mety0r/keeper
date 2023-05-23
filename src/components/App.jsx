import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes";



function App() {
    return(
        <div>
         <Header/>

        {Notes.map( (noteItem)  => {
         return (
            <Note 
             title={noteItem.title}
             content={noteItem.content}
             />
            );
        })}
         <Footer/>
         
         
        </div>
   

    );
}

export default App;