import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
const MainPage = lazy(() => import("../../pages/MainPage"));
const ChatPage = lazy(() => import("../../pages/ChatPage"));
const CurrentChat = lazy(() => import("../../pages/ChatPage/CurrentChat"));
const OfferPage = lazy(() => import("../../pages/MainPage/Offer"));
const ReportPage = lazy(() => import("../../pages/ReportPage"));
const CreateOfferPage = lazy(() => import("../../pages/CreateOfferPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
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
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/create-offer",
    element: <CreateOfferPage />,
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
]);
```
