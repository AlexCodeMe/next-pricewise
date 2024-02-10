export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim();

        // Use a regular expression to extract digits and the first period
        const match = priceText.match(/\d+(\.\d+)?/);
        if (match) {
            return parseInt(match[0]);
        }
    }

    return '';
}
