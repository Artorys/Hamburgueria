import {createRoot} from "react-dom/client"
import App from "./components"
import Reset from "./assets/styles/reset"
import Components from "./assets/styles/components"

const root = createRoot(document.querySelector("#root"))

root.render(
<>
<Reset></Reset>
<Components></Components>
<App></App>
</>
)