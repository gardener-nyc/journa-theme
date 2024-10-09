import {component} from 'picoapp';
import {AddressForm} from '@shopify/theme-addresses';
import {loadCountries} from '@shopify/theme-addresses/loader';
import find from 'lodash/find';

const LOCALE = 'en';

export default component((node, ctx) => {
	const {addressId} = node.dataset;

	const display = document.querySelector(
		`.address[data-address-id="${addressId}"]`,
	);
	const formRoot = node.querySelector('.addressForm__form');
	const formContainer = node.querySelector('.addressForm__container');
	const countrySelect = node.querySelector('[name="address[country]"]');
	const provinceSelect = node.querySelector('[name="address[province]"]');
	const closeButton = node.querySelector('.addressForm__close');

	const hashListener = () => {
		const {location} = window;

		if (location.hash === `#address-edit-${addressId}`) {
			if (display) display.classList.add('hidden');
			formContainer.classList.remove('hidden');
		} else {
			if (display) display.classList.remove('hidden');
			formContainer.classList.add('hidden');
		}
	};

	const onClickClose = () => (window.location.hash = '');

	closeButton.addEventListener('click', onClickClose);
	window.addEventListener('load', hashListener);
	window.addEventListener('hashchange', hashListener);

	// Initialize address form
	AddressForm(formRoot, LOCALE, {shippingCountriesOnly: true});

	// Populate current country/province
	loadCountries(LOCALE)
		.then((countries = []) => {
			const country = find(countries, {
				name: countrySelect.getAttribute('value'),
			});

			// Wait for countries to pop into select
			setTimeout(() => {
				if (country) {
					const province = find(country.zones, {
						name: provinceSelect.getAttribute('value'),
					});

					countrySelect.setAttribute('value', country.code);

					const countryOption = countrySelect.querySelector(
						`option[value="${country.code}"]`,
					);

					if (countryOption) {
						countryOption.selected = true;
					}

					countrySelect.dispatchEvent(new Event('change'));

					if (province) {
						provinceSelect.setAttribute('value', province.code);

						const provinceOption = provinceSelect.querySelector(
							`option[value="${province.code}"]`,
						);

						if (provinceOption) {
							provinceOption.selected = true;
						}
					}
				}
			}, 1000);
		})
		.catch(error => {
			console.log(error);
		});

	return () => {
		closeButton.removeEventListener('click', onClickClose);
		window.removeEventListener('load', hashListener);
		window.removeEventListener('hashchange', hashListener);
	};
});
