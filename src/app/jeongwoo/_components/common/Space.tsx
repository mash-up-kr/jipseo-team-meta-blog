interface SpaceProps {
  size: number;
}

const Space = ({ size }: SpaceProps) => {
  return <div className="flex-none" style={{ height: size }} />;
};

export default Space;
