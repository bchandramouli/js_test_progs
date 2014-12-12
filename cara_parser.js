#!/usr/bin/env node --debug

var parsed_cara_data = require('./cara_crawl_dec_1_2014.json');

var stateArr = [ ];

var stateRec = {"state": "foo",
                "child_avail_sn": 0,
                "child_avail_n": 0,
                "parents_waiting": 0,
                "p_c": 0 };

parsed_cara_data.data.forEach(function (record) {
	if (stateRec.state !== record.state[0]) {

		console.log(stateRec);
		
		/* Save the previous state */
		stateArr.push(stateRec);

        /* New state Found */
		
		stateRec.state = record.state[0];
		stateRec.child_avail_sn = 0;
		stateRec.child_avail_n = 0;
		stateRec.parents_waiting = 0;
	}

	stateRec.child_avail_sn += parseInt(record.child_0_1_sn) + parseInt(record.child_2_3_sn);
	stateRec.child_avail_n += parseInt(record.child_0_1_n) + parseInt(record.child_2_3_n);
	stateRec.parents_waiting += parseInt(record.parent_no_choice) + parseInt(record.parent_0_1) + parseInt(record.parent_2_3);

	stateRec.p_c = stateRec.parents_waiting - stateRec.child_avail_n - stateRec.child_avail_sn;
});

stateArr.push(stateRec);
console.log(stateRec);

//console.log(stateArr);

// Rajasthan, Chhatisgarh, Gujarat, Uttar Pradesh, ...