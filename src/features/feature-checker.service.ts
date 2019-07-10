import { Injectable } from '@angular/core';

@Injectable()
export class FeatureCheckerService {

    get(featureName: string): geev.features.IFeature {
        return geev.features.get(featureName);
    }

    getValue(featureName: string): string {
        return geev.features.getValue(featureName);
    }

    isEnabled(featureName: string): boolean {
        return geev.features.isEnabled(featureName);
    }

}