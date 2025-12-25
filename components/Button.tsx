type ButtonVariant = "cyan" | "purple";

type ButtonProps = {
  variant: ButtonVariant;
  version?: string;
  children: React.ReactNode;
};

export default function Button({ variant, version, children }: ButtonProps) {
  const variantStyles = {
    cyan: {
      bg: "bg-cyan-600",
      hover: "hover:bg-cyan-400",
      versionText: "text-cyan-300",
    },
    purple: {
      bg: "bg-purple-600",
      hover: "hover:bg-purple-400",
      versionText: "text-purple-300",
    },
  };

  const styles = variantStyles[variant];

  return (
    <button
      className={`${styles.bg} ${styles.hover} text-white rounded-full px-10 py-4 text-preset-5 whitespace-nowrap`}
    >
      {children}
      {version && (
        <span className={`${styles.versionText} ml-1`}>{version}</span>
      )}
    </button>
  );
}
