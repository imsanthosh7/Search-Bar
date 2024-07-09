import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchResults = ({ result }) => {

  // alert message
  const showToastMessage = () => {
    toast(`🌟You clicked on "${result.name}"`, {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "fancy-progress-bar",
     
    });

  };
  return (
    <>
      <div onClick={showToastMessage}>{result.name}
      </div>
      <ToastContainer position="top-right" toastStyle={{
        backgroundColor: "#363636",
        color:"white" 
      }}/>
    </>
  )
}

export default SearchResults