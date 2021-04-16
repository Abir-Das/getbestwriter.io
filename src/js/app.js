import "../scss/app.scss";
import "./typing.js";

import 'alpinejs'
import {tns} from 'tiny-slider/src/tiny-slider';

require('./common.js');

window.addEventListener('load', ()=>{
    if(document.querySelector('.service-container') )
    {
        tns({
            "container": ".service-container",
            "loop": true,
            "gutter": 30,
            "controlsText" : ['<i class="fas fa-chevron-left fa-2x"></i>','<i class="fas fa-chevron-right fa-2x"></i>'],
            "nav":false,
            "items" : 1,
            "responsive": {
                "992": {
                "items": 3
                }
            }
        });
    }
    

})

