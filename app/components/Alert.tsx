"use client";

import { CheckCircleIcon, CloseIcon, EyeIcon } from "./Icons";

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
      className="mx-auto w-full max-w-198 rounded-md border border-orange-400 bg-red-50 p-4 text-pr-sky shadow-sm text-red-800"
    >
      <div className="flex">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-2">
              {showIcon ? (
                <span className="my-auto">
                  <CheckCircleIcon />
                </span>
              ) : null}
              <h3 className="text-md font-semibold leading-normal">{title}</h3>
            </div>
            {showClose ? (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close alert"
                className="inline-flex items-center justify-center rounded-full text-red-800 transition hover:bg-[#F5C2C7] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-0"
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>
          <p className="mt-1.5 mb-3 text-sm leading-normal text-red-800 font-normal">
            {body}
          </p>
          {ctaLabel ? (
            <button
              type="button"
              onClick={onCta}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white leading-normal transition hover:bg-[#9C1C13] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
