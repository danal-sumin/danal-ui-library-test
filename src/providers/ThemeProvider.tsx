// src/providers/ThemeProvider.tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import { tokens } from '../styles/tokens.css';

const dds_tokens = tokens.dds_tokens_default;

// 전역 Ant Design 테마 설정
const globalAntdTheme = {
  token: {
    // === 글로벌 디자인 토큰 매핑 ===
    
    // 컬러 시스템
    colorPrimary: dds_tokens.color.blue_colors.dn_blue_800,
    colorSuccess: dds_tokens.color.status_colors.dn_green_200,
    colorWarning: dds_tokens.color.accent_colors.dn_yellow_100,
    colorError: dds_tokens.color.status_colors.dn_red_200,
    colorInfo: dds_tokens.color.accent_colors.dn_skyblue_100,

    // 중성 컬러
    colorBgBase: dds_tokens.color.neutral_gray.dn_white,
    colorBgContainer: dds_tokens.color.neutral_gray.dn_white,
    colorBorder: dds_tokens.color.neutral_gray.dn_blue_gray_300,
    colorBorderSecondary: dds_tokens.color.neutral_gray.dn_blue_gray_200,

    // 텍스트 컬러
    colorText: dds_tokens.color.neutral_gray.dn_blue_gray_900,
    colorTextSecondary: dds_tokens.color.neutral_gray.dn_blue_gray_700,
    colorTextTertiary: dds_tokens.color.neutral_gray.dn_blue_gray_500,
    colorTextDisabled: dds_tokens.color.neutral_gray.dn_blue_gray_400,
    
    // 타이포그래피
    fontFamily: dds_tokens.typography.fontfamily.pretendard,
    fontSize: parseInt(dds_tokens.typography.fontsize.dn_font_size_xs), // 14px
    fontSizeLG: parseInt(dds_tokens.typography.fontsize.dn_font_size_md), // 16px
    fontSizeSM: parseInt(dds_tokens.typography.fontsize.dn_font_size_xxs), // 12px

    // 레이아웃
    borderRadius: parseInt(dds_tokens.radius.dn_radius_md), // 6px
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },
  
  components: {
    // === 컴포넌트별 세부 토큰 ===
    
    Button: {
      fontWeight: dds_tokens.typography.fontweights.dn_font_weight_bold, // Bold
      borderRadius: parseInt(dds_tokens.radius.dn_radius_md), //6

      // Primary 버튼
      colorPrimary: dds_tokens.color.blue_colors.dn_blue_600,
      colorPrimaryHover: dds_tokens.color.blue_colors.dn_blue_500,
      colorPrimaryActive: dds_tokens.color.blue_colors.dn_blue_700,
      
      // Ghost 버튼
      colorLink: dds_tokens.color.blue_colors.dn_blue_600,
      colorLinkHover: dds_tokens.color.blue_colors.dn_blue_500,
    },
    
    Table: {
      headerBg: dds_tokens.color.neutral_gray.dn_blue_gray_100,
      headerColor: dds_tokens.color.neutral_gray.dn_blue_gray_700,
      rowHoverBg: dds_tokens.color.blue_colors.dn_blue_100,
      borderColor: dds_tokens.color.neutral_gray.dn_blue_gray_300,
    },
    
    Form: {
      labelColor: dds_tokens.color.neutral_gray.dn_blue_gray_700,
      labelRequiredMarkColor: dds_tokens.color.status_colors.dn_red_200,
    },
    
    Input: {
      borderRadius: parseInt(dds_tokens.radius.dn_radius_md),
      colorBorder: dds_tokens.color.neutral_gray.dn_blue_gray_300,
      colorBorderHover: dds_tokens.color.blue_colors.dn_blue_400,
      activeBorderColor: dds_tokens.color.blue_colors.dn_blue_600,
    }
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => (
  <ConfigProvider theme={globalAntdTheme}>
    {children}
  </ConfigProvider>
);