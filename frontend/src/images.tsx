import React from "react";
import { Description } from "./pages/business-card.page.styles";

export const bagsImages = {
    description: (<Description>
        <b>Tkanina</b>: Bawełniana lub wodoodporna<br /><br />
        <b>Podszewka</b>: Bawełniana<br /><br />
        Wewnątrz naszyta kieszeń zamykana na zamek błyskawiczny.
        Do torby doszyte są dwa uchwyty.
        Taśma nośna doszyta do torby - 2 x 64 cm
        <br /><br /><b>Przykładowe wymiary torby: </b>
        <br />Długość - 43 cm
        <br />Szerokość - 38 cm
    </Description>),
    images: [
        {
            image: require("./assets/torba1.jpg")
        },
        {
            image: require("./assets/torba2.jpg")
        },
        {
            image: require("./assets/torba3.jpg")
        },
        {
            image: require("./assets/torba4.jpg")
        },
        {
            image: require("./assets/torba5.jpg")
        },
        {
            image: require("./assets/torba6.jpg")
        }
    ]
}

export const masksImages = {
    description: (<Description>
        <b>Tkanina</b>: Bawełniana<br/><br/>
        Maseczki dwustronne z tkaniny bawełnianej,
        dostępne są różne rozmiary i kolory

    </Description>),
    images: [
        {
            image: require("./assets/masks2.jpg")
        },
        {
            image: require("./assets/masks3.jpg")
        },
        {
            image: require("./assets/masks4.jpg")
        },
        {
            image: require("./assets/masks5.jpg")
        },
        {
            image: require("./assets/masks6.jpg")
        },
        {
            image: require("./assets/masks7.jpg")
        }
    ]
}

export const backpacksImages = {
    description: (<Description>
        <b>Tkanina</b>: Bawełniana lub wodoodporna<br/><br/>
        <b>Podszewka</b>: Bawełniana<br /><br />
        Plecak z tkaniny bawełnianej lub wodoodpornej, ściągany na sznurek.
        Plecak wykończony podszewką z tkaniny bawełnianej.
        Wewnątrz naszyta kieszonka zamykana na zamek błyskawiczny. Dostępne są różne rozmiary i kolory<br /><br />
        <b>Wymiary plecaka:</b><br />
        Długość - 44 cm<br />
        Szerokość - 36 cm<br />

    </Description>),
    images: [
        {
            image: require("./assets/backpack1.jpg")
        },
        {
            image: require("./assets/backpack2.jpg")
        },
        {
            image: require("./assets/backpack3.jpg")
        },
        {
            image: require("./assets/backpack4.jpg")
        }
    ]
}

export const beauticianImages = {
    description: (<Description>
        <b>Tkanina</b>: Bawełniana lub wodoodporna pikowana<br/><br/>
        <b>Podszewka</b>: Bawełniana<br /><br />
        Kosmetyczka zamykana na zamek błyskawiczny. Dostepne są różne rozmiary i kolory<br /><br />
        <b>Wymiary kosmetyczki:</b><br />
        Wysokość - 15 cm<br />
        Długość - 29 cm<br />

    </Description>),
    images: [
        {
            image: require("./assets/kosmetyczka1.jpg")
        },
        {
            image: require("./assets/kosmetyczka2.jpg")
        },
        {
            image: require("./assets/kosmetyczka4.jpg")
        },
        {
            image: require("./assets/kosmetyczka5.jpg")
        },
        {
            image: require("./assets/kosmetyczka6.jpg")
        },
        {
            image: require("./assets/kosmetyczka7.jpg")
        }
    ]
}

export const etuiImages = {
    description: (<Description>
        <b>Tkanina</b>: Bawełniana lub wodoodporna pikowana<br/><br/>
        <b>Podszewka</b>: Bawełniana<br /><br />
        Kosmetyczka zamykana na zamek błyskawiczny. Dostepne są różne rozmiary i kolory<br /><br />
        <b>Wymiary kosmetyczki:</b><br />
        Wysokość - 15 cm<br />
        Długość - 29 cm<br />

    </Description>),
    images: [
        {
            image: require("./assets/etui1.jpg")
        },
        {
            image: require("./assets/etui2.jpg")
        },
        {
            image: require("./assets/etui3.jpg")
        }
    ]
}

export const otherImages = {
    description: (<Description></Description>),
    images: [
        {
            image: require("./assets/other1.jpg")
        },
        {
            image: require("./assets/other2.jpg")
        },
        {
            image: require("./assets/other3.jpg")
        }
    ]
}

const MATERIALS_WIDTH = 5;
const MATERIAL_HEIGHT = 3;

export const materialsPhotos = [
    {
        src: require('./assets/tkaniny/bawelna.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna2.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna3.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna4.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna5.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna6.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna7.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna8.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna9.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna10.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna11.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna12.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna13.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna25.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna14.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna15.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna16.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna17.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna18.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna19.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna24.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna20.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna21.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna22.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna23.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna27.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna28.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna29.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna30.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna31.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna32.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna33.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna34.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    },
    {
        src: require('./assets/tkaniny/bawelna36.jpg'),
        width: MATERIALS_WIDTH,
        height: MATERIAL_HEIGHT
    }
];

export const bagImages = [
    {
        src: require('./assets/torba1.jpg')
    },
    {
        src: require('./assets/torba2.jpg')
    },
    {
        src: require('./assets/torba3.jpg')
    },
    {
        src: require('./assets/torba4.jpg')
    },
    {
        src: require('./assets/torba5.jpg')
    }
];
