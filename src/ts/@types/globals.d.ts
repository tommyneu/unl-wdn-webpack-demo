namespace dcf{
    export interface options{

    }
    export interface init{
        (input: NodeListOf<HTMLElement> | HTMLElement, options?: dcf.options): NodeListOf<HTMLElement> | HTMLElement
    }
    export interface plugin{
        selector: string,
        init: dcf.init
    }
}