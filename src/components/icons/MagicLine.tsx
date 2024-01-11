import type { SVGProps } from "react";
function SvgMagicLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          d="M5.497 3.997A1.225 1.225 0 0 0 4 5.494l1.264 4.79L2.58 14.45c-.508.79.024 1.834.962 1.887l4.946.278 3.132 3.838a1.225 1.225 0 0 0 2.091-.331l1.397-3.6 4.608 4.608a1 1 0 0 0 1.415-1.414l-4.608-4.608 3.599-1.397a1.225 1.225 0 0 0 .331-2.091l-3.838-3.133-.278-4.946a1.225 1.225 0 0 0-1.886-.96L10.287 5.26l-4.79-1.264Zm1.788 6.107L6.273 6.271l3.834 1.011c.332.088.686.032.976-.154l3.333-2.147.223 3.959c.019.343.182.662.448.88l3.072 2.507-3.696 1.435c-.32.124-.574.378-.699.698l-1.435 3.697-2.507-3.072a1.225 1.225 0 0 0-.88-.449l-3.959-.222L7.13 11.08a1.23 1.23 0 0 0 .155-.976"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgMagicLine;
