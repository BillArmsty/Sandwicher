export const normalizeMessage = (message: string) => {
    return message
        .replace(/_/g, "\\_")
        .replace(/\*/g, "\\*")
        .replace(/`/g, "\\`")
        .replace(/\[/g, "\\[")
        .replace(/]/g, "\\]")
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")
        .replace(/~/g, "\\~")
        .replace(/`/g, "\\`")
        .replace(/!/g, "\\!");
        
};