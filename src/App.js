import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./pages/Watch";
import SearchResultsContainer from "./pages/SearchResultsContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/results",
        element: <SearchResultsContainer />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
