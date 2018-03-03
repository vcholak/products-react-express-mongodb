import { version } from '../../../package.json';
import { Router } from 'express';
import products from './products';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/products', products({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		const swaggerAPI = 'TBD';
		res.json({ version, swaggerAPI });
	});

	return api;
}