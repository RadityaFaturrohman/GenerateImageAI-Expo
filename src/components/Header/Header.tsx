import React from 'react'
import { Image, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import { COLORS, TEXT, icons } from '../../utils'

import styles from './HeaderStyles';
import { JsxElement } from 'typescript';

type HeaderProps = {
  title?: string,
  leftButton?: React.ReactNode,
  rightButton?: React.ReactNode,
  cusLeftPadding?: boolean,
  cusRightPadding?: boolean,
  showCredits?: boolean,
  showButtonBg?: boolean,
}

function Header({ title, leftButton, rightButton, cusLeftPadding, cusRightPadding, showCredits, showButtonBg }: HeaderProps) {
  return (
    <View style={[styles.headerContainer, {position: 'relative'}]}>
        
        <View>
          <TouchableHighlight>
              {showButtonBg ? (
                <View style={[styles.buttonContainer]}>
                  {leftButton} 
                </View>
              ) : (
                <>
                  {leftButton}
                </>
              )}
            </TouchableHighlight>

          <Text style={[styles.appLogo]}>
            {title != 'Ionbit' ? (
            <Text>{title}</Text> 
            ) : (
              <>
                <Text style={{color: COLORS.primary()}}>Ion</Text>
                <Text style={{color: COLORS.white()}}>bit</Text>
              </>  
            )}

          </Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', gap: 14}}>
          {showCredits ? (
            <TouchableOpacity style={[styles.creditContainer]}>
              <Image
                style={{width: 12, height: 12}}
                source={icons.credit}
              />

              <Text style={[styles.creditCounter]}>5</Text>
            </TouchableOpacity>
          ) : (
           <></> 
          )}

          <TouchableHighlight>
            {showButtonBg ? (
              <View style={[styles.buttonContainer]}>
                {rightButton} 
              </View>
            ) : (
              <>
                {rightButton}
              </>
            )}
          </TouchableHighlight>
        </View>
    </View>
  )
}

export default Header