import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {GlobalStyles} from "./styles/style.ts";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>

        <GlobalStyles/>
        <App/>

    </Provider>
)
