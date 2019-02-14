import React from 'react';
import styled from 'styled-components';
import datefns from 'date-fns';

const Header = styled.div`
	display: grid;
	grid-row: 1;
	grid-column: 1 / span 3;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: 1fr;
`;
const Previous = styled.div`
	grid-row: 1;
	grid-column: 1;
	align-self: center;
`;
const PreviousButton = styled.button`
	border: 4px solid rgb(130, 130, 55);
	color: rgb(255, 155, 150);
	margin: 1rem;
	padding: 1rem 2rem;
`;
const Next = styled.div`
	grid-row: 1;
	grid-column: 3;
	align-self: center;
`;
const NextButton = styled(PreviousButton)``;

const Date = styled.div`
	grid-row: 1;
	grid-column: 2;
	align-self: center;
	span {
		text-align: center;
	}
`;

export const CalendarHeader = ({ previous, current, next }) => {
	const dateFormat = 'MMMM YYYY';
	return (
		<Header>
			<Previous>
				<PreviousButton onClick={previous.bind(null)}>
					prev
				</PreviousButton>
			</Previous>
			<Date className="col col-center">
				<span>{datefns.format(current, dateFormat)}</span>
			</Date>
			<Next onClick={next.bind(null)}>
				<NextButton>next</NextButton>
			</Next>
		</Header>
	);
};
