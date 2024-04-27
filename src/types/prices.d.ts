interface DtoCreatePriceList {
    active: boolean;
    business_id: string;
    currency_code: string | null;
    default: boolean;
    discount: string | null;
    end_date: Date | null;
    min_quantity: number;
    name: string;
    start_date: Date | null;
}

interface DtoUpdatePriceList {
    active: boolean;
    business_id: string;
    currency_code: string | null;
    default: boolean;
    discount: string | null;
    end_date: Date | null;
    min_quantity: number;
    name: string;
    start_date: Date | null;
}
