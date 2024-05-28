{
  /* 
    Enum
  */

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 0;
  const DAYS_ENUM = Object.freeze({ MONDAY: '0', TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Sunday);
  let day: Days = Days.Monday;
  day = Days.Tuesday;
  console.log(day);

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'WednesDay';

  let daysOfWeek: DaysOfWeek = 'WednesDay';
}
