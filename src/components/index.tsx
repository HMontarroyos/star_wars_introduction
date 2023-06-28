import { lazy } from "react";

import Cursor from "./Cursor"
const Header = lazy(async () => await import("./Header"));
const StarsBackground = lazy(async () => await import("./StarsBackground"));
const Loading = lazy(async () => await import("./Loading"));

export { Cursor, Loading, Header, StarsBackground };
