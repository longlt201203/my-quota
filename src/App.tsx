import { ThemeProvider } from "styled-components";
import theme from "./etc/theme";
import { Outlet } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover={false}
            draggable={false}
            theme="light"
            transition={Zoom} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  )
}

export default App
