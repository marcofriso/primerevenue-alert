import Image from "next/image";

const CheckCircleIcon = () => (
  <Image
    src="/check-circle.svg"
    alt=""
    aria-hidden="true"
    width={16}
    height={16}
  />
);

const EyeIcon = () => (
  <Image src="/eye.svg" alt="" aria-hidden="true" width={12} height={12} />
);

const CloseIcon = () => (
  <Image src="/x.svg" alt="" aria-hidden="true" width={12} height={9} />
);

export { CheckCircleIcon, EyeIcon, CloseIcon };
