import React from "react";
import datefns from "date-fns";
import styled from "styled-components";
import { CalendarHeader } from "../Calendar/CalendarHeader";
import { CalendarDays } from "../Calendar/CalendarDays";
import { CalendarCells } from "../Calendar/CalendarCells";

const CalendarWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr;
	grid-gap: 15px;
`;

export class Calendar extends React.Component {
	state = {
		currentMonth: new Date(),
		selectedDate: new Date(),
	};

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
					prev={this.prevMonth}
					current={this.state.currentMonth}
					next={this.nextMonth}
				/>
				<CalendarDays currentMonth={this.state.currentMonth} />
				<CalendarCells
					current={this.state.currentMonth}
					selected={this.state.selectedDate}
					dateSelected={this.onDateClick}
				/>
			</CalendarWrapper>
		);
	}
}
