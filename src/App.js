import './App.scss';
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div className="App">
			<Sidebar />

			<Feed />
		</div>
	);
}

export default App;
