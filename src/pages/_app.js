import { Provider } from 'react-redux'
import store from '../../store/store'

import '../components/UI/global.css'


export default function App({Component, pageProps}) {

    return(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
