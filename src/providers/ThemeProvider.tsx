// src/providers/ThemeProvider.tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import { tokens } from '../styles/tokens.css';

// 전역 Ant Design 테마 설정
const globalAntdTheme = {
  token: {
    // === 글로벌 디자인 토큰 매핑 ===
    
    // 컬러 시스템
    colorPrimary: tokens.blue_colors.dn_blue_800,
    colorSuccess: tokens.status_colors.dn_green_200,
    colorWarning: tokens.accent_colors.dn_yellow_100,
    colorError: tokens.status_colors.dn_red_200,
    colorInfo: tokens.accent_colors.dn_skyblue_100,
    
    // 중성 컬러
    colorBgBase: tokens.neutral_gray.dn_white,
    colorBgContainer: tokens.neutral_gray.dn_white,
    colorBorder: tokens.neutral_gray.dn_blue_gray_300,
    colorBorderSecondary: tokens.neutral_gray.dn_blue_gray_200,
    
    // 텍스트 컬러
    colorText: tokens.neutral_gray.dn_blue_gray_900,
    colorTextSecondary: tokens.neutral_gray.dn_blue_gray_700,
    colorTextTertiary: tokens.neutral_gray.dn_blue_gray_500,
    colorTextDisabled: tokens.neutral_gray.dn_blue_gray_400,
    
    // 타이포그래피
    fontFamily: tokens.fontfamilies.pretendard,
    fontSize: parseInt(tokens.body.md_regular.fontSize), // 14px
    fontSizeLG: parseInt(tokens.body.lg_regular.fontSize), // 16px  
    fontSizeSM: parseInt(tokens.body.sm_regular.fontSize), // 12px
    
    // 레이아웃
    borderRadius: 6,
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },
  
  components: {
    // === 컴포넌트별 세부 토큰 ===
    
    Button: {
      fontWeight: tokens.title.md.fontWeight, // Bold
      borderRadius: 6,
      
      // Primary 버튼
      colorPrimary: tokens.blue_colors.dn_blue_600,
      colorPrimaryHover: tokens.blue_colors.dn_blue_500,
      colorPrimaryActive: tokens.blue_colors.dn_blue_700,
      
      // Ghost 버튼
      colorLink: tokens.blue_colors.dn_blue_600,
      colorLinkHover: tokens.blue_colors.dn_blue_500,
    },
    
    Table: {
      headerBg: tokens.neutral_gray.dn_blue_gray_100,
      headerColor: tokens.neutral_gray.dn_blue_gray_700,
      rowHoverBg: tokens.blue_colors.dn_blue_100,
      borderColor: tokens.neutral_gray.dn_blue_gray_300,
    },
    
    Form: {
      labelColor: tokens.neutral_gray.dn_blue_gray_700,
      labelRequiredMarkColor: tokens.status_colors.dn_red_200,
    },
    
    Input: {
      borderRadius: 6,
      colorBorder: tokens.neutral_gray.dn_blue_gray_300,
      colorBorderHover: tokens.blue_colors.dn_blue_400,
      activeBorderColor: tokens.blue_colors.dn_blue_600,
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