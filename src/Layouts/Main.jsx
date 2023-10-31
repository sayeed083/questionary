import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <h1 className="text-2xl text-sky-200 text-center mt-40">Hello World</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;