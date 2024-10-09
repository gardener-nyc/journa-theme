import {component} from 'picoapp';
import {AddressForm} from '@shopify/theme-addresses';

export default component((node, ctx) => {
	const formRoot = node.querySelector('.addressForm__form');
	const formContainer = node.querySelector('.addressForm__container');
	const openButton = node.querySelector('.addressForm__open');
	const closeButton = node.querySelector('.addressForm__close');

	const hashListener = () => {
		const {location} = window;

		if (location.hash === '#address-new') {
			formContainer.classList.remove('hidden');
			openButton.classList.add('hidden');
		} else {
			formContainer.classList.add('hidden');
			openButton.classList.remove('hidden');
		}
	};

	const onClickClose = () => (window.location.hash = '');

	closeButton.addEventListener('click', onClickClose);
	window.addEventListener('load', hashListener);
	window.addEventListener('hashchange', hashListener);

	// Initialize address form
	AddressForm(formRoot, 'en', {
		shippingCountriesOnly: true,
		inputSelectors: {
			firstName: '[name="address[first_name]"]',
			lastName: '[name="address[last_name]"]',
			company: '[name="address[company]"]',
			address1: '[name="address[address1]"]',
			address2: '[name="address[address2]"]',
			country: '[name="address[country]"]',
			zone: '[name="address[province]"]',
			postalCode: '[name="address[zip]"]',
			city: '[name="address[city]"]',
			phone: '[name="address[phone]"]',
		},
	});

	return () => {
		closeButton.removeEventListener('click', onClickClose);
		window.removeEventListener('load', hashListener);
		window.removeEventListener('hashchange', hashListener);
	};
});
