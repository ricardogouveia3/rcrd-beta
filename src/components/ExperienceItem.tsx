type ExperienceItemProps = {
  jobTitle: string,
  company: string,
  startDate: string,
  endDate?: string
}

export default function ExperienceItem({ jobTitle, company, startDate, endDate = "Present" }: Readonly<ExperienceItemProps>) {
  return (
    <li className="mb-7 ms-4 last:mb-0">
      <div className="absolute w-3 h-3 bg-quartz-l40 rounded-full mt-1.5 -start-1.5 border border-white dark:border-quartz-d80 dark:bg-quartz-d20"></div>
      <h4 className="text-lg/2 font-medium text-gray-900 dark:text-white">{jobTitle} <span className="text-gray-500 font-normal">@</span> {company}</h4>
      <time className="mb-1 text-sm font-normal italic leading-none text-gray-400 dark:text-gray-500">{startDate} - {endDate}</time>
    </li>
  );
}
