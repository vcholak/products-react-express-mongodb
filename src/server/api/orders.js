import resource from 'resource-router-middleware';
import orders from '../model/orders';

export default ({ config, db }) => resource({
	
	mergeParams: true,

	/** Property name to store preloaded entity on `request`. */
	id : 'order',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let order = orders.find( order => order.id===id ),
			err = order ? null : 'Not found';
		callback(err, order);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(orders);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = orders.length.toString(36);
		orders.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ order }, res) {
		res.json(order);
	},

	/** PUT /:id - Update a given entity */
	update({ order, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				order[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ order }, res) {
		orders.splice(orders.indexOf(order), 1);
		res.sendStatus(204);
	}
});