import { iconSizeVariants, type IconProps } from ".";

export const PlusIcon = (props: IconProps) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="430"
        height="430"
        fill="none"
        viewBox="0 0 430 430"
        className={iconSizeVariants[props.size]}
      >
        <g stroke-width="18">
          <path
            stroke="#08a88a"
            stroke-linecap="round"
            d="M215 136v158m79-79H136"
          />
          <circle cx="215" cy="215" r="167.5" stroke="#121331" />
        </g>
      </svg>
  );
};
