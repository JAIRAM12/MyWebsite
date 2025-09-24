import { Image } from "antd";

const AppImage = ({ data, style, className, name, ...props }) => {
  const base64 = data?.data || data;

  const src = base64
    ? `data:image/png;base64,${base64}`
    : "/images/logo.jpg";

  return (
    <Image
      src={src}
      alt={name}
      style={style}
      className={className}
      preview={false}
      {...props}
    />
  );
};

export default AppImage;
