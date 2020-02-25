export class Filter
{
    category?: string;
    search?: string;
    related: boolean = true;
    reset()
    {
        this.category = this.search = null;
        this.related = false;
    }
}  