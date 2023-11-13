export enum Region {
    Africa = 'Africa',
    Americas = 'Americas',
    Asia = 'Asia',
    Europe = 'Europe',
    Oceania = 'Oceania',
}
export interface SmallCountry {
    name: string;
    cca3: string;
    borders: string[];
}

export interface Country {
    name:         Name;
    cca3:         string;
    cioc?:        string;
    status:       Status;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currencies {
    ALL?: All;
    EUR?: All;
    UAH?: All;
    GIP?: All;
    BGN?: All;
    RON?: All;
    GBP?: All;
    JEP?: All;
    GGP?: All;
    DKK?: All;
    FOK?: All;
    CHF?: All;
    NOK?: All;
    RSD?: All;
    PLN?: All;
    MDL?: All;
    HUF?: All;
    CZK?: All;
    BYN?: All;
    ISK?: All;
    RUB?: All;
    SEK?: All;
    BAM?: BAM;
    MKD?: All;
    IMP?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    sqi?: string;
    ell?: string;
    tur?: string;
    eng?: string;
    gle?: string;
    hrv?: string;
    fin?: string;
    swe?: string;
    nld?: string;
    srp?: string;
    por?: string;
    spa?: string;
    ukr?: string;
    de?:  string;
    deu?: string;
    bul?: string;
    ron?: string;
    fra?: string;
    nrf?: string;
    nfr?: string;
    ita?: string;
    lat?: string;
    lit?: string;
    dan?: string;
    fao?: string;
    gsw?: string;
    roh?: string;
    nor?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    cat?: string;
    ltz?: string;
    est?: string;
    pol?: string;
    hun?: string;
    ces?: string;
    slk?: string;
    cnr?: string;
    bel?: string;
    rus?: string;
    isl?: string;
    lav?: string;
    mlt?: string;
    slv?: string;
    bos?: string;
    mkd?: string;
    glv?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
