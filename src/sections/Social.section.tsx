import images from "../assets/images";
import Card from "../components/Card/Card";
import SocialLink from "../components/Buttons/SocialLink";

export default function SocialSection() {
  return (
    <Card classNames="lg:row-span-1 lg:col-span-8 lg:col-start-1 lg:row-start-3 rounded-lg" contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white">Get in touch:</p>
      <div className="flex gap-2 flex-wrap">
        <SocialLink icon={images.logos.bluesky} link="https://bsky.app/profile/rcrd.dev">BlueSky</SocialLink>
        <SocialLink icon={images.logos.instagram} link="https://instagram.com/ricardogouveia3">Instagram</SocialLink>
        <SocialLink icon={images.logos.github} link="https://github.com/ricardogouveia3">Github</SocialLink>
        <SocialLink icon={images.logos.linkedin} link="https://www.linkedin.com/in/ricardogouveia3/">Linkedin</SocialLink>
        <SocialLink icon={images.logos.dribbble} link="https://dribbble.com/ricardogouveia3">Dribbble</SocialLink>
        <SocialLink icon={images.logos.email} link="mailto:me@rcrd.dev">Email</SocialLink>
      </div>
    </Card>
  );
}
