import Image from 'next/image';

export default function ProfileImage(): React.ReactElement {
  return (
    <div className="-mt-16 relative h-full tablet:[grid-area:3/3/4/5] desktop:[grid-area:3/3/4/5]">
      <Image
        src="/ashleysimpson.png"
        alt="Website Author Image"
        width={600}
        height={600}
        priority
        className="object-contain h-[50%] tablet:h-[55%] desktop:h-[65%] w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [clip-path:circle(49%)]"
      />
    </div>
  );
}
