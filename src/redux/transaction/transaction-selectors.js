export const getAllIncomePerMonth = month => state => {
    const income = state.transaction.transaction.transactions.income
    return income.find((post) => post.month === month);;
}

export const getAllSpendPerMonth = month => state => {
    const spend = state.transaction.transaction.transactions.spend
    return spend.find((post) => post.month === month);
}
export const getAllSpendSummary = state => state.transaction.transaction.summary.spend

export const getAllIncomeSummary = state => state.transaction.transaction.summary.income

export const getIncomeSummaryPerMonth = month => state => {
    const income = state.transaction.transaction.summary.income
    return income[month - 1];
}

export const getSpendSummaryPerMonth = month => state => {
    const spend = state.transaction.transaction.summary.spend
    return spend[month - 1];
}

export const getCurrentMonth = state => {
    const date = state.transaction.date
    return date.getMonth() + 1;
}

export const getCurrentYear = state => {
    const date = state.transaction.date
    return date.getFullYear();

}

export const getCurrentDay = state => {
    const date = state.transaction.date
    return date.getDate()
}

export const getIncomeReportDataPerMonth = month => state => {
    const income = state.transaction.transaction.reportData.income
    return income[month - 1];
}
export const getSpendReportDataPerMonth = month => state => {
    const spend = state.transaction.transaction.reportData.spend
    return spend[month - 1];
}

