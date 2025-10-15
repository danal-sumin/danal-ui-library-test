import { style, styleVariants} from "@vanilla-extract/css"
import { tokens } from "../../styles/tokens.css";

export const button = style({
    backgroundColor: tokens.blue_colors.dn_blue_600,
    color: tokens.neutral_gray.dn_white,
    padding: '15px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',    
})

export const variants = styleVariants({
    primary: {
        backgroundColor: tokens.blue_colors.dn_blue_700,
        color: tokens.neutral_gray.dn_white,
    },
    secondary: {
        backgroundColor: tokens.blue_colors.dn_blue_600,
        color: tokens.neutral_gray.dn_white,
    },
    outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${tokens.neutral_gray.dn_blue_gray_600}`,
        color: tokens.neutral_gray.dn_blue_gray_600,
    },
})