import { en } from './translations/en';
import { pl } from './translations/pl';
export const languages = {
    en: 'English',
    pl: 'Polish',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
    en,
    pl
} as const;
