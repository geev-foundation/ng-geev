import { Injectable } from '@angular/core';

@Injectable()
export class LocalizationService {

    get languages(): geev.localization.ILanguageInfo[] {
        return geev.localization.languages;
    }

    get currentLanguage(): geev.localization.ILanguageInfo {
        return geev.localization.currentLanguage;
    }

    localize(key: string, sourceName: string): string {
        return geev.localization.localize(key, sourceName);
    }
    
    getSource(sourceName: string): (key: string) => string {
        return geev.localization.getSource(sourceName);
    }

}