import { LightningElement } from 'lwc';
import loader from './pako.js';

export default class PakoDemo extends LightningElement {

	connectedCallback() {

		const pako = loader();

		console.log('pako');
		console.log(JSON.parse(JSON.stringify({
			pako,
		})));

		const test = { my: 'super', puper: [456, 567], awesome: 'pako' };
		console.log('test');
		console.log(JSON.parse(JSON.stringify({
			test,
		})));

		const deflated = pako.deflate(JSON.stringify(test));
		console.log('deflated');
		console.log(JSON.parse(JSON.stringify({
			deflated,
		})));
	}
}