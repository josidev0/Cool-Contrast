import { css } from "@root/styled-system/css";

export default {
  input: css({
    textStyle: "display-md",
    fontWeight: "500",
    width: "100%",
    "&:focus": {
      outlineColor: "text-primary",
    },
  }),
};
