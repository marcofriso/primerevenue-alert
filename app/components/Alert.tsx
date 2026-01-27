"use client";

type AlertProps = {
  title: string;
  body: string;
  showIcon?: boolean;
  showClose?: boolean;
  ctaLabel?: string;
  showCtaIcon?: boolean;
  onCta?: () => void;
  onClose?: () => void;
  role?: "status";
};

const CheckCircleIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </svg>
);

const EyeIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 6l12 12M18 6l-12 12" />
  </svg>
);

export default function Alert({
  title,
  body,
  showIcon = true,
  showClose = true,
  ctaLabel,
  showCtaIcon = true,
  onCta,
  onClose,
  role = "status",
}: AlertProps) {
  return (
    <div
      role={role}
      aria-live="polite"
      className="mx-auto w-full max-w-[792px] rounded-[6px] border border-[#F5C2C7] bg-[#FCECEC] px-6 py-4 text-[#B42318]"
    >
      <div className="flex gap-3">
        {showIcon ? (
          <span className="mt-0.5 text-[#B42318]">
            <CheckCircleIcon />
          </span>
        ) : null}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold leading-6">{title}</h3>
            {showClose ? (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close alert"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[#B42318] transition hover:bg-[#F5C2C7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B42318]"
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>
          <p className="mt-1 text-sm leading-6 text-[#B42318]">{body}</p>
          {ctaLabel ? (
            <button
              type="button"
              onClick={onCta}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#B42318] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#9C1C13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B42318]"
            >
              {showCtaIcon ? <EyeIcon /> : null}
              {ctaLabel}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
