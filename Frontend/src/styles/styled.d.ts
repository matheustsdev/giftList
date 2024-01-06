import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            black: string;
            white: string;
            brown: string;
            gray: string;
        }
    }
}