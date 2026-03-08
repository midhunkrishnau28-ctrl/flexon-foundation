import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { VisionMission } from "./pages/VisionMission";
import { Services } from "./pages/Services";
import { Achievements } from "./pages/Achievements";
import { Events } from "./pages/Events";
import { Blog } from "./pages/Blog";
import { Donate } from "./pages/Donate";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "vision-mission", Component: VisionMission },
      { path: "services", Component: Services },
      { path: "achievements", Component: Achievements },
      { path: "events", Component: Events },
      { path: "blog", Component: Blog },
      { path: "donate", Component: Donate },
      { path: "contact", Component: Contact },
    ],
  },
]);
