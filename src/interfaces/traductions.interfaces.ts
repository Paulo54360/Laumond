// translations.interface.ts

export interface NavbarTraduction {
    MétaHisme: string;
    Oeuvres: string;
    Biographie: string;
    Actualités: string;
    Analyses: string;
}

export interface OeuvresTraduction {
    Archétypes: string;
    Déploiements: string;
    Transcriptions: string;
    Dessins: string;
}

export interface MetaHismeTraduction {
    Titre: string;
    Texte: string;
    Texte2: string;
    Texte3: string;
    Texte4_1: string;
    Texte4_2: string;
    Texte4_3: string;
    Texte5: string;
    Texte6_1: string;
    Texte6_2: string;
    Texte7: string;
    Texte8_1: string;
    Texte8_2: string;
    Texte8_3: string;
    Texte9: string;
    Texte10_1: string;
    Texte10_2: string;
    Texte10_3: string;
    Texte11: string;
    Texte12_1: string;
    Texte12_2: string;
    Texte12_3: string;
    Texte12_4: string;
    Texte12_5: string;
    Texte12_6: string;
    Texte12_7: string;
    Texte13: string;
    Texte14: string;
    Texte15: string;
    Texte16: string;
}

export interface AnalysesTraduction {
    TitreCU: string;
    TexteCU: string;
    AuteurCU: string;
    TitreCDA: string;
    Texte1CDA: string;
    Texte2CDA: string;
    Texte3CDA: string;
    AuteurCDA: string;
}

export interface Traductions {
    navbar: NavbarTraduction;
    Oeuvres: OeuvresTraduction;
    MétaHisme: MetaHismeTraduction;
    Analyses: AnalysesTraduction;
}

export interface Langues {
    fr: Traductions;
    en: Traductions;
}
