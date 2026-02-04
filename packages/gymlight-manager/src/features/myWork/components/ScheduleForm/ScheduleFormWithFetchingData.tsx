import { AuthLoading } from '@/features/auth';
import { ScheduleForm, useScheduleDetails } from '@/features/myWork';
import { getEachDateTimeValuesFromString } from '@/utils';

export interface IScheduleFormWithFetchingDataProps {
  initScheduleId?: number;
}

const ScheduleFormWithFetchingData = ({ initScheduleId }: IScheduleFormWithFetchingDataProps) => {
  const { data: initScheduleData } = useScheduleDetails(initScheduleId as number);

  if (!initScheduleData) {
    return <AuthLoading />;
  }

  const {
    year: startDateYear,
    month: startDateMonth,
    day: startDateDay,
    time: scheduledStartTime,
  } = getEachDateTimeValuesFromString(initScheduleData?.startTime as string);

  const {
    year: endDateYear,
    month: endDateMonth,
    day: endDateDay,
    time: scheduledEndTime,
  } = getEachDateTimeValuesFromString(initScheduleData?.endTime as string);

  return (
    <ScheduleForm
      initMode="view"
      initScheduleId={initScheduleId}
      title={initScheduleData?.title}
      initMemberId={initScheduleData?.memberId}
      memberName={initScheduleData?.memberName}
      memberPhone={initScheduleData?.memberPhone}
      initStatus={initScheduleData?.status}
      description={initScheduleData?.description}
      startDateYear={startDateYear}
      startDateMonth={startDateMonth}
      startDateDay={startDateDay}
      endDateYear={endDateYear}
      endDateMonth={endDateMonth}
      endDateDay={endDateDay}
      scheduledStartTime={scheduledStartTime}
      scheduledEndTime={scheduledEndTime}
    />
  );
};

export default ScheduleFormWithFetchingData;
