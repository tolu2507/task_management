/* eslint-disable prettier/prettier */
export const useGetWeekRange = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const firstDayOfWeek = new Date(today);
  const lastDayOfWeek = new Date(today);

  firstDayOfWeek.setDate(today.getDate() - currentDay); // Set first day of the week
  lastDayOfWeek.setDate(today.getDate() + (6 - currentDay)); // Set last day of the week

  return {
    start: firstDayOfWeek.toISOString().split('T')[0],
    end: lastDayOfWeek.toISOString().split('T')[0],
  };
};
