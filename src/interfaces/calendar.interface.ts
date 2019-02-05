interface CalendarState {
	currentMonth: Date;
	selectedDate: Date;
}

export interface CalendarHeaderProps {
	previous: () => void;
	current: Date;
	next: () => void;
}

export interface CalendarCellsProps {
	current: Date;
	selected: Date;
	onDateSelected: (day: Date) => void;
}

export interface CalendarDaysProps {
    currentMonth: Date;
}

export const initialCalendarState = Object.freeze({
	currentMonth: new Date(),
	selectedDate: new Date(),
}) as CalendarState;
