import {getVueInstance} from '../utils';

export default function adMandatory() {
    let vue = getVueInstance('#vjs-mandatory-advertisement');
    if (!vue) {
        console.warn('mandatory ad vue is not detected.');
        return;
    }
    if (!vue.advertising) {
        console.log('no ad on this video.');
        return;
    }

    // allow close mandatory ad
    vue.advertising.closeMandatory = true;

    // force finish the first ad
    vue.$set(vue, 'currentAdvertisingTime', parseFloat('Infinity'));

    // remove all mandatory ads
    let adIndexes = Object.keys(vue.advertising.mandatory);
    for (let i = 0; i < adIndexes.length; i++) {
        let mandatory = vue.advertising.mandatory[adIndexes[i]];
        if (mandatory) {
            mandatory.length = 0;
        }
    }
};
