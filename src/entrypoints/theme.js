import app from '../components/app';
import captcha from '../components/captcha';

// Start up app
app.mount();

// Side effects
captcha();

// Code credit
console.groupCollapsed('Site Credits');
console.log('Design by Practice https://www.practice.inc');
console.log('Development by Gardener https://www.gardener.nyc');
console.groupEnd();
