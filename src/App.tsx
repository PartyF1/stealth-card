import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./app/providers/AuthProvider/AuthProvider";
import { router } from "./app/router/router";
import { UserProvider } from "./app/providers/UserProvider/UserProvider";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
