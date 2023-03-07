import { ToastContainer } from "react-toastify";
import NFTsPage from "./pages/NFTsPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <NFTsPage />
            <ToastContainer />
        </>
    );
}

export default App;
