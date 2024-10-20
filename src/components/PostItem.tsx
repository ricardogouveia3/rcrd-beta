type PostsItemProps = {
  title: string,
  description: string,
  link: string,
  imgSrc: string,
  imgAlt?: string
};

export default function PostsItem({ title, description, link, imgSrc, imgAlt = `Auto generated description: ${title}` }: Readonly<PostsItemProps>) {
  return (
    <article>
      <a href={link} target="_blank" className="flex flex-col items-center rounded-lg overflow-hidden md:flex-row w-full md:h-32 border bg-gray-50 dark:bg-quartz-150 border-quartz-900 hover:border-quartz-850 dark:border-quartz-450 dark:hover:border-quartz-350">
        <img className="object-cover w-full h-48 md:w-auto md:max-w-52 md:h-full" src={imgSrc} alt={imgAlt} />
        <div className="flex flex-col justify-center p-4 leading-normal py-3 gap-2">
          <h5 className="text-base font-bold text-gray-900 dark:text-white">{title}</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </article>
  );
}

