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
    <div role={role} aria-live="polite" className="mx-auto max-w-198 px-6 py-4">
      <div className="flex rounded-md outline outline-orange-400 bg-red-50 p-4 text-red-800 gap-3 flex-col">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between">
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
                className="inline-flex items-center justify-center text-red-800 transition hover:bg-red-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600 cursor-pointer"
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>
          <p className="text-sm leading-normal text-red-800 font-normal">
            {body}
          </p>
        </div>
        {ctaLabel ? (
          <button
            type="button"
            onClick={onCta}
            className="w-fit inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white leading-normal transition hover:bg-red-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600 cursor-pointer"
          >
            {showCtaIcon ? <EyeIcon /> : null}
            {ctaLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
