import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


function Root() {
  return (
    <>
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-3xl text-center font-bold underline">Crud with Redux Tolkit</h1>
      <Outlet></Outlet>
    </div>
      <Toaster />
    </>
  )
}

export default Root;
