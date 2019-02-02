import React from "react";
import datefns from "date-fns";

export const CalendarDays = ({ currentMonth }: { currentMonth: Date }) => {
	const dateFormat = "dddd";
	const days = [];

	let startDate = datefns.startOfWeek(currentMonth);

	for (let i = 0; i < 7; i++) {
		days.push(
			<div className="col col-center" key={i}>
				{datefns.format(datefns.addDays(startDate, i), dateFormat)}
			</div>
		);
	}
	return <div className="days row">{days}</div>;
};
