import React from "react";
import datefns from "date-fns";
import { CalendarHeader } from "../Calendar/CalendarHeader";
import { CalendarDays } from "../Calendar/CalendarDays";
import { CalendarCells } from "../Calendar/CalendarCells";

class Calendar extends React.Component {
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
			<div className="calendar">
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
			</div>
		);
	}
}

export default Calendar;
