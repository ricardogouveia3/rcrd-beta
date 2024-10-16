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
      <a href={link} target="_blank" className="flex flex-col items-center rounded-lg overflow-hidden md:flex-row w-full md:h-32 border bg-gray-50 dark:bg-quartz-d70 border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30">
        <img className="object-cover w-full h-48 md:w-auto md:h-full" src={imgSrc} alt={imgAlt} />
        <div className="flex flex-col justify-center p-4 leading-normal py-3 gap-2">
          <h5 className="text-base font-bold text-gray-900 dark:text-white">{title}</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </article>
  );
}

