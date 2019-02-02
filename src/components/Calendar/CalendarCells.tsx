import React from "react";
import datefns from "date-fns";

export const CalendarCells = ({
	current,
	selected,
	dateSelected,
}: {
	current: Date;
	selected: Date;
	dateSelected: (day: Date) => void;
}) => {
	const monthStart = datefns.startOfMonth(current);
	const monthEnd = datefns.endOfMonth(monthStart);
	const startDate = datefns.startOfWeek(monthStart);
	const endDate = datefns.endOfWeek(monthEnd);

	const dateFormat = "D";
	const rows = [];

	let days = [];
	let day = startDate;
	let formattedDate = "";

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = datefns.format(day, dateFormat);
			const cloneDay = day;
			days.push(
				<div
					className={`col cell ${
						!datefns.isSameMonth(day, monthStart)
							? "disabled"
							: datefns.isSameDay(day, selected)
							? "selected"
							: ""
					}`}
					key={day.toDateString()}
					onClick={dateSelected.bind(null, datefns.parse(cloneDay))}
				>
					<span className="number">{formattedDate}</span>
					<span className="bg">{formattedDate}</span>
				</div>
			);
			day = datefns.addDays(day, 1);
		}
		rows.push(
			<div className="row" key={day.toDateString()}>
				{days}
			</div>
		);
		days = [];
	}
	return <div className="body">{rows}</div>;
};
