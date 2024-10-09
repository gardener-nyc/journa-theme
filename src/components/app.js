import {picoapp} from 'picoapp';

import addressFormDelete from './address-form-delete';
import addressFormNew from './address-form-new';
import addressFormEdit from './address-form-edit';
import login from './login';
import newsletter from './newsletter';

const state = {};

const components = {
	addressFormDelete,
	addressFormEdit,
	addressFormNew,
	newsletter,
	login,
};

export default picoapp(components, state);
