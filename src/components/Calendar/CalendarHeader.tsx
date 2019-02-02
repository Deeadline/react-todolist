import React from "react";
import datefns from "date-fns";

export const CalendarHeader = ({
	prev,
	current,
	next,
}: {
	prev: () => void;
	current: Date;
	next: () => void;
}) => {
	const dateFormat = "MMMM YYYY";
	return (
		<div className="header row flex-middle">
			<div className="col col-start">
				<div className="icon" onClick={prev.bind(null)}>
					chevron_left
				</div>
			</div>
			<div className="col col-center">
				<span>{datefns.format(current, dateFormat)}</span>
			</div>
			<div className="col col-end" onClick={next.bind(null)}>
				<div className="icon">chevron_right</div>
			</div>
		</div>
	);
};
