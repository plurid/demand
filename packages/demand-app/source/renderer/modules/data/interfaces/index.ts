export interface Terminal {
    id: string;
    lines: string[];
}


export interface TerminalPluriverse {
    id: string;
    name?: string;
    terminals: string[];
}
