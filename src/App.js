import "./App.css";
import Paragraph from "./FormComponents/Paragraph";
import InputField from "./FormComponents/InputField";

function App() {
	return (
		<div className='App'>
			<p>Hello</p>
			<Paragraph label='Text' />
			<InputField
				inputName='price'
				inputType='number'
				inputPlaceholder='Set price...'
			/>
		</div>
	);
}

export default App;
