import { NgModule } from '@angular/core';
import { GeevSessionService } from './session/geev-session.service';
import { PermissionCheckerService } from './auth/permission-checker.service';
import { FeatureCheckerService } from './features/feature-checker.service';
import { LocalizationService } from './localization/localization.service';
import { SettingService } from './settings/setting.service';
import { NotifyService } from './notify/notify.service';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { GeevMultiTenancyService } from './multi-tenancy/geev-multi-tenancy.service';
import { GeevHttpConfiguration } from './geevHttpInterceptor';
import { GeevUserConfigurationService } from './geev-user-configuration.service';
import { TokenService } from './auth/token.service';
import { UtilsService } from './utils/utils.service';

@NgModule({
    declarations: [
    ],

    providers: [
        GeevSessionService,
        PermissionCheckerService,
        FeatureCheckerService,
        LocalizationService,
        SettingService,
        NotifyService,
        MessageService,
        LogService,
        GeevMultiTenancyService,
        GeevUserConfigurationService,
        GeevHttpConfiguration,
        TokenService,
        UtilsService
    ]
})
export class GeevModule { }