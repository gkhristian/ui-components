import { ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ConfigProvider, type DatePickerProps } from 'antd';
import { type RangePickerProps } from 'antd/lib/date-picker';

import defaultTheme, { type Theme } from '@utils/theme';
import { Icon } from '@components/Icon';
import { withDataId } from '@components/DataId/withDataId';
import { DropdownDatePickerStyles, StyledAntdDatePicker, StyledAntdRangePicker } from '@styles/DatePicker/StyledDatePicker';
import * as datePickerUtils from './datePickerUtils';
import '@styles/styles.css';

type CommonProps = {
    lang?: 'en' | 'bg' | 'br' | 'be' | 'ca' | 'da' | 'de' | 'el' | 'es' | 'fi' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'sl' | 'sv' | 'tr' | 'us' | 'zh';
    dataId?: string;
    'data-testid'?: string;
    theme?: Theme;
    label?: string;
};

export type AntdDatePickerProps = DatePickerProps & CommonProps;

const getLabel = (_label: ReactNode, id: string) => (
    <label htmlFor={id} className='sr-only'>
        {_label}
    </label>
);

export const AntdDatePicker = withDataId(({ lang = 'en', theme = defaultTheme, dataId, format, label, ...props }: AntdDatePickerProps) => {
    const th = useContext(ThemeContext) || theme;
    const id = `antd-date-picker_${Date.now()}`;
    return (
        <>
            {getLabel(label, id)}
            <ConfigProvider
                locale={datePickerUtils.getLocale(lang ?? 'en')}
                theme={{
                    token: {
                        colorPrimary: th.primary,
                    },
                }}
            >
                <DropdownDatePickerStyles theme={th} />
                <StyledAntdDatePicker
                    {...props}
                    id={id}
                    data-id={dataId}
                    data-testid='antd-date-picker'
                    format={format ?? 'DD/MM/YYYY'}
                    nextIcon={<Icon name='chevron_right_l' size={10} color='gray600' ariaLabel='Next page' />}
                    prevIcon={<Icon name='chevron_left_l' size={10} color='gray600' ariaLabel='Previous page' />}
                    suffixIcon={<Icon name='calendar_blank' size={18} color='gray600' ariaLabel='Calendar icon' />}
                    theme={th}
                    // role='dialog'
                    //aria-labelledby={dataId}
                    aria-disabled={props.disabled || false}
                />
            </ConfigProvider>
        </>
    );
}, 'datepicker');

export type AntdRangePickerProps = RangePickerProps & CommonProps;

export const AntdRangePicker = withDataId(({ lang = 'en', theme = defaultTheme, dataId, label, format, ...props }: AntdRangePickerProps) => {
    const th = useContext(ThemeContext) || theme;
    const id = `antd-date-picker_${Date.now()}`;
    return (
        <>
            {getLabel(label, id)}
            <ConfigProvider
                locale={datePickerUtils.getLocale(lang ?? 'en')}
                theme={{
                    token: {
                        colorPrimary: th.primary,
                    },
                }}
            >
                <DropdownDatePickerStyles theme={th} />
                <StyledAntdRangePicker
                    {...props}
                    id={id}
                    data-id={dataId}
                    data-testid='antd-range-picker'
                    format={format ?? 'DD/MM/YYYY'}
                    separator={<Icon name='arrow_right' size={18} color='gray600' ariaLabel='to' />}
                    suffixIcon={<Icon name='calendar_range' size={18} color='gray600' ariaLabel='Calendar icon' />}
                    theme={th}
                    // role='dialog'
                    //aria-label={id}
                    aria-disabled={(props.disabled as boolean) || false}
                />
            </ConfigProvider>
        </>
    );
}, 'rangepicker');

type DatePickerType = { type: 'date' | 'range' } & (AntdDatePickerProps | AntdRangePickerProps);

export const DatePicker = ({ type, ...props }: DatePickerType) => {
    if (type === 'range') {
        return <AntdRangePicker {...(props as AntdRangePickerProps)} />;
    }
    return <AntdDatePicker {...(props as AntdDatePickerProps)} />;
};
