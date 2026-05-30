import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const AuthentificationPage = lazy(() => import("../../pages/AuthPage"));
const MainPage = lazy(() => import("../../pages/MainPage"));
const ChatPage = lazy(() => import("../../pages/ChatPage"));
const CurrentChat = lazy(() => import("../../pages/ChatPage/CurrentChat"));
const OfferPage = lazy(() => import("../../pages/MainPage/Offer"));
const ReportPage = lazy(() => import("../../pages/ReportPage"));
const CreateOfferPage = lazy(() => import("../../pages/CreateOfferPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <AuthentificationPage />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/create-offer",
        element: <CreateOfferPage />,
      },
      {
        path: "/offers",
        element: <MainPage />,
      },
      {
        path: "/offers/:offerId",
        element: <OfferPage />,
      },
      {
        path: "/orders",
        element: <ChatPage />,
        children: [
          {
            path: ":chatId",
            element: <CurrentChat />,
          },
        ],
      },
      {
        path: "/orders/:chatId/report",
        element: <ReportPage />,
      },
      {
        path: "/reports/:reportId",
        element: <ReportPage />,
      },
    ],
  },
]);
