import { Image } from "antd";
import { memo, useState } from "react";

const AppImage = ({ data, style, className, name, fallback = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
, lcp = false, ...props }) => {
  const base64 = data?.data || data;
  const [imgSrc, setImgSrc] = useState(
    base64 ? `data:image/png;base64,${base64}` : "/images/logo.jpg"
  );

  return (
    <Image
      src={imgSrc}
      alt={name}
      style={style}
      className={className}
      preview={false}
      fetchpriority="high"
      decoding="async"
      loading="eager"
      onError={() => setImgSrc(fallback)}
      {...props}
    />
  );
};

export default memo(AppImage);
