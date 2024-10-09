import {component} from 'picoapp';

export default component((node, ctx) => {
	const onSubmit = event => {
		event.preventDefault();

		const shouldDelete = confirm('Deleting an address cannot be undone.');

		if (shouldDelete) {
			node.submit();
		}

		return false;
	};

	node.addEventListener('submit', onSubmit);

	return () => {
		node.removeEventListener('submit', onSubmit);
	};
});