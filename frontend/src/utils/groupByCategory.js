/**
 * Groups expenses by category and sums amounts
 *
 * @param {Array} expenses
 * @returns {Array<{name: string, value: number}>}
 */
export function groupByCategory(expenses) {
    const categoryMap = {};

    for (const expense of expenses) {
        const category = expense.category || "Uncategorized";
        categoryMap[category] =
            (categoryMap[category] || 0) + Number(expense.amount);
    }

    return Object.entries(categoryMap).map(([name, value]) => ({
        name,
        value
    }));
}
