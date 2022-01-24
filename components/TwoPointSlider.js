import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { COLORS, FONTS, SIZES } from '../constants';

const TwoPointSlider = (props) => {
    const { values, min, max, prefix, postfix, onValuesChange } = {...props}
    return (
        <MultiSlider
            values={values}
            sliderLength={SIZES.width - (SIZES.padding * 2)-20}
            min={min}
            max={max}
            step={1}
            markerOffsetY={20}
            selectedStyle={{ backgroundColor: COLORS.primary }}
            trackStyle={{ height: 10, borderRadius: 10, backgroundColor: COLORS.lightGray2 }}
            minMarkerOverlapDistance={50}
            customMarker={(e) => {
                return (
                    <View
                        style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <View 
                            style={{ height: 20, width: 20, borderRadius: 10, borderWidth: 3, 
                                borderColor: COLORS.white, backgroundColor: COLORS.primary, ...styles.shadow
                            }}
                        />
                        <Text
                            style={{ marginTop: 5, color: COLORS.darkGray, ...FONTS.body3 }}
                        >
                            {prefix}{e.currentValue} {postfix}
                        </Text>
                    </View>
                )
            }}
            onValuesChange={(val) => onValuesChange(val)}
        />
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 0.1
    }
})

export default TwoPointSlider;
