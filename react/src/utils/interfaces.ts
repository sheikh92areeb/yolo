export interface NavItems {
    path: string,
    label: string
};

export interface Titles {
    hero: string,
    eat: string,
    play: string,
    relax: string,
    about: string
};

export interface ContactUs {
    title: string,
    text: string,
    address: string,
    phone: string,
    email: string
}

export interface States {
    icon: string,
    text: string,
    iconNoColor: string
}

export interface Info {
    image: string,
    title: string,
    tagline: string,
    desc: string
}

export interface MoreInfo {
    title: string,
    text: string,
    schedule: string,
    dontForget: string,
    tips: string
}

export interface Category {
    icon: string,
    name: string
};

export interface Locations {
    id: string,
    image: string,
    title: string,
    location: string,
    category: Category,
    description: string,
    extras: string,
    price: string,
    days: string
}
