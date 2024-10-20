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
      <a href={link} target="_blank" className="flex flex-col items-center rounded-lg overflow-hidden md:flex-row w-full md:h-32 default-border hover-background">
        <img className="object-cover w-full h-48 md:w-auto md:max-w-52 md:h-full" src={imgSrc} alt={imgAlt} />
        <div className="flex flex-col justify-center p-4 leading-normal py-3 gap-2">
          <h5 className="text-base font-bold default-text-color">{title}</h5>
          <p className="text-sm smooth-text-color">{description}</p>
        </div>
      </a>
    </article>
  );
}

