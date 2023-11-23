
function bold(text: string): string {
    const bold = /\*(.*?)\*/gm;

    return text.replace(bold, '<strong>$1</strong>');

    return html;
}

function italic(text: string): string {
    const em = /\_(.*?)\_/gm;

    return text.replace(em, '<em>$1</em>');
}

export function stylize(text: string): string {
    return italic(bold(text));
}

export function preformatDate(date: string): string {
    const result = new Date(date);

    return result.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function preformatLongDate(date: string): string {
    const result = new Date(date);

    return result.toLocaleDateString('pl-PL');
}
