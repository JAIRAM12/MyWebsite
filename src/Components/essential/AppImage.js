import { Image } from "antd";
import { memo } from "react";

const AppImage = ({ data, style, className, name, lcp = false, ...props }) => {
  const base64 = data?.data || data;
  const src = base64
    ? `data:image/png;base64,${base64}`
    : "/images/logo.jpg";

  if (lcp) {
    return (
      <img
        src={src}
        alt={name}
        style={style}
        className={className}
        fetchpriority="high"
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      style={style}
      className={className}
      preview={false}
      fetchpriority="high"
      decoding="async"
      loading="eager"
      {...props}
    />
  );
};


export default memo(AppImage);
