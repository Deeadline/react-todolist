import React from "react";
import datefns from "date-fns";
import styled from "@utils/theme";

import { CalendarHeaderProps } from "@interfaces/calendar.interface";

const Header = styled.header`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: auto auto;
`;
const Previous = styled.div`
	grid-row: 1 / span 2;
	align-self: center;
`;
const PreviousButton = styled.button`
	border: 4px solid rgb(130, 130, 55);
	color: rgb(255, 155, 150);
	margin: 1rem;
	padding: 1rem 2rem;
`;

export const CalendarHeader = ({
	previous,
	current,
	next,
}: CalendarHeaderProps) => {
	const dateFormat = "MMMM YYYY";
	return (
		<Header>
			<Previous>
				<PreviousButton className="icon" onClick={previous.bind(null)}>
					chevron_left
				</PreviousButton>
			</Previous>
			<div className="col col-center">
				<span>{datefns.format(current, dateFormat)}</span>
			</div>
			<div className="col col-end" onClick={next.bind(null)}>
				<div className="icon">chevron_right</div>
			</div>
		</Header>
	);
};
