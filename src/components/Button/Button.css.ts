import { style, styleVariants} from "@vanilla-extract/css"
import { tokens } from "../../styles/tokens.css";

const dds_tokens = tokens.dds_tokens_default;

export const button = style({
    backgroundColor: dds_tokens.color.blue_colors.dn_blue_600,
    color: dds_tokens.color.neutral_gray.dn_white,
    padding: '15px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',    
})

export const variants = styleVariants({
    primary: {
        backgroundColor: dds_tokens.color.blue_colors.dn_blue_700,
        color: dds_tokens.color.neutral_gray.dn_white,
    },
    secondary: {
        backgroundColor: dds_tokens.color.blue_colors.dn_blue_600,
        color: dds_tokens.color.neutral_gray.dn_white,
    },
    outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${dds_tokens.color.neutral_gray.dn_blue_gray_600}`,
        color: dds_tokens.color.neutral_gray.dn_blue_gray_600,
    },
})