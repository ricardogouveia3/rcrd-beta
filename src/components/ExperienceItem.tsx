type ExperienceItemProps = {
  jobTitle: string,
  company: string,
  startDate: string,
  endDate?: string
}

const ExperienceItem = ({ jobTitle, company, startDate, endDate }: Readonly<ExperienceItemProps>) => {
  const experienceStyle = endDate ? 'opacity-60 text-sm lg:text-base line-through' : 'text-base lg:text-lg';

  return (
    <li className="mb-4 lg:mb-7 ms-4 last:mb-0">
      <div className="absolute w-3 h-3 bg-quartz-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-quartz-100 dark:bg-quartz-400" />

      <h4 className={`font-medium text-quartz-300 dark:text-white  ${experienceStyle}`}>
        {jobTitle}
        <span className="text-quartz-700 dark:text-quartz-600 font-normal">&nbsp;@&nbsp;</span>
        {company}
      </h4>

      <time className="mb-1 text-sm font-normal italic leading-none text-quartz-700 dark:text-quartz-600">
        {startDate} - {endDate ?? 'Present'}
      </time>
    </li>
  );
}

export default ExperienceItem;
