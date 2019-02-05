import React from "react";
import styled from "../../utils/theme";
import datefns from "date-fns";

import { CalendarCellsProps } from "../../interfaces/calendar.interface";

const Cell = styled.div``;
const CellBig = styled.span``;
const CellNumber = styled.span``;
const CellWrapper = styled.div``;
const RowCell = styled.div``;

export const CalendarCells = ({
	current,
	selected,
	onDateSelected,
}: CalendarCellsProps) => {
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
				<Cell
					className={`col cell ${
						!datefns.isSameMonth(day, monthStart)
							? "disabled"
							: datefns.isSameDay(day, selected)
							? "selected"
							: ""
					}`}
					key={day.toDateString()}
					onClick={onDateSelected.bind(null, datefns.parse(cloneDay))}
				>
					<CellNumber>{formattedDate}</CellNumber>
					<CellBig>{formattedDate}</CellBig>
				</Cell>
			);
			day = datefns.addDays(day, 1);
		}
		rows.push(
			<RowCell className="row" key={day.toDateString()}>
				{days}
			</RowCell>
		);
		days = [];
	}
	return <CellWrapper>{rows}</CellWrapper>;
};