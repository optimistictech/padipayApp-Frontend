export const Section = ({ children, className, ...otherProps }) => {
  return (
    <section
      className={`max-w-[1400px] mx-auto px-10 ${className}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};
