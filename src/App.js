import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchCard from "./components/SearchCard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchCard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
