import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router";
import { UserProvider } from "./app/providers/UserProvider/UserProvider";

function App() {
  return (

      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  );
}

export default App;
