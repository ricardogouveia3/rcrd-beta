export type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
};

export type ExperienceItemProps = {
  jobTitle: string,
  company: string,
  startDate: string,
  endDate?: string
}