import React from "react";//
import { differenceInDays, differenceInHours, parseISO } from "date-fns";
import { getDayCaption, getHoursCaption } from '../utilities/utils';
import DateTime from '../components/DateTime';

function dateOperator(value) {
    const issueDate = parseISO(value);
    const difHours = Math.abs(differenceInHours(issueDate, Date.now()));
    const difDays = Math.abs(differenceInDays(issueDate, Date.now()));
    if (difHours < 1)
        return 'меньше часа назад';
    if (difHours < 24)
        return `${difHours} ${getHoursCaption(difHours)} назад`;
    return `${difDays} ${getDayCaption(difDays)} назад`;
}

function wrapper(InitialComponent, operator) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                date: operator(this.props.date),
            };
        }

        render() {
            return (
                <InitialComponent {...this.props} date={this.state.date} />)
        }
    }
}

const DateTimePretty = wrapper(DateTime, dateOperator);

export default DateTimePretty;
