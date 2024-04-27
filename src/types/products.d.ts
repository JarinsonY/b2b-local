interface DtoCreateProduct {
    active: boolean;
    barcode: string | null;
    business_id: string;
    created_at: Date | null;
    deleted_at: Date | null;
    description: string;
    ean: string | null;
    external_id: string | null;
    length: number | null;
    manage_inventory: boolean;
    msrp_price: number;
    price: number;
    product_id: string | null;
    sku: string | null;
    status: string | null;
    subtitle: string | null;
    title: string;
    upc: string | null;
    updated_at: Date | null;
    weight: number | null;
    width: number | null;
}

interface DtoUpdateProduct {
    active: boolean;
    barcode: string | null;
    business_id: string;
    created_at: Date | null;
    deleted_at: Date | null;
    description: string;
    ean: string | null;
    external_id: string | null;
    length: number | null;
    manage_inventory: boolean;
    msrp_price: number;
    price: number;
    product_id: string | null;
    sku: string | null;
    status: string | null;
    subtitle: string | null;
    title: string;
    upc: string | null;
    updated_at: Date | null;
    weight: number | null;
    width: number | null;
}
