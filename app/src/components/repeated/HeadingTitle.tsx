interface HeadingTitleProps {
  children: React.ReactNode;
}

const HeadingTitle = ({ children }: HeadingTitleProps) => {
  return <p className="text-3xl font-bold pt-[110px]">{children}</p>;
};
export default HeadingTitle;
