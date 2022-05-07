import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import logoImg from "@/public/img/navlead_logo.svg";
import imgQuiltSmSrc from "@/public/img/about_img_quilt_sm.png";
import imgQuiltMdSrc from "@/public/img/about_img_quilt_md.png";
import imgQuiltLgSrc from "@/public/img/about_img_quilt_lg.png";

function ImageCollage(): JSX.Element {
  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth < 320 ? (
        <Image src={logoImg} width="100" height="100" alt="Navlead logo" />
      ) : windowWidth < 1200 ? (
        <Image
          src={imgQuiltSmSrc}
          width="345"
          height="520.5"
          placeholder="blur"
          alt="Small Collage of Navlead's creation process"
        />
      ) : windowWidth < 1918 ? (
        <Image
          src={imgQuiltMdSrc}
          width="772.5"
          height="677.25"
          placeholder="blur"
          alt="Medium Collage of Navlead's creation process"
        />
      ) : (
        <Image
          src={imgQuiltLgSrc}
          width="1507"
          height="961"
          placeholder="blur"
          alt="Large Collage of Navlead's creation process"
        />
      )}
    </>
  );
}

export default ImageCollage;
