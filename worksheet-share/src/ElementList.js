import React, { useState, useEffect } from 'react';
import ImageViewer from './ImageViewer';
const ElementList = () => {
	const [elements, setElements] = useState([]);

	useEffect(() => {
		fetch('http://192.168.50.12:8080/elements') // Adjust the URL to your endpoint
			.then((response) => response.json())
			.then((data) => setElements(data))
			.catch((error) => console.error('Error fetching data: ', error));
	}, []);

	return (
		<div>
			<h1>Elements</h1>
			<ul>
				{elements.map((element) => (
					<ImageViewer
						key={element.id}
                        element={element}
					/>
				))}
			</ul>
		</div>
	);
};

export default ElementList;
