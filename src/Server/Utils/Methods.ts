export function Get(slug: string): Function
{
    return function child<T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        return class extends constructor {
            Kind: string = "GET";
            Slug: string = slug;
        };
    }
}

export function Post(slug: string): Function
{
    return function child<T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        return class extends constructor {
            Kind: string = "POST";
            Slug: string = slug;
        };
    }
}

export function Delete(slug: string): Function
{
    return function child<T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        return class extends constructor {
            Kind: string = "DELETE";
            Slug: string = slug;
        };
    }
}

export function Put(slug: string): Function
{
    return function child<T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        return class extends constructor {
            Kind: string = "PUT";
            Slug: string = slug;
        };
    }
}

export function Patch(slug: string): Function
{
    return function child<T extends { new(...args: any[]): {} }>(constructor: T) 
    {
        return class extends constructor {
            Kind: string = "PATCH";
            Slug: string = slug;
        };
    }
}

