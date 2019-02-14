import React, { Component } from 'react';
import styled from 'styled-components';
import datefns from 'date-fns';

import { CalendarHeader } from '../calendar/calendar-header';
import { CalendarDays } from '../calendar/calendar-days';
import { CalendarCells } from '../calendar/calendar-cells';

const CalendarWrapper = styled.section`
	display: grid;
	width: 600px;
	max-height: 400px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 10% 1fr;
	grid-gap: 15px;
	background-color: red;
`;

export class Calendar extends Component {
	state = {
		currentMonth: new Date(),
		selectedDate: new Date(),
	};

	onDateClick = day => {
		this.setState({
			selectedDate: day,
		});
	};
	nextMonth = () => {
		this.setState({
			currentMonth: datefns.addMonths(this.state.currentMonth, 1),
		});
	};
	prevMonth = () => {
		this.setState({
			currentMonth: datefns.subMonths(this.state.currentMonth, 1),
		});
	};
	render() {
		return (
			<CalendarWrapper>
				<CalendarHeader
					previous={this.prevMonth}
					current={this.state.currentMonth}
					next={this.nextMonth}
				/>
				<CalendarDays currentMonth={this.state.currentMonth} />
				<CalendarCells
					current={this.state.currentMonth}
					selected={this.state.selectedDate}
					onDateSelected={this.onDateClick}
				/>
			</CalendarWrapper>
		);
	}
}
