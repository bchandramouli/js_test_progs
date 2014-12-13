#!/usr/bin/env node --debug

var parsed_cara_data = require('./cara_crawl_dec_1_2014.json');

var stateArr = [ ];

var stateRec = {"state": "dummy",
                "child_avail_sn": 0,
                "child_avail_n": 0,
                "parents_waiting": 0,
                "p_c": 0 };

//console.log(parsed_cara_data.data);

function state_record (rec) {
	this.state = rec.state;
	this.child_avail_n = rec.child_avail_n;
	this.child_avail_sn = rec.child_avail_sn;
	this.parents_waiting = rec.parents_waiting;
	this.p_c = rec.p_c;
}

parsed_cara_data.data.forEach(function (record) {
	if (stateRec.state !== record.state[0]) {

		//console.log(stateRec);
		
		/* Save the previous state */
		stateArr.push(new state_record(stateRec));

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

stateArr.push(new state_record(stateRec));
//console.log(stateRec);

console.log(stateArr);

var min_pc = 10000;
var min_state = {};
stateArr.forEach(function (element) {
	if ((min_pc > element.p_c) && (element.p_c != 0)) {
		min_pc = element.p_c;
		min_state = element;
	}
});

console.log("min_pc: ", min_pc, "min_state: ", min_state);

// Rajasthan, Chhatisgarh, Gujarat, Uttar Pradesh, ...