type LocationMapProps = {
  map: {
    imgSrc: string,
    alt: string,
    link: string,
  };
  info: boolean;
};

export default function LocationMap({ map, info = false }: Readonly<LocationMapProps>) {
  const mapStyleIfInfoLoaded = info ? `lg:w-[60%]` : 'lg:w-full max-h-80';

  return (
    <div className={`w-full h-full ${mapStyleIfInfoLoaded} transition-all`}>
      <a href={map.link} target="_blank" className="relative w-full h-full block">
        <div className={`absolute h-full w-full bg-black opacity-0 dark:opacity-40`} />
        <img src={map.imgSrc} alt={map.alt} className="object-cover object-center h-full w-full max-h-40 lg:max-h-full" />
      </a>
    </div>
  );
}
