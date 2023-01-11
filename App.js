import "./styles.css";

//tooltip

export default function App(){
	return (
		<div class_name="App">
			<h1>Hello Code</h1>
			<p title="Hi">tooltip</p>
		</div>
		);
}		


import "./styles.css";

//download

export default function App(){
	const Link = "..."
	return (
		<div class_name="App">
			<h1>Hello Code</h1>
			<a href={link} download>
			Download
			</a>
		</div>
		);
}		


import "./styles.css";

//content Editable

export default function App(){
	return (
		<div class_name="App">
			<h1>Hello Code</h1>
			<p contenteditable="true">
			you can edit me
			</p>
		</div>
		);
}		


import "./styles.css";

//marquee

export default function App(){
	return (
		<div class_name="App">
			<h1>Hello Code</h1>
			<marquee direction="right">
			hey bro i moved
			</marquee>
		</div>
		);
}		
