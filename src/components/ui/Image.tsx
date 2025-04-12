interface IProps {
  className?: string;
  alt: string;
  imageURL: string;
}

const Image = ({ className, imageURL, alt }: IProps) => {
  return <img className={className} src={imageURL} alt={alt} />;
};

export default Image;
