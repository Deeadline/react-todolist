import React from 'react';
import styled from 'styled-components';
import datefns from 'date-fns';

const Days = styled.div`
	grid-column: 1 / span 3;
	grid-row: span 2;
	display: flex;
	justify-content: space-around;
`;

const Day = styled.div``;

export const CalendarDays = ({ currentMonth }) => {
	const dateFormat = 'dddd';
	const days = [];

	let startDate = datefns.startOfWeek(currentMonth);

	for (let i = 0; i < 7; i++) {
		days.push(
			<Day key={i}>
				{datefns.format(datefns.addDays(startDate, i), dateFormat)}
			</Day>
		);
	}
	return <Days className="days row">{days}</Days>;
};
