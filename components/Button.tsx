import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  // title:string | ''
  icon: string;
  variant: string;
};

export default function Button({ type, icon, variant }: ButtonProps) {
  return (
    <button
      type={type}
      //title={title}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt="" width={20} height={20} />}
    </button>
  );
}
