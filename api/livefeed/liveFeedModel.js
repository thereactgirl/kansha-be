const db = require('../../data/dbConfig');

function getOrgRecognitions(org_name) {
	return db
		.select(
			's.*',
			'i.*',
			'r.last_name as recipient_last',
			'r.first_name as recipient_first',
			'r.profile_picture as recipient_picture'
		)
		.from('Recognition as i')
		.join('Users as s', 'i.sender', '=', 's.id')
		.join('Users as r', 'i.recipient', '=', 'r.id')
		.where('s.org_name', '=', org_name)
		.orderBy('i.date', 'desc')
		.limit(25);
}


module.exports = {
	getOrgRecognitions,
};
