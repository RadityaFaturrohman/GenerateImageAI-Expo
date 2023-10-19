const COLORS = {
  // primary colors
  primary: (opa = 1) => `rgba(142, 78, 198, ${opa})`, // #8E4EC6
  warning: (opa = 1) => `rgba(235, 188, 0, ${opa})`, // #EBBC00
  danger: (opa = 1) => `rgba(220, 61, 67, ${opa})`, // #DC3D43
  success: (opa = 1) => `rgba(48, 164, 108, ${opa})`, // #30A46C
  white: (opa = 1) => `rgba(255, 255, 255, ${opa})`, // #fff
  black: (opa = 1) => `rgba(0, 0, 0, ${opa})`, // #000

  // dark mode colors palette
  dark_bg: (opa = 1) => `rgba(17, 18, 23, ${opa})`, // #111217
  dark_text: (opa = 1) => `rgba(217, 217, 217, ${opa})`, // #d9d9d9
  dark_sheetBg: (opa = 1) => `rgba(52, 53, 62, ${opa})`, // #34353E
  dark_secondary: (opa = 1) => `rgba(44, 44, 44, ${opa})`, // #2c2c2c

  // light mode colors palette
  light_bg: (opa = 1) => `rgba(210, 211, 219, ${opa})`, // #D2D3DB
  light_text: (opa = 1) => `rgba(59, 59, 59, ${opa})`, // #3b3b3b
  light_sheetBg: (opa = 1) => `rgba(203, 204, 215, ${opa})`, // #CBCCD7

  // common components colors
  creditcard_bg: (opa = .1) => `rgba(133, 113, 95, ${opa})`, // #85715F
  inactive_tabBar: (opa = 1) => `rgba(179, 179, 179, ${opa})` // #b3b3b3
}

const FONT = {
  light: {
    fontFamily: 'Nunito_Light',
  },
  regular: {
    fontFamily: 'Nunito_Regular',
  },
  medium: {
    fontFamily: 'Nunito_Medium',
  },
  semibold: {
    fontFamily: 'Nunito_Semibold',
  },
  bold: {
    fontFamily: 'Nunito_Bold',
  }
}

const TEXT = {
  header: {
    fontWeight: 'bold',
    fontSize: 18
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 12
  },
  subHeader_semibold: {
    fontWeight: '600',
    fontSize: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 10
  },
  description: {
    fontWeight: '400',
    fontSize: 12
  }
}

const SHADOW = {
  // main screen shadow
  primary: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowOpacity: .5,
    shadowRadius: 4
  }
}

const SPACING = {
  primary: 25
}

export { COLORS, FONT, TEXT, SHADOW, SPACING };