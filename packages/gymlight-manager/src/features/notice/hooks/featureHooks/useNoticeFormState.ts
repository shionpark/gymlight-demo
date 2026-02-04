import { useState } from 'react';

interface DateInputs {
  startDate: string;
  endDate: string;
}

export const useNoticeFormState = ({
  initStartDate,
  initEndDate,
}: {
  initStartDate?: string;
  initEndDate?: string;
}) => {
  const [dateInputs, setDateInputs] = useState<DateInputs>({
    startDate: initStartDate || '',
    endDate: initEndDate || '',
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setDateInputs((prev) => ({ ...prev, [name]: value }));
  };

  return {
    dateInputs,
    changeDateInputs: handleDateChange,
  };
};
