import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import PickersDay from "@mui/lab/PickersDay";
import startOfDay from "date-fns/startOfDay";

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== "selected"
})(({ theme, selected }) => ({
    ...(selected && {
        backgroundColor: "#620043",
        color: theme.palette.common.white,
        "&:hover, &:focus": {
            backgroundColor: "#3E0028"
        },
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%"
    })
}));

export default function CalendarChart() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const d_1 = new Date(year, month, 5, 0, 0, 0, 0);
    const d_2 = new Date(year, month, 15, 0, 0, 0, 0);
    const d_3 = new Date(year, month, 24, 0, 0, 0, 0);

    const testArr = [d_1, d_2, d_3];

    const [values, setValues] = React.useState(testArr);

    const findDate = (dates, date) => {
        const dateTime = date.getTime();
        return dates.find((item) => item.getTime() === dateTime);
    };

    const renderPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!values) {
            return <PickersDay {...pickersDayProps} />;
        }

        const selected = findDate(values, date);

        return (
            <CustomPickersDay
                {...pickersDayProps}
                disableMargin
                selected={selected}
            />
        );
    };

    return (
        
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={values}

                renderDay={renderPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d"
            />
        </LocalizationProvider>
    );
}
