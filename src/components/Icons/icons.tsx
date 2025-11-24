type IconName = "star" | "checkmark";

export function Icons({ name }: { name: IconName }) {
  switch (name) {
    case "star":
      return (
        <svg
          className="starIcon"
          viewBox="0 0 33 33"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
        </svg>
      );
    case "checkmark":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="37"
          viewBox="0 0 31 37"
          fill="none"
        >
          <path
            d="M1.75549 23.532L10.608 32.2627L28.7555 1.2627"
            stroke="#00B11A"
            strokeWidth="5"
          />
        </svg>
      );
  }
}
