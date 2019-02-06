import React, { Component } from "react";
import styled from "@utils/theme";
import datefns from "date-fns";

import { initialCalendarState } from "@interfaces/calendar.interface";

import { CalendarHeader } from "@components/calendar/calendar-header";
import { CalendarDays } from "@components/calendar/calendar-days";
import { CalendarCells } from "@components/calendar/calendar-cells";

const CalendarWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr;
	grid-gap: 15px;
`;

type State = typeof initialCalendarState;
type Props = {};

export class Calendar extends Component<Props, State> {
	state = initialCalendarState;

	onDateClick = (day: Date) => {
		this.setState({
			selectedDate: day,
		});
	}
	nextMonth = () => {
		this.setState({
			currentMonth: datefns.addMonths(this.state.currentMonth, 1),
		});
	}
	prevMonth = () => {
		this.setState({
			currentMonth: datefns.subMonths(this.state.currentMonth, 1),
		});
	}
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
