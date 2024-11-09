import RootNavigation from './navigators/RootNavigation'

import { Provider } from 'react-redux';
import Store from './redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  )
}

export default App