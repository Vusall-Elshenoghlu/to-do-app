import {createUseStyles} from 'react-jss';
import {transition} from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';

const styles = {
    leftMenu: {
        borderRight: `2px solid ${colors.border}`,
        position: 'fixed',
        left: '0',
        top: rem(sizes.leftMenuSpacing),
        width: rem(sizes.leftMenu),
        height: `calc(100vh - ${rem(sizes.leftMenuSpacing)})`,
        backgroundColor: '#F1F2F3',
        padding: `${rem(20)} ${rem(15)}`,
        transition: transition(),

    },
    hide: {transform: `translateX(-${rem(sizes.leftMenu)})`,},
    addProject: {
        marginTop: 'auto',
        paddingTop: rem(15),
        borderTop: `1px dashed ${colors.border}`,

        '& button': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: rem(10),
            padding: `${rem(12)} ${rem(14)}`,
            borderRadius: rem(10),
            border: `1px solid ${colors.border}`,
            backgroundColor: '#fff',
            cursor: 'pointer',

            fontSize: rem(14),
            fontWeight: 500,
            color: colors.text,

            transition: transition(),

            '& svg': {
                fontSize: rem(16),
            },

            '&:hover': {
                backgroundColor: colors.primaryButtonColor,
                color: '#fff',
                borderColor: colors.primaryButtonColor,

                '& svg': {
                    color: '#fff',
                },
            },

            '&:active': {
                transform: 'scale(0.98)',
            },
        },}
};

export const useLeftMenuStyles = createUseStyles(styles);