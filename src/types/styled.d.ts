import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    fonts: {
      text: string;
      display: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      big: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
