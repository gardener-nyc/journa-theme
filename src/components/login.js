import {component} from 'picoapp';

export default component((node, ctx) => {
	const loginEl = node.querySelector('.account__login');
	const forgotEl = node.querySelector('.account__forgot');

	const hashListener = () => {
		const {location} = window;

		if (location.hash === '#recover') {
			loginEl.classList.add('hidden');
			forgotEl.classList.remove('hidden');
		} else if (location.hash === '#login') {
			loginEl.classList.remove('hidden');
			forgotEl.classList.add('hidden');
		} else {
			loginEl.classList.remove('hidden');
			forgotEl.classList.add('hidden');
		}
	};

	window.addEventListener('hashchange', hashListener);
	hashListener();

	return () => {
		window.removeEventListener('hashchange', hashListener);
	};
});
