import { css } from "@emotion/css";
import { IStyles } from "../../app/Interfaces/StyleSheet.Interface";

export const styles:IStyles = {
    card: {
        background: "red",
    }
};

export const classes = {
    card: css(`
        background: red;
        color: white;
    `),
};