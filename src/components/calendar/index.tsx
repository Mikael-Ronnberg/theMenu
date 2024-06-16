"use client";

import {
  INTERVAL,
  RESTAURANT_CLOSING,
  RESTAURANT_OPENING,
} from "@/constants/config";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { add, format } from "date-fns";
import { useState } from "react";
import ReactCalendar from "react-calendar";

type DateType = {
  onlyDate: Date | null;
  dateTime: Date | null;
};

export default function BookingCalendar({}) {
  const [date, setDate] = useState<DateType>({
    onlyDate: null,
    dateTime: null,
  });

  console.log(date.dateTime);

  const getTimes = () => {
    if (!date.onlyDate) return;
    const { onlyDate } = date;
    const startOfDay = add(onlyDate, { hours: RESTAURANT_OPENING });
    const endOfDay = add(onlyDate, { hours: RESTAURANT_CLOSING });
    const interval = INTERVAL;

    const times = [];
    for (let i = startOfDay; i <= endOfDay; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <>
      {date?.onlyDate ? (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {times?.map((time, i) => (
            <GridItem key={`time-${i}`}>
              <Button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </Button>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, onlyDate: date }))
          }
        />
      )}
    </>
  );
}
